export interface MememoIndexJSON {
  distanceFunctionType: string;
  m: number;
  efConstruction: number;
  mMax0: number;
  ml: number;
  seed: number;
  useIndexedDB: boolean;
  useDistanceCache: boolean;
  entryPointKey: string | null;
  graphLayers: Record<string, Record<string, number>>[];
}
