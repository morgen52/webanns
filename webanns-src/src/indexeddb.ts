import Dexie from "dexie";

export class IndexedDBManager {
  kt: Dexie.Table<{ iid: number; key: string }, number>;
  vt: Dexie.Table<{ iid: number; value: Float32Array }, number>;
  indexTree: Dexie.Table<{ iid: number; index: string }, number>;

  constructor() {}

  async initDB(_clear: boolean = true) {
    let wrag_dexie = new Dexie("wrag");
    const dbExists = await Dexie.exists("wrag");

    if (!dbExists) {
      console.log(
        "WebWorker::initDB: IndexedDB does not exist. Need to create it.",
      );
      wrag_dexie.version(1).stores({
        keys: "iid, key",
        values: "iid, value",
        indexTree: "iid, index",
      });
    }

    if (!wrag_dexie.isOpen()) {
      await wrag_dexie.open();
    }
    const tables = wrag_dexie.tables.map((table) => table.name);
    if (
      !tables.includes("keys") ||
      !tables.includes("values") ||
      !tables.includes("indexTree")
    ) {
      console.log(
        "WebWorker::initDB: IndexedDB does not have all tables. Need to create them.",
      );
      wrag_dexie.version(1).stores({
        keys: "iid, key",
        values: "iid, value",
        indexTree: "iid, index",
      });
      // wrag_dexie.close();
    }

    if (!wrag_dexie.isOpen()) {
      await wrag_dexie.open();
    }
    console.log("WebWorker::initDB: IndexedDB is already created.");
    // Reopen the database after updating schema
    // await wrag_dexie.open();
    this.kt = wrag_dexie.table("keys");
    this.vt = wrag_dexie.table("values");
    this.indexTree = wrag_dexie.table("indexTree");

    if (_clear) {
      await this.clear();
    }
  }

  async setIndexTree(index: string) {
    // iid is always 0
    await this.indexTree.put({ iid: 0, index });
  }

  async getIndexTree(): Promise<string> {
    const item = await this.indexTree.get(0);
    return item ? item.index : "";
  }

  async getRandomKey(): Promise<number> {
    try {
      const keys = await this.vt.toCollection().primaryKeys();

      if (keys.length === 0) {
        return -1;
      }

      const randomIndex = Math.floor(Math.random() * keys.length);
      return keys[randomIndex];
    } catch (error) {
      console.error("Error fetching random key:", error);
      return -1;
    }
  }

  async clear() {
    await this.kt.clear();
    await this.vt.clear();
    await this.indexTree.clear();
  }

  async setValue(iid: number, value: Float32Array) {
    await this.vt.put({ iid, value });
  }

  async getValue(iid: number): Promise<Float32Array> {
    const item = await this.vt.get(iid);
    return item ? item.value : new Float32Array(0);
  }

  async bulkGetValues(
    iids: number[],
  ): Promise<{ iid: number; value: Float32Array }[]> {
    const items = await this.vt.bulkGet(iids);
    return items;
  }

  async setKey(iid: number, key: string) {
    await this.kt.put({ iid, key });
  }
  async getKey(iid: number): Promise<string> {
    const item = await this.kt.get(iid);
    return item ? item.key : "";
  }
  async bulkSetKeys(iids: number[], keys: string[]) {
    const items = iids.map((iid, index) => ({ iid, key: keys[index] }));
    await this.kt.bulkPut(items);
  }
  async getAllKeys(): Promise<{ iid: number; key: string }[]> {
    const items = await this.kt.toArray();
    return items;
  }
  async bulkGetKeys(iids: number[]): Promise<{ iid: number; key: string }[]> {
    const items = await this.kt.bulkGet(iids);
    return items;
  }

  async print() {
    console.log("IndexedDBManager:");
  }
}
