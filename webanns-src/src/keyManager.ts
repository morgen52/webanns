import { DEBUG } from "./macro";
import { IndexedDBManager } from "./indexeddb";

export class KeyManager {
  // name: string;
  // keys: Map<number, string>;
  constructor() {
    // this.name = _name;
    // this.keys = new Map();
  }

  async bulkGet(
    iids: number[],
    dbInstance: IndexedDBManager,
  ): Promise<string[]> {
    const dbResults = await dbInstance.bulkGetKeys(iids);
    const keys: string[] = new Array(iids.length);
    for (let i = 0; i < dbResults.length; i++) {
      keys[i] = dbResults[i].key;
    }
    return keys;
  }

  async set(iid: number, key: string, dbInstance: IndexedDBManager) {
    // this.keys.set(iid, key);
    await dbInstance.setKey(iid, key);
  }
}
