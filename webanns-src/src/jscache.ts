export interface JSCache {
  maxJsMemory: number;
  embedSize: number;
  itemsThreshold: number;
  strategy: string;
  has(key: number): boolean;
  get(key: number): Float32Array | undefined;
  set(key: number, value: Float32Array): void;
  delete(key: number): void;
  clear(): void;
  size(): number;

  getRandomKey(): number;
  printConfig(): void;
  toJSON(): { [key: string]: any };
  getJsMemorySize(): number;
  setJsMemorySize(maxJsMemory: number): void;
  setItemsThreshold(itemsThreshold: number): void;
  setEmbedSize(embedSize: number): void;

  clearPriorityItems(): void;
  addPriorityItem(keys: number): void;
  adjustPriorityItems(): void;
}

export abstract class BaseCache implements JSCache {
  protected jsCache = new Map<number, Float32Array>();

  strategy: string;
  maxJsMemory: number;
  embedSize: number;
  itemsThreshold: number;

  priorityItemList: number[] = [];
  priorityItemSet: Set<number> = new Set();

  constructor(_maxJsMemory: number) {
    this.maxJsMemory = _maxJsMemory;
    this.embedSize = 0;
    this.itemsThreshold = 0;
    this.strategy = "BaseCache";
  }

  has(key: number): boolean {
    return this.jsCache.has(key);
  }

  size(): number {
    return this.jsCache.size;
  }

  clearPriorityItems(): void {
    this.priorityItemList = [];
    this.priorityItemSet = new Set();
  }

  addPriorityItem(key: number): void {
    if (!this.priorityItemSet.has(key)) {
      this.priorityItemList.push(key);
      this.priorityItemSet.add(key);
    }
  }

  adjustPriorityItems(): void {
    if (this.strategy !== "PriorityFIFO") {
      return;
    }

    if (this.itemsThreshold !== this.priorityItemSet.size) {
      this.priorityItemSet = new Set(
        this.priorityItemList.slice(0, this.itemsThreshold),
      );
    }
  }

  adjustItemsThreshold(): void {
    this.adjustPriorityItems();
    this.deleteSome();
  }

  getRandomKey(): number {
    return Array.from(this.jsCache.keys())[
      Math.floor(Math.random() * this.jsCache.size)
    ];
  }

  printConfig(): void {
    console.log("JS::BaseCache:");
    console.log(`JS::maxJsMemory: ${this.maxJsMemory}`);
    console.log(`JS::embedSize: ${this.embedSize}`);
    console.log(`JS::itemsThreshold: ${this.itemsThreshold}`);
  }

  toJSON(): { [key: string]: any } {
    return {
      maxJsMemory: this.maxJsMemory,
      embedSize: this.embedSize,
      itemsThreshold: this.itemsThreshold,
      strategy: this.strategy,
      size: this.size(),
    };
  }

  setJsMemorySize(_maxJsMemory: number) {
    this.maxJsMemory = _maxJsMemory;
    if (this.embedSize > 0) {
      this.itemsThreshold = Math.floor(this.maxJsMemory / (4 * this.embedSize));
      this.adjustItemsThreshold();
    }
  }

  getJsMemorySize(): number {
    return this.maxJsMemory;
  }

  setItemsThreshold(_itemsThreshold: number) {
    this.itemsThreshold = _itemsThreshold;
    this.adjustItemsThreshold();
  }

  setEmbedSize(_embedSize: number) {
    this.embedSize = _embedSize;
    this.itemsThreshold = Math.floor(this.maxJsMemory / (4 * this.embedSize));
    this.adjustItemsThreshold();
  }

  get(key: number): Float32Array | undefined {
    return this.jsCache.get(key);
  }

  abstract set(key: number, value: Float32Array): void;
  abstract delete(key: number): void;
  abstract clear(): void;
  abstract deleteSome(): void;
}

export class StringCache {
  name: string;
  keys: Map<number, string>;
  constructor(_name = "Cache") {
    this.name = _name;
    this.keys = new Map();
  }

  get(iid: number) {
    if (this.keys.has(iid)) {
      return this.keys.get(iid);
    } else {
      console.error(`${this.name}: Keys for iid ${iid} not found.`);
      return "";
    }
  }

  set(iid: number, key: string) {
    this.keys.set(iid, key);
  }
}
