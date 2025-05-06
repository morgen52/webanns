import createHNSW, { HNSW, MainModule } from "./wasm/hnsw_main";
import { DataManager } from "./dataManager";
import { IndexedDBManager } from "./indexeddb";
import { FastTimer, Timers } from "./utils";
import { DEBUG } from "./macro";
// import { MememoIndexJSON } from './mememo';

export interface WRAGInterface {
  wasmModule: MainModule;
  hnswInstance: HNSW;
  dbInstance: IndexedDBManager;
  dataManager: DataManager;
  setParams(settings: any): void;
  init(): void;
  exit(): void;
  insert(key: string, vector: Float32Array, layer?: number): void;
  insertSkipIndex(key: string, vector: Float32Array, layer?: number): void;
  loadIndex(indexTree: string): void;
  loadJsonlIndex(indexLine: string): void;
  exportJsonlIndex(): string;
  query(query: number[], k: number, ef: number): void;
  clearDB(): void; // async
  clearMonitor(): void;
  setMonitorMode(mode: string): void;
  print(): void;
  getJsonExps(): void;
  bulkGetFromDB(
    iids: number[],
    idsPtr: number,
    valuesPtr: number,
    embSize: number,
    flagPtr: number,
  ): Promise<number>;
  loadJ2W_nodb(iid: number, ptr: number, size: number): number;
  loadJ2W(
    iid: number,
    ptr: number,
    size: number,
    flagPtr: number,
  ): Promise<number>;
  saveW2J(
    iidsPtr: number,
    iidsSize: number,
    valuesPtr: number,
    valuesSize: number,
    embedSize: number,
  ): void;
}

export class WRAG implements WRAGInterface {
  public wasmModule: MainModule = null;
  public hnswInstance: HNSW = null;
  public dbInstance: IndexedDBManager = new IndexedDBManager();
  public dataManager: DataManager = new DataManager();
  // private initFlag: boolean = false;
  // private lazyLoading: boolean = true;
  // private mememoKeyMap: Map<string, number> = new Map<string, number>();

  public timers: Timers = new Timers();
  // public optimizeCacheRecords: [number, number][] = []; // [sizem, theta]
  public optimizeCacheRecords: [{ js: number; wasm: number }, number][] = []; // [{js, wasm}, theta]

  constructor() {}

  async setParams(settings: any) {
    console.log("WRAG::setParams: Start setting parameters");
    if (
      settings.m !== undefined &&
      settings.efConstruction !== undefined &&
      settings.lazyLoading !== undefined
    ) {
      this.hnswInstance.setParams(
        settings.m,
        settings.efConstruction,
        settings.lazyLoading,
      );
    }
    if (settings.wasmMemory !== undefined) {
      this.hnswInstance.setWasmMemory(settings.wasmMemory);
    }
    if (settings.jsMemory !== undefined) {
      this.dataManager.valueManager.setJsMemorySize(settings.jsMemory);
    }
    if (settings.cacheStrategy !== undefined) {
      this.dataManager.valueManager.setCacheStrategy(settings.cacheStrategy);
    }
  }

  async clearDB(): Promise<void> {
    await this.dbInstance.clear();
  }

  clearMonitor(): void {
    this.hnswInstance.clearMonitor();
    this.dataManager.clearMonitor();
  }

  setMonitorMode(mode: string): void {
    this.hnswInstance.setMonitorMode(mode);
    this.dataManager.setMonitorMode(mode);
  }

  async init(_clearDB: boolean = true) {
    this.wasmModule = await createHNSW();
    this.hnswInstance = new this.wasmModule.HNSW();
    await this.dbInstance.initDB(_clearDB);
    // this.initFlag = true;

    let savedIndexTree = await this.dbInstance.getIndexTree();
    if (savedIndexTree !== "") {
      console.log("WRAG::init: Loading index tree from IndexedDB");
      for (let line of savedIndexTree.split("\n")) {
        this.loadJsonlIndex(line);
      }
      // set value embed size at JS cache
      let valueKey = await this.dbInstance.getRandomKey();
      let value = await this.dbInstance.getValue(valueKey);
      this.dataManager.valueManager.set(valueKey, value);
      // set value embed size at Wasm
      this.hnswInstance.insertSkipIndex(valueKey, value, -1);
    }
  }

  async exit() {
    let indexTree: string = this.hnswInstance.exportJsonlIndex();
    await this.dbInstance.setIndexTree(indexTree);
  }

  async insert(key: string, vector: Float32Array, layer?: number) {
    this.timers.get("insert").start();

    const resultPromise = new Promise((resolve, reject) => {
      this.hnswInstance.setFinalPromise(resolve);
    });

    let curID = this.dataManager.allocateID();
    await this.dataManager.keyManager.set(curID, key, this.dbInstance); // set key cache in js

    this.dataManager.valueManager.set(curID, vector); // set value cache in js
    if (this.dataManager.valueManager.useDB) {
      const curVector = Float32Array.from(vector);
      await this.dbInstance.setValue(curID, curVector);
    }

    this.hnswInstance.insert(curID, vector, layer ?? -1); // insert into hnsw
    let iid = await resultPromise;

    this.timers.get("insert").end();

    if (DEBUG)
      console.log(
        `WRAG::insert: Inserted item ${curID} into HNSW with iid ${iid}`,
      );
  }

  async query(queryEmb: number[], k: number, queryEf: number) {
    this.timers.get("performSearch").start();

    let resultPromise: Promise<number> = new Promise((resolve, reject) => {
      this.hnswInstance.setFinalPromise(resolve);
    });

    // transfer queryEmb to vector<float> defined in Wasm
    let queryEmbTrans = new this.wasmModule.VectorFloat();
    let embLen = this.dataManager.valueManager.jsCache.embedSize;
    if (queryEmb.length !== embLen) {
      embLen = Math.min(queryEmb.length, embLen);
      console.warn(
        `warning! WRAG::query: query size=${queryEmb.length}, embed size=${embLen}`,
      );
    }
    for (let i = 0; i < embLen; i++) {
      queryEmbTrans.push_back(queryEmb[i]);
    }

    this.hnswInstance.query(queryEmbTrans, k, queryEf); // return vector<string>
    await resultPromise;

    let results = this.hnswInstance.getQueryResults();
    let resultIids: number[] = [];
    for (let i = 0; i < results.size(); i++) {
      resultIids.push(results.get(i)!.iid);
    }
    let resultsArray: string[] = await this.dataManager.keyManager.bulkGet(
      resultIids,
      this.dbInstance,
    );
    // let resultsArray: string[] = [];
    // for (var i = 0; i < results.size(); i++) {
    //     resultsArray.push(this.dataManager.keyManager.get(results.get(i)!.iid)!);
    // }

    this.timers.get("performSearch").end();

    if (this.optimizeCacheRecords.length > 0) {
      let cacheRecord: string = this.hnswInstance.getCacheCounter(); //return the counter in current mode!
      let cacheRecordArray = cacheRecord.split(",");
      const jsCacheHit = this.dataManager.valueManager.cacheCounters
        .get("ValueManager")
        .getHit();
      const num_db = parseInt(cacheRecordArray[1]) - jsCacheHit;
      const last_recordID = this.optimizeCacheRecords.length - 1;
      if (num_db > this.optimizeCacheRecords[last_recordID][1]) {
        if (this.optimizeCacheRecords.length > 0) {
          this.dataManager.valueManager.jsCache.setItemsThreshold(
            this.optimizeCacheRecords[last_recordID][0].js,
          );
          this.hnswInstance.setItemsThreshold(
            this.optimizeCacheRecords[last_recordID][0].wasm,
          );
          console.log(`WRAG::query: Cache size RE-optimized to (wasm=${this.optimizeCacheRecords[last_recordID][0].wasm}, 
                        js=${this.optimizeCacheRecords[last_recordID][0].js})`);
        }
        this.optimizeCacheRecords.pop();
      }
    }

    return resultsArray;
  }

  // renameKey(oldKey: string) {
  //     let id = oldKey.match(/(\d+)$/);
  //     let newKey = oldKey.substring(0, oldKey.length - id![0].length);
  //     if (newKey.length === 0) {
  //         return oldKey;
  //     }
  //     return newKey;
  // }

  key2id(key: string) {
    if (key.match(/^\d+$/)) {
      return parseInt(key);
    }
    let id = key.match(/^(\d+)@@/);
    return parseInt(id![1]);
  }

  loadJsonlIndex(indexLine: string) {
    if (!indexLine.trim()) {
      return;
    }
    let lineJson = JSON.parse(indexLine.trim());
    if (lineJson.graphlayer !== undefined) {
      this.hnswInstance.loadJsonlIndex(JSON.stringify(lineJson));
    } else if (lineJson.key !== undefined) {
      // New key entry in current graph layer
      let keyId = this.key2id(String(lineJson.key));
      this.hnswInstance.loadJsonlIndex(JSON.stringify({ key: keyId }));
    } else if (lineJson.nkey !== undefined) {
      // Neighbor key entry
      const nKey = this.key2id(String(lineJson.nkey));
      const distance = lineJson.distance;
      this.hnswInstance.loadJsonlIndex(
        JSON.stringify({ nkey: nKey, distance: distance }),
      );
    } else {
      // meta data
      lineJson.entryPointKey = this.key2id(lineJson.entryPointKey.toString());
      this.hnswInstance.loadJsonlIndex(JSON.stringify(lineJson));
    }
  }

  exportJsonlIndex(): string {
    return this.hnswInstance.exportJsonlIndex();
  }

  loadIndex(indexTree: string) {
    let parsedIndexTree = JSON.parse(indexTree);

    let entryPoint = parsedIndexTree["entryPointKey"];
    let epId = this.key2id(entryPoint);
    // this.mememoKeyMap.set(this.renameKey(entryPoint), parseInt(epId));

    parsedIndexTree["entryPointKey"] = epId;

    let newGraphLayers: { [id1: string]: { [id2: string]: number } }[] = [];
    for (let i = 0; i < parsedIndexTree["graphLayers"]!.length; i++) {
      let parsedLayer = parsedIndexTree["graphLayers"]![i];
      let newLayer: { [id1: string]: { [id2: string]: number } } = {};
      for (let key in parsedLayer) {
        let newNeighbors: { [id2: string]: number } = {};
        let qId = this.key2id(key);
        // this.mememoKeyMap.set(this.renameKey(key), parseInt(qId));

        for (let nKey in parsedLayer[key]) {
          let nId = this.key2id(nKey);
          // this.mememoKeyMap.set(this.renameKey(nKey), parseInt(nId));

          let distance = parsedLayer[key][nKey];
          newNeighbors[nId] = distance;
        }
        newLayer[qId] = newNeighbors;
      }
      newGraphLayers.push(newLayer);
    }
    parsedIndexTree["graphLayers"] = newGraphLayers;

    // record priority items
    if (this.dataManager.valueManager.jsCache.strategy === "PriorityFIFO") {
      this.dataManager.valueManager.jsCache.clearPriorityItems();
      this.dataManager.valueManager.jsCache.addPriorityItem(epId);
      for (let i = newGraphLayers.length - 1; i >= 1; i--) {
        // skip the last layer
        let parsedLayer = newGraphLayers[i];
        for (let qKey in parsedLayer) {
          let qId = parseInt(qKey);
          this.dataManager.valueManager.jsCache.addPriorityItem(qId);
        }
      }
      this.dataManager.valueManager.jsCache.adjustPriorityItems();
    }

    this.hnswInstance.loadIndex(JSON.stringify(parsedIndexTree));
  }

  async insertSkipIndex(key: string, vector: Float32Array, layer?: number) {
    // let curID = this.mememoKeyMap.get(key)!;
    // this.dataManager.curID = Math.max(this.dataManager.curID, curID + 1);

    let curID = this.dataManager.allocateID();
    await this.dataManager.keyManager.set(curID, key, this.dbInstance); // set key cache in js

    this.dataManager.valueManager.set(curID, vector); // set value cache in js
    if (this.dataManager.valueManager.useDB) {
      const curVector = Float32Array.from(vector);
      await this.dbInstance.setValue(curID, curVector);
    }

    this.hnswInstance.insertSkipIndex(curID, vector, layer ?? -1); // insert into hnsw
    if (DEBUG)
      console.log(`WRAG::insertSkipIndex: Inserted item ${curID} into HNSW`);
  }

  async checkOptimizeCacheSize(
    jsSizem: number,
    wasmSizem: number,
    tarP: number = 0.8,
    tarTime: number = 200,
  ): Promise<{
    js: number;
    wasm: number;
    num_query?: number;
    num_db?: number;
    theta?: number;
  }> {
    if (wasmSizem < 1) {
      return { js: 0, wasm: 0 };
    }

    // let old_jsItemsThreshold = this.dataManager.valueManager.jsCache.itemsThreshold;
    // let old_wasmItemsThreshold = this.hnswInstance.getItemsThreshold();

    this.dataManager.valueManager.jsCache.setItemsThreshold(jsSizem);
    this.hnswInstance.setItemsThreshold(wasmSizem);
    console.log(`WRAG::optimizeCacheSize: Start optimizing cache size \
            with ${jsSizem} JS items and ${wasmSizem} Wasm items.`);

    this.clearMonitor();
    // query test & get tdb, #db, #query, t_query
    // define performance_threshold theta > 0

    const t_query = await this.queryTest();
    let cacheRecord: string = this.hnswInstance.getCacheCounter();
    let cacheRecordArray = cacheRecord.split(",");
    const jsCacheHit = this.dataManager.valueManager.cacheCounters
      .get("ValueManager")
      .getHit();
    // let num_db = Math.max(parseInt(cacheRecordArray[1]), 1);
    const num_db = parseInt(cacheRecordArray[1]) - jsCacheHit;
    const num_query = parseInt(cacheRecordArray[0]) + num_db + jsCacheHit;
    console.log(
      `WRAG::optimizeCacheSize: num_db=${num_db}, num_query=${num_query}, t_query=${t_query}`,
    );

    let timeMonitor: FastTimer = new FastTimer("timeMonitor");
    timeMonitor.clear();
    let repeat = 10;
    for (let i = 0; i < repeat; i++) {
      // let rk = this.dataManager.valueManager.jsCache.getRandomKey();
      let rk = await this.dbInstance.getRandomKey();
      if (rk === -1) {
        console.log("WRAG::optimizeCacheSize: No data in DB.");
        return { js: 0, wasm: 0 };
      }
      timeMonitor.start();
      await this.dbInstance.getValue(rk);
      timeMonitor.end();
    }
    const t_db = Math.max(timeMonitor.getAverage(), 1.0); // t_db is ms level
    console.log(`WRAG::optimizeCacheSize: t_db=${t_db}`);

    const theta_k = tarP; // should < 1
    // const theta = theta_k * t_query / ((theta_k + 1)*t_db);
    const theta = Math.max((theta_k * t_query) / t_db, tarTime / t_db); // 200ms/t_db is the lower bound
    console.log(`WRAG::optimizeCacheSize: theta=${theta}`);

    // this.dataManager.valueManager.jsCache.setItemsThreshold(old_jsItemsThreshold);
    // this.hnswInstance.setItemsThreshold(old_wasmItemsThreshold);

    if (t_query > (tarTime / theta_k) * 1.5) {
      // relax a bit
      return { js: 0, wasm: 0 };
    }

    if (num_db > theta) {
      return { js: 0, wasm: 0 };
    } else {
      return {
        js: jsSizem,
        wasm: wasmSizem,
        num_query: num_query,
        num_db: num_db,
        theta: theta,
      };
    }
  }

  async calNewCacheSize(
    num_query: number,
    num_db: number,
    jsSizem: number,
    wasmSizem: number,
    theta: number,
  ): Promise<{
    js: number;
    wasm: number;
  }> {
    // const k = (num_query - num_db) / (1 - sizem);
    const k = (num_query - num_db) / (1 - (jsSizem + wasmSizem));
    const new_x = Math.ceil((theta - num_query) / k + 1);

    const newJsSize = Math.max(new_x - wasmSizem, 0);
    const newWasmSize = Math.min(wasmSizem, new_x);
    console.log(
      `WRAG::optimizeCacheSize: k=${k}, new_x=${new_x}, newJsSize=${newJsSize}, newWasmSize=${newWasmSize}`,
    );

    // if (new_x >= sizem || new_x <= 0) {
    if (new_x >= jsSizem + wasmSizem || new_x <= 0) {
      return { js: 0, wasm: 0 };
    }

    return { js: newJsSize, wasm: newWasmSize };
  }

  async optimizeCacheSize(
    tarP: number = 0.8,
    tarTime: number = 200,
  ): Promise<{ js: number; wasm: number }> {
    this.timers.get("optimizeCacheSize").start();

    let bestJsSize = this.dataManager.valueManager.jsCache.size();
    let bestWasmSize = this.hnswInstance.getCacheSize();
    let curJsSize = this.dataManager.valueManager.jsCache.size();
    let curWasmSize = this.hnswInstance.getCacheSize();
    while (curJsSize + curWasmSize > 0) {
      let curConfig = await this.checkOptimizeCacheSize(
        curJsSize,
        curWasmSize,
        tarP,
        tarTime,
      );
      if (curConfig.wasm <= 0) {
        break;
      } else {
        // pass the check
        this.optimizeCacheRecords.push([
          { js: curJsSize, wasm: curWasmSize },
          curConfig.theta,
        ]);
      }
      bestJsSize = curConfig.js;
      bestWasmSize = curConfig.wasm;
      let curSize = await this.calNewCacheSize(
        curConfig.num_query,
        curConfig.num_db,
        curConfig.js,
        curConfig.wasm,
        curConfig.theta,
      );
      if (
        curSize.js + curSize.wasm <= 0 ||
        curSize.js + curSize.wasm > bestJsSize + bestWasmSize
      ) {
        break;
      }
      curJsSize = curSize.js;
      curWasmSize = curSize.wasm;
    }

    this.clearMonitor();
    this.dataManager.valueManager.jsCache.setItemsThreshold(curJsSize);
    this.hnswInstance.setItemsThreshold(curWasmSize);

    this.timers.get("optimizeCacheSize").end();
    return { js: curJsSize, wasm: curWasmSize };
  }

  async queryTest() {
    console.log("WRAG::queryTest: Start query test");

    let resultPromise: Promise<number> = new Promise((resolve, reject) => {
      this.hnswInstance.setFinalPromise(resolve);
    });

    let queryEmbTrans = new this.wasmModule.VectorFloat();
    for (let i = 0; i < this.dataManager.valueManager.jsCache.embedSize; i++) {
      queryEmbTrans.push_back(Math.random());
    }

    const k = 10;

    let startTime = performance.now();
    this.hnswInstance.query(queryEmbTrans, k, -1); // return vector<string>
    await resultPromise;

    return performance.now() - startTime;
  }

  print() {
    // console.log("WRAG: print");
    // print optimizeCacheRecords
    console.log("WRAG::optimizeCacheRecords:");
    for (let i = 0; i < this.optimizeCacheRecords.length; i++) {
      console.log(`WRAG::CacheSize (Round${i}): js=${this.optimizeCacheRecords[i][0].js}, \
                wasm=${this.optimizeCacheRecords[i][0].wasm}, theta=${this.optimizeCacheRecords[i][1]}`);
    }
    this.hnswInstance.print();
  }

  getJsonExps() {
    return {
      JSoptimizeCacheRecords: this.optimizeCacheRecords,
      JStimers: this.timers.toJSON(),
      WASMhnsw: JSON.parse(this.hnswInstance.getJsonStrExps()),
      JSdataManager: this.dataManager.getJsonExps(),
    };
  }

  async bulkGetFromDB(
    iids: number[],
    idsPtr: number,
    valuesPtr: number,
    embSize: number,
    flagPtr: number,
  ): Promise<number> {
    if (DEBUG)
      console.log(
        `WRAG::bulkGetFromDB: start to load iids=${iids}, idsPtr=${idsPtr}, valuesPtr=${valuesPtr}, embSize=${embSize}`,
      );

    const dataLength = iids.length;
    for (let i = 0; i < dataLength; i++) {
      this.wasmModule.HEAP32[idsPtr / 4 + i] = 0;
    }
    const totalSize = dataLength * embSize;
    for (let i = 0; i < totalSize; i++) {
      this.wasmModule.HEAPF32[valuesPtr / 4 + i] = 0;
    }

    return new Promise(async (resolve, reject) => {
      try {
        const iidResults = new Int32Array(
          this.wasmModule.HEAP32.buffer,
          idsPtr,
          dataLength,
        );
        const valueResults = new Float32Array(
          this.wasmModule.HEAPF32.buffer,
          valuesPtr,
          totalSize,
        );

        const loadResults = await this.dbInstance.bulkGetValues(iids);

        if (loadResults.length < dataLength) {
          if (DEBUG)
            console.log(`WRAG::bulkGetFromDB: Data for some iids not found.`);
          this.wasmModule.HEAP32[flagPtr / 4] = 2; // some data not found
          reject(0);
        }

        for (let i = 0; i < dataLength; i++) {
          const value = loadResults[i].value;

          iidResults[i] = loadResults[i].iid;

          if (value === undefined || value.length === 0) {
            if (DEBUG)
              console.log(
                `WRAG::bulkGetFromDB: Data for iid ${iidResults[i]} not found.`,
              );
            this.wasmModule.HEAP32[flagPtr / 4] = 2; // some data not found
            reject(0);
          } else {
            if (DEBUG)
              console.log(
                `WRAG::bulkGetFromDB: Data for iid ${iidResults[i]} found.`,
              );

            valueResults.set(value, i * embSize);
          }
        }
        this.wasmModule.HEAP32[flagPtr / 4] = 1; // all data loaded
        resolve(1);
      } catch (error) {
        if (DEBUG)
          console.error(`WRAG::bulkGetFromDB: Error loading data: ${error}`);
        this.wasmModule.HEAP32[flagPtr / 4] = 2; // some data not found
        reject(0);
      }
    });
  }

  loadJ2W_nodb(iid: number, ptr: number, size: number): number {
    // if iid in cache, load from cache
    // else return 0
    let value: Float32Array | undefined =
      this.dataManager.valueManager.get_nodb(iid);
    if (value !== undefined) {
      const floatArray = new Float32Array(
        this.wasmModule.HEAPF32.buffer,
        ptr,
        size,
      );
      floatArray.set(value);
      if (DEBUG) console.log(`WRAG::loadJ2W_nodb: Data for iid ${iid} loaded.`);
      return 1;
    } else {
      if (DEBUG)
        console.log(`WRAG::loadJ2W_nodb: Data for iid ${iid} not found.`);
      return 0;
    }
  }

  // functions for wasm to call
  async loadJ2W(
    iid: number,
    ptr: number,
    size: number,
    flagPtr: number,
  ): Promise<number> {
    // load data from JavaScript to WebAssembly
    if (DEBUG)
      console.log(
        `WRAG::loadJ2W: start to load iid=${iid}, ptr=${ptr}, size=${size}`,
      );

    for (let i = 0; i < size; i++) {
      this.wasmModule.HEAPF32[ptr / 4 + i] = 0;
    }

    return new Promise(async (resolve, reject) => {
      this.dataManager.valueManager.get(iid, this.dbInstance).then((value) => {
        if (value === undefined || value.length === 0) {
          if (DEBUG)
            console.log(`WRAG::loadJ2W: Data for iid ${iid} not found.`);
          this.wasmModule.HEAP32[flagPtr / 4] = 2;
          reject(0);
        } else {
          const floatArray = new Float32Array(
            this.wasmModule.HEAPF32.buffer,
            ptr,
            size,
          );
          floatArray.set(value);
          this.wasmModule.HEAP32[flagPtr / 4] = 1;
          if (DEBUG) console.log(`WRAG::loadJ2W: Data for iid ${iid} loaded.`);
          resolve(1);
        }
      });
    });
  }

  saveW2J(
    iidsPtr: number,
    iidsSize: number,
    valuesPtr: number,
    valuesSize: number,
    embedSize: number,
  ) {
    // save data from WebAssembly to JavaScript
    const iids = new Int32Array(
      this.wasmModule.HEAP32.buffer,
      iidsPtr,
      iidsSize,
    );
    const values = new Float32Array(
      this.wasmModule.HEAPF32.buffer,
      valuesPtr,
      valuesSize,
    );
    for (let i = 0, emb_i = 0; i < iids.length; i++, emb_i += embedSize) {
      const iid = iids[i];
      const value = values.slice(emb_i, emb_i + embedSize);
      this.dataManager.valueManager.set(iid, value);
      if (DEBUG) console.log(`WRAG::saveW2J: Data for iid ${iid} saved.`);
    }
  }
}
