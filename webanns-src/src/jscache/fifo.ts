import { BaseCache } from "../jscache";

export class FIFOCache extends BaseCache {
  private fifoList: number[] = [];

  constructor(_maxJsMemory: number) {
    super(_maxJsMemory);
    this.strategy = "FIFO";
  }

  deleteSome(): void {
    while (this.jsCache.size > this.itemsThreshold) {
      const oldestKey = this.fifoList.shift();
      if (oldestKey !== undefined) {
        this.jsCache.delete(oldestKey);
      }
    }
  }

  set(key: number, value: Float32Array): void {
    if (this.embedSize === 0) {
      this.setEmbedSize(value.length);
    }

    if (this.has(key)) {
      this.jsCache.set(key, value);
    } else {
      this.jsCache.set(key, value);
      this.fifoList.push(key);
      this.deleteSome();
    }
  }

  delete(key: number): void {
    this.jsCache.delete(key);
    this.fifoList = this.fifoList.filter((k) => k !== key);
  }

  clear(): void {
    this.jsCache.clear();
    this.fifoList = [];
  }

  printConfig(): void {
    super.printConfig();
    console.log(`JS::strategy: ${this.strategy}`);
    console.log(`JS::fifoList.length: ${this.fifoList.length}`);
  }
}
