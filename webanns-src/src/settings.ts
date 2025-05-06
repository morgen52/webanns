export const expSettings: {
  impl: string;
  cacheOptTest: boolean;
  tarP: number;
  tarTime: number;
  distanceFunction: "euclidean" | "cosine" | "cosine-normalized";
  cacheStrategy: string;
  lazyLoading: boolean;
  useIndexedDB: boolean;
  prefetchSize: number; // deprecated
  efConstruction: number;
  queryEf: number;
  m: number;
  dataDim: number; // deprecated
  keyDim: number; // deprecated
  wasmMemory: number;
  jsMemory: number;
  repeat: number;
} = {
  impl: "wrag_query_performance", // remark of the experiment
  cacheOptTest: false, // whether to test cache optimization
  tarP: 0.8, // p, for cache optimization
  tarTime: 200, // ms, for cache optimization
  distanceFunction: "euclidean",
  cacheStrategy: "FIFO",
  lazyLoading: true,
  useIndexedDB: true,
  prefetchSize: 490000, // deprecated
  efConstruction: 1000,
  queryEf: 1000,
  m: 16,
  dataDim: 768,
  keyDim: 0, // deprecated
  wasmMemory: 500000 * 4 * 768,
  jsMemory: 0 * 4 * 768,
  repeat: 101,
};
