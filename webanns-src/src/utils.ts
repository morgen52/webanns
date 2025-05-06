// export const TIMER = false;
// export const CACHECOUNTER = false;
export const TIMER = true;
export const CACHECOUNTER = true;

export class FastTimer {
  name: string = "";
  startTime: number = 0;
  sumTime: number = 0;
  count: number = 0;
  runFlag: boolean = false;

  constructor(_name: string = "") {
    this.name = _name;
  }

  start(): void {
    this.startTime = performance.now();
    this.runFlag = true;
  }

  end(): void {
    if (this.runFlag && this.startTime !== 0) {
      this.sumTime += performance.now() - this.startTime;
      this.count += 1;

      this.startTime = 0;
      this.runFlag = false;
    } else {
      throw new Error(`Timer ${this.name} is not running`);
    }
  }

  getAverage(): number {
    return this.sumTime / this.count;
  }

  clear(): void {
    this.startTime = 0;
    this.sumTime = 0;
    this.count = 0;
  }
}

export class Timers {
  timerMaps: Map<string, Timer> = new Map();
  mode: string = "";

  get(name: string): Timer {
    if (this.mode) {
      name = `${this.mode}::${name}`;
    }

    if (!this.timerMaps.has(name)) {
      this.timerMaps.set(name, new Timer(name));
    }
    return this.timerMaps.get(name)!;
  }

  clear(): void {
    this.timerMaps.clear();
  }

  setMode(mode: string): void {
    this.mode = mode;
  }

  print(): void {
    const PRECISION: number = 4;
    console.log("JS::Timers::print");
    for (let [name, timer] of this.timerMaps) {
      console.log(
        `JS::Timer: ${name}: ${timer.getSum().toFixed(PRECISION)} ms / ${timer.getLength()} times = ${timer.getAverage().toFixed(PRECISION)} ms`,
      );
    }
  }

  toJSON(): { [key: string]: number[] } {
    let jsonRes: { [key: string]: number[] } = {};
    for (let [name, timer] of this.timerMaps) {
      jsonRes[name] = timer.toJSON();
    }
    return jsonRes;
  }
}

export class Timer {
  name: string = "";
  startTime: number = 0;
  timeList: number[] = [];
  runFlag: boolean = false;

  constructor(_name: string = "") {
    this.name = _name;
  }

  start(): void {
    this.startTime = performance.now();
    this.runFlag = true;
  }

  end(): void {
    if (this.runFlag && this.startTime !== 0) {
      this.timeList.push(performance.now() - this.startTime);
      this.startTime = 0;
      this.runFlag = false;
    } else {
      throw new Error(`Timer ${this.name} is not running`);
    }
  }

  getSum(): number {
    return this.timeList.reduce((sum, value) => sum + value, 0);
  }

  getAverage(): number {
    return this.getSum() / this.timeList.length;
  }

  getLength(): number {
    return this.timeList.length;
  }

  toJSON(): number[] {
    // return JSON.stringify(this.timeList);
    return this.timeList;
    // return JSON.stringify(this.timeList.map((value) => value.toFixed(6)));
  }
}

export class CacheCounters {
  counterMaps: Map<string, CacheCounter> = new Map();
  mode: string = "";

  get(name: string): CacheCounter {
    if (this.mode) {
      name = `${this.mode}::${name}`;
    }
    if (!this.counterMaps.has(name)) {
      this.counterMaps.set(name, new CacheCounter(name));
    }
    return this.counterMaps.get(name)!;
  }

  clear(): void {
    this.counterMaps.clear();
  }

  setMode(mode: string): void {
    this.mode = mode;
  }

  print(): void {
    console.log("JS::CacheCounters::print");
    for (let [name, counter] of this.counterMaps) {
      console.log(`JS::CacheCounter: ${name}: `);
      counter.print();
    }
  }

  toJSON(): { [key: string]: { hit: number[]; miss: number[] } } {
    let jsonRes: { [key: string]: { hit: number[]; miss: number[] } } = {};
    for (let [name, counter] of this.counterMaps) {
      jsonRes[name] = counter.toJSON();
    }
    return jsonRes;
  }
}

class CacheCounter {
  name: string = "";
  hitCounter: Map<number, number> = new Map();
  missCounter: Map<number, number> = new Map();

  constructor(_name: string = "") {
    this.name = _name;
    this.hitCounter.clear();
    this.missCounter.clear();
  }

  hit(name: number): void {
    if (!this.hitCounter.has(name)) {
      this.hitCounter.set(name, 1);
    } else {
      this.hitCounter.set(name, this.hitCounter.get(name)! + 1);
    }
  }

  miss(name: number): void {
    if (!this.missCounter.has(name)) {
      this.missCounter.set(name, 1);
    } else {
      this.missCounter.set(name, this.missCounter.get(name)! + 1);
    }
  }

  static getSum(counter: Map<number, number>): number {
    return Array.from(counter.values()).reduce((sum, value) => sum + value, 0);
  }

  static getAverage(counter: Map<number, number>): number {
    return this.getSum(counter) / counter.size;
  }

  static getLength(counter: Map<number, number>): number {
    return counter.size;
  }

  getHit(): number {
    return CacheCounter.getSum(this.hitCounter);
  }

  print(): void {
    console.log(
      `Hit: ${CacheCounter.getSum(this.hitCounter)} times / ${CacheCounter.getLength(this.hitCounter)} items = ${CacheCounter.getAverage(this.hitCounter)} times`,
    );
    console.log(
      `Miss: ${CacheCounter.getSum(this.missCounter)} times / ${CacheCounter.getLength(this.missCounter)} items = ${CacheCounter.getAverage(this.missCounter)} times`,
    );
  }

  toJSON(): { hit: number[]; miss: number[] } {
    // return JSON.stringify({
    //     hit: Array.from(this.hitCounter.entries()),
    //     miss: Array.from(this.missCounter.entries())
    // });
    return {
      hit: Array.from(this.hitCounter.values()),
      miss: Array.from(this.missCounter.values()),
    };
  }
}
