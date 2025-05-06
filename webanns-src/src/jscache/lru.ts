import { BaseCache } from "../jscache";

class LRUNode {
  key: number;
  // value: Float32Array;
  prev: LRUNode | null;
  next: LRUNode | null;

  constructor(key: number) {
    this.key = key;
    // this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache extends BaseCache {
  private lruList: Map<number, LRUNode> = new Map();
  private lruHead: LRUNode | null = null;
  private lruTail: LRUNode | null = null;

  constructor(_maxJsMemory: number) {
    super(_maxJsMemory);
    this.strategy = "LRU";
  }

  private removeNode(node: LRUNode): void {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.lruHead = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.lruTail = node.prev;
    }
  }

  private addToHead(node: LRUNode): void {
    node.next = this.lruHead;
    node.prev = null;

    if (this.lruHead !== null) {
      this.lruHead.prev = node;
    }

    this.lruHead = node;

    if (this.lruTail === null) {
      this.lruTail = node;
    }
  }

  deleteSome(): void {
    while (
      this.itemsThreshold > 0 &&
      this.lruTail !== null &&
      this.jsCache.size > this.itemsThreshold
    ) {
      const keyToEvict = this.lruTail.key;
      this.removeNode(this.lruTail);
      this.jsCache.delete(keyToEvict);
      this.lruList.delete(keyToEvict);
    }
  }

  set(key: number, value: Float32Array): void {
    if (this.embedSize === 0) {
      this.setEmbedSize(value.length);
    }

    if (this.jsCache.has(key)) {
      const node = this.lruList.get(key)!;
      this.removeNode(node);
      this.jsCache.set(key, value);
      this.addToHead(node);
    } else {
      const newNode = new LRUNode(key);
      this.lruList.set(key, newNode);
      this.addToHead(newNode);
      this.jsCache.set(key, value);
      this.deleteSome();
    }
  }

  get(key: number): Float32Array | undefined {
    if (this.jsCache.has(key)) {
      const node = this.lruList.get(key)!;
      this.removeNode(node);
      this.addToHead(node);
      return this.jsCache.get(key)!;
    }
    return undefined;
  }

  delete(key: number): void {
    if (this.jsCache.has(key)) {
      const node = this.lruList.get(key)!;
      this.removeNode(node);
      this.jsCache.delete(key);
      this.lruList.delete(key);
    }
  }

  clear(): void {
    this.jsCache.clear();
    this.lruList.clear();
    this.lruHead = null;
    this.lruTail = null;
  }

  printConfig(): void {
    super.printConfig();
    console.log(`JS::strategy: ${this.strategy}`);
    console.log(`JS::lruList.size: ${this.lruList.size}`);
  }
}
