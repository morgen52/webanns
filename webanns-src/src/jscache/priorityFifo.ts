import { BaseCache } from "../jscache";

export class PriorityFIFOCache extends BaseCache {
  private fifoList: number[] = [];
  private priorityFIFOSet: Set<number> = new Set();

  constructor(_maxJsMemory: number) {
    super(_maxJsMemory);
    this.strategy = "PriorityFIFO";
  }

  // debug method: the +/- of key in two list/set must match the +/- of value in jsCache
  deleteSome(): void {
    while (
      this.jsCache.size > this.itemsThreshold &&
      this.fifoList.length > 0
    ) {
      const oldestKey = this.fifoList.shift();
      if (oldestKey !== undefined) {
        if (!this.priorityItemSet.has(oldestKey)) {
          this.jsCache.delete(oldestKey);
        } else {
          // if key in fifoList is in priorityItemSet,
          // means that this.itemsThreshold has changed to a greater value.
          this.priorityFIFOSet.add(oldestKey);
          // not delete in jsCache, that is, also a set in jsCache
        }
      }
    }

    // If jsCache.size is still greater than this.itemsThreshold,
    // means that this.itemsThreshold has changed to a smaller value,
    if (this.jsCache.size > this.itemsThreshold) {
      // Check the priorityFIFOSet from front to back, and if a key is not in priorityItemSet, remove it
      const keysArray = Array.from(this.priorityFIFOSet);
      for (const key of keysArray) {
        if (!this.priorityItemSet.has(key)) {
          this.priorityFIFOSet.delete(key);
          if (this.jsCache.size > this.itemsThreshold) {
            this.jsCache.delete(key);
          } else {
            this.fifoList.push(key);
          }
        }
      }
    }
  }

  set(key: number, value: Float32Array): void {
    if (this.embedSize === 0) {
      this.setEmbedSize(value.length);
    }

    if (this.has(key)) {
      this.jsCache.set(key, value);
      return;
    }

    if (this.priorityItemSet.has(key)) {
      this.jsCache.set(key, value);
      // assert !this.priorityFIFOSet.has(key)
      if (this.priorityFIFOSet.has(key)) {
        throw new Error(
          `PriorityFIFOCache::set: key ${key} is in priorityFIFOSet`,
        );
      }
      this.priorityFIFOSet.add(key);
      this.deleteSome();
    } else {
      if (this.priorityFIFOSet.size >= this.itemsThreshold) {
        return; // do not add more unimportant items than the threshold
      }
      this.jsCache.set(key, value);
      this.fifoList.push(key);
      this.deleteSome();
    }
  }

  delete(key: number): void {
    this.jsCache.delete(key);
    this.fifoList = this.fifoList.filter((k) => k !== key);
    this.priorityFIFOSet.delete(key);
  }

  clear(): void {
    this.jsCache.clear();
    this.fifoList = [];
    this.priorityFIFOSet.clear();
  }

  printConfig(): void {
    super.printConfig();
    console.log(`JS::strategy: ${this.strategy}`);
    console.log(`JS::fifoList.length: ${this.fifoList.length}`);
    console.log(`JS::priorityFIFOSet.size: ${this.priorityFIFOSet.size}`);
  }
}
