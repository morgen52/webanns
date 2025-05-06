import { JSCache } from "./jscache";
import { FIFOCache } from "./jscache/fifo";
import { LRUCache } from "./jscache/lru";
import { PriorityFIFOCache } from "./jscache/priorityFifo";
import { DEBUG } from "./macro";
import { IndexedDBManager } from "./indexeddb";
import { CACHECOUNTER, CacheCounters, TIMER, Timers, FastTimer } from "./utils";

export class ValueManager {
  useDB = true;
  jsCache: JSCache;
  maxJsMemory: number = 1001 * 768 * 4;

  cacheCounters: CacheCounters = new CacheCounters();
  timers: Timers = new Timers();
  // START_TIMER: boolean = false;

  constructor(
    jsCacheName: string = "FIFO",
    _maxJsMemory: number = 1001 * 768 * 4,
  ) {
    this.maxJsMemory = _maxJsMemory;
    if (jsCacheName === "FIFO") {
      this.jsCache = new FIFOCache(_maxJsMemory);
    } else if (jsCacheName === "LRU") {
      this.jsCache = new LRUCache(_maxJsMemory);
    } else if (jsCacheName === "PriorityFIFO") {
      this.jsCache = new PriorityFIFOCache(_maxJsMemory);
    } else {
      console.error(
        `JS::ValueManager::setCacheStrategy: ${jsCacheName} is not supported.`,
      );
    }
  }

  setCacheStrategy(jsCacheName: string) {
    console.log(`JS::ValueManager::setCacheStrategy: ${jsCacheName}`);

    if (jsCacheName === this.jsCache.strategy) {
      console.log(
        `JS::ValueManager::setCacheStrategy: ${jsCacheName} has not changed.`,
      );
      return;
    }

    this.maxJsMemory = this.jsCache.getJsMemorySize();
    if (jsCacheName === "FIFO") {
      this.jsCache = new FIFOCache(this.maxJsMemory);
    } else if (jsCacheName === "LRU") {
      this.jsCache = new LRUCache(this.maxJsMemory);
    } else if (jsCacheName === "PriorityFIFO") {
      this.jsCache = new PriorityFIFOCache(this.maxJsMemory);
    } else {
      console.error(
        `JS::ValueManager::setCacheStrategy: ${jsCacheName} is not supported.`,
      );
    }
  }

  setJsMemorySize(maxJsMemory: number) {
    this.maxJsMemory = maxJsMemory;
    this.jsCache.setJsMemorySize(maxJsMemory);
  }

  print() {
    // print
    console.log("JS::ValueManager:");
    if (CACHECOUNTER) {
      this.cacheCounters.print();
    }
    this.jsCache.printConfig();
    if (TIMER) {
      this.timers.print();
    }
  }

  getJsonExps() {
    let jsonRes: { [key: string]: any } = {};
    if (CACHECOUNTER) {
      jsonRes["cacheCounters"] = this.cacheCounters.toJSON();
    }
    jsonRes["jsCache"] = this.jsCache.toJSON();
    jsonRes["timers"] = this.timers.toJSON();
    return jsonRes;
  }

  clearMonitor() {
    this.cacheCounters.clear();
    this.timers.clear();
  }

  setMonitorMode(mode: string) {
    this.cacheCounters.setMode(mode);
    this.timers.setMode(mode);
  }

  get_nodb(iid: number): Float32Array | undefined {
    let value: Float32Array | undefined = undefined;

    if (this.jsCache.has(iid)) {
      if (TIMER) {
        this.timers.get("mem").start();
      }
      value = this.jsCache.get(iid);
      if (TIMER) {
        this.timers.get("mem").end();
      }

      // if(CACHECOUNTER)
      //     this.cacheCounters.get("ValueManager").hit(iid);
      if (DEBUG)
        console.log(
          `ValueManager::get_nodb: Data for iid ${iid} loaded from JSCache. value=${value}`,
        );
      return value;
    } else {
      // if(CACHECOUNTER)
      //     this.cacheCounters.get("ValueManager").miss(iid);
      if (DEBUG)
        console.log(
          `ValueManager::get_nodb: Data for iid ${iid} not found in JSCache.`,
        );
      return undefined;
    }
  }

  async get(
    iid: number,
    dbInstance: IndexedDBManager,
  ): Promise<Float32Array | undefined> {
    let value: Float32Array | undefined = undefined;

    if (this.jsCache.has(iid)) {
      if (TIMER) {
        this.timers.get("mem").start();
      }
      value = this.jsCache.get(iid);
      if (TIMER) {
        this.timers.get("mem").end();
      }

      if (CACHECOUNTER) this.cacheCounters.get("ValueManager").hit(iid);
      if (DEBUG)
        console.log(
          `ValueManager::get: Data for iid ${iid} loaded from JSCache. value=${value}`,
        );
      return value;
    }

    if (CACHECOUNTER) this.cacheCounters.get("ValueManager").miss(iid);

    if (TIMER) {
      this.timers.get("db").start();
    }
    value = await dbInstance.getValue(iid);
    if (TIMER) {
      this.timers.get("db").end();
    }

    this.set(iid, value); // save to jsCache
    if (DEBUG)
      console.log(
        `ValueManager::get: Data for iid ${iid} loaded from indexedDB. value=${value}`,
      );
    return value;
  }

  set(iid: number, value: Float32Array) {
    this.jsCache.set(iid, value);
  }
}
