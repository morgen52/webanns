import { WRAG } from "./wrag";
import { expSettings } from "./settings";
export { expSettings };

export let wragInstance: WRAG = new WRAG();

export async function initWrag(): Promise<void> {
  await wragInstance.init();
  await wragInstance.setParams(expSettings); // set the memory before load
  console.log("WRAG init");
}

export async function importDataWithCache(
  file: File,
  indexFile: File,
): Promise<void> {
  await loadJsonlData(file, indexFile); // the efc is reset when loading index json file
}

export async function importData(file: File): Promise<void> {
  const stream = file.stream();
  const reader = stream.getReader();
  let decoder = new TextDecoder();
  let buffer: string | undefined = "";
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    buffer += decoder.decode(value, { stream: !done });

    const lines = buffer.split("\n");
    buffer = lines.pop();

    for (const line of lines) {
      const jsonData = JSON.parse(line.trim());
      await wragInstance.insert(jsonData.key, jsonData.vector, jsonData.layer);
    }
  }
}

export function exportJsonlIndex() {
  return wragInstance.exportJsonlIndex();
}

async function loadJsonlIndex(indexFile: File) {
  console.log("Loading jsonl indexed...");

  const stream = indexFile.stream();
  const reader = stream.getReader();
  let decoder = new TextDecoder();
  let buffer = "";
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    buffer += decoder.decode(value, { stream: !done });

    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (line.trim()) {
        try {
          wragInstance.loadJsonlIndex(line.trim());
        } catch (error) {
          console.error("Error parsing JSON line:", error, line);
        }
      }
    }
  }

  // Process any remaining buffered lines
  if (buffer.trim()) {
    try {
      for (const line of buffer.split("\n")) {
        wragInstance.loadJsonlIndex(line.trim());
      }
    } catch (error) {
      console.error("Error parsing JSON line:", error, buffer);
    }
  }
}

async function loadJsonlData(file: File, indexFile: File) {
  console.log("Loading index...");

  await loadJsonlIndex(indexFile);

  console.log("Loading data...");

  const stream = file.stream();
  const reader = stream.getReader();
  let decoder = new TextDecoder();
  let buffer: string = "";
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;

    let decodedValue;
    try {
      decodedValue = decoder.decode(value, { stream: !done });
    } catch (error) {
      decoder = new TextDecoder();
      decodedValue = decoder.decode(value, { stream: !done });
    }
    buffer += decodedValue;
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (line.trim()) {
        const jsonData = JSON.parse(line.trim());
        await wragInstance.insertSkipIndex(
          jsonData.key,
          jsonData.vector,
          jsonData.layer,
        );
      }
    }
  }

  if (buffer.trim()) {
    try {
      for (const line of buffer.split("\n")) {
        if (line.trim()) {
          const jsonData = JSON.parse(line.trim());
          await wragInstance.insertSkipIndex(
            jsonData.key,
            jsonData.vector,
            jsonData.layer,
          );
        }
      }
    } catch (error) {
      debugger;
      console.error("Error parsing JSONL data:", error, buffer);
    }
  }
}

// Search function
async function performSearch(show_results?: boolean) {
  let queryArray: number[] = [];
  for (let i = 0; i < expSettings.dataDim; i++) {
    queryArray[i] = Math.random();
  }
  // for (let i = 0; i < 384; i++) {
  //     queryArray[i] = Math.random();
  // }
  const k = 10;
  const resultsArray = await wragInstance.query(
    queryArray,
    k,
    expSettings.queryEf,
  );
  if (show_results) {
    console.log("Results: ", resultsArray);
  }
}

export async function evalQuery(_repeat?: number) {
  wragInstance.clearMonitor();
  if (_repeat) {
    expSettings.repeat = _repeat;
  }
  console.log(`Performing ${expSettings.repeat} searches...`);
  for (let i = 0; i < expSettings.repeat; i++) {
    // console.log(`Search ${i+1}/${expSettings.repeat}`);
    wragInstance.setMonitorMode(`QUERY${i}`);
    if (_repeat === 1) {
      await performSearch(true);
    } else {
      await performSearch();
    }
  }
  wragInstance.print();
}

export async function fastQuery(queryArray: number[], topK: number) {
  const resultsArray = await wragInstance.query(
    queryArray,
    topK,
    expSettings.queryEf,
  );
  return resultsArray;
}
