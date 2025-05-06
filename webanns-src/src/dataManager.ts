// import { StringCache } from './jscache';
import { KeyManager } from "./keyManager";
import { ValueManager } from "./valueManager";

export class DataManager {
  keyManager: KeyManager;
  curID: number;
  valueManager: ValueManager;

  constructor() {
    // this.keyManager = new StringCache("KeysCache");
    this.keyManager = new KeyManager();
    this.curID = 0;
    this.valueManager = new ValueManager("FIFO");
  }

  allocateID() {
    return this.curID++;
  }
  print() {
    this.valueManager.print();
  }

  getJsonExps() {
    return this.valueManager.getJsonExps();
  }

  clearMonitor() {
    this.valueManager.clearMonitor();
  }

  setMonitorMode(mode: string) {
    this.valueManager.setMonitorMode(mode);
  }
}
