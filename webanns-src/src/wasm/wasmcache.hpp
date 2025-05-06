#pragma once

#include <emscripten.h>
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <sstream>
#include <iostream>        
#include <unordered_map>   
#include <vector>
#include <list>
#include <cmath>
#include <optional>
#include <atomic>
#include "utils.hpp"

class CacheStrategy {
public:
    std::unordered_map<int, std::vector<float>> wasmCache;
    int maxWasmMemory;
    int embedSize;
    int maxWasmItems;
    int itemsThreshold;
    std::string strategy;
    
    Timers timers;
    CacheCounters cacheCounter;

    CacheStrategy(int _wasmMemorySize) : maxWasmMemory(_wasmMemorySize) {
        embedSize = 0;
        maxWasmItems = 0;
        itemsThreshold = 0;
        wasmCache.clear();
        strategy = "undefined";
    }
    virtual ~CacheStrategy() = default; 
    virtual std::vector<float> get(int iid, bool lazy=false) = 0;
    virtual void set(int iid, const std::vector<float>& value) = 0; 
    virtual void clear() = 0;
    virtual void deleteSome() = 0;
    virtual void printConfig() const {
        std::cout << "Wasm::CacheStrategy::printConfig: " << std::endl;
        std::cout << "Wasm::strategy: " << strategy << std::endl;
        std::cout << "Wasm::maxWasmMemory: " << maxWasmMemory << std::endl;
        std::cout << "Wasm::embedSize: " << embedSize << std::endl;
        std::cout << "Wasm::maxWasmItems: " << maxWasmItems << std::endl;
        std::cout << "Wasm::itemsThreshold: " << itemsThreshold << std::endl;
        std::cout << "Wasm::wasmCache.size(): " << wasmCache.size() << std::endl;

        // print timers
        timers.print();

        if(CACHECOUNTER){
            cacheCounter.print();
        }
        std::cout << "End of wasm::printConfig" << std::endl;
    }

    nlohmann::json toJson() const {
        nlohmann::json jsonCache;
        jsonCache["strategy"] = strategy;
        jsonCache["maxWasmMemory"] = maxWasmMemory;
        jsonCache["embedSize"] = embedSize;
        jsonCache["maxWasmItems"] = maxWasmItems;
        jsonCache["itemsThreshold"] = itemsThreshold;
        jsonCache["wasmCacheSize"] = wasmCache.size();
        jsonCache["timers"] = timers.toJson();
        if(CACHECOUNTER){
            jsonCache["cacheCounter"] = cacheCounter.toJson();
        }
        return jsonCache;
    }

    int size() const {
        return wasmCache.size();
    }

    int has(int iid) const {
        return wasmCache.find(iid) != wasmCache.end() ? 1 : 0;
    }

    void setWasmMemorySize(int _wasmMemorySize) {
        maxWasmMemory = _wasmMemorySize;
        if(embedSize > 0){
            maxWasmItems = maxWasmMemory / (embedSize * sizeof(float));
            itemsThreshold = std::floor(maxWasmItems);
        }
    }

    void setEmbedSize(int _embedSize) {
        embedSize = _embedSize;
        if(maxWasmMemory > 0){
            maxWasmItems = maxWasmMemory / (embedSize * sizeof(float));
            itemsThreshold = std::floor(maxWasmItems);
        }
    }

    void setItemsThreshold(int _itemsThreshold) {
        itemsThreshold = _itemsThreshold;
        deleteSome();
    }

    int getItemsThreshold() {
        return itemsThreshold;
    }

    int getWasmMemorySize() const {
        return maxWasmMemory;
    }

    std::unordered_map<int, std::vector<float>> bulkGetFromDB(const std::vector<int>& _iids) {
        if(CACHECOUNTER){
            cacheCounter.miss(_iids[0]); // record as one cache miss
        }

        if (DEBUG)
            std::cout << "wasm::wasmcache::bulkGetFromDB (iids size=" << _iids.size() << ")" << std::endl;

        int numIids = _iids.size();
        std::vector<float> memPointer(numIids * embedSize);
        std::vector<int> iidsPointer(numIids);
        std::atomic<int> gottenFlag{0};

        emscripten::val::global("GWRAG")["wragInstance"].call<emscripten::val>("bulkGetFromDB",
            emscripten::val::array(_iids),
            reinterpret_cast<uintptr_t>(iidsPointer.data()),
            reinterpret_cast<uintptr_t>(memPointer.data()),
            embedSize,
            reinterpret_cast<uintptr_t>(&gottenFlag)
        );

        while (gottenFlag == 0) {
            emscripten_sleep(0);
        }
        if (DEBUG)
            std::cout << "wasm::wasmcache::bulkGetFromDB: gottenFlag=" << gottenFlag << std::endl;
    
        if(DEBUG){
            std::cout << "wasm::wasmcache::bulkGetFromDB: iidsPointer.size()=" << iidsPointer.size() << std::endl;
            //print the first 5 iids
            for (int i = 0; i < std::min(5, numIids); i++) {
                std::cout << "wasm::wasmcache::bulkGetFromDB: iidsPointer:" << iidsPointer[i] << std::endl;
            }
        }

        std::unordered_map<int, std::vector<float>> loadResults;
        for (int i = 0; i < numIids; ++i) {
            std::vector<float> value(memPointer.begin() + i * embedSize, memPointer.begin() + (i + 1) * embedSize);
            if(DEBUG){
                std::cout << "wasm::wasmcache::bulkGetFromDB: " << iidsPointer[i] << " ";
                for (int j = 0; j < std::min(5, (int)value.size()); j++) {
                    std::cout << value[j] << " ";
                }
                std::cout << std::endl;
            }
            loadResults[iidsPointer[i]] = value;
        }

        if (DEBUG)
            std::cout << "wasm::wasmcache::bulkGetFromDB: loadResults.size()=" << loadResults.size() << std::endl;

        return loadResults;
    }

protected:
    std::vector<float> loadFromJS(int iid) {
        if (DEBUG)
            std::cout << "wasm::loadFromJS (iid=" << iid << ") (size=" << embedSize << ")" << std::endl;

        float* memPointer = new float[embedSize];
        int gottenFlag = 0;
        
        emscripten::val::global("GWRAG")["wragInstance"].call<emscripten::val>("loadJ2W",\
            iid, reinterpret_cast<uintptr_t>(memPointer), embedSize, reinterpret_cast<uintptr_t>(&gottenFlag));
            // .call<void>("then", emscripten::val::module_property("gottenIndexedDB"));
        
        while (gottenFlag == 0) {
            emscripten_sleep(0);
        }

        if (DEBUG)
            std::cout << "wasm::loadFromJS: gottenFlag=" << gottenFlag << std::endl;
        assert(gottenFlag == 1);

        std::vector<float> value(memPointer, memPointer + embedSize);
        delete[] memPointer;
    
        if (DEBUG) {
            std::cout << "wasm::loadFromJS: " << iid << " ";
            for (int i = 0; i < std::min(5, (int)value.size()); i++) {
                std::cout << value[i] << " ";
            }
            std::cout << std::endl;
        }

        return value;
    }

    std::vector<float> loadOnlyFromJS(int iid) {

        if (DEBUG)
            std::cout << "wasm::loadOnlyFromJS (iid=" << iid << ") (size=" << embedSize << ")" << std::endl;

        float* memPointer = new float[embedSize];
        
        emscripten::val loadResult = emscripten::val::global("GWRAG")["wragInstance"].call<emscripten::val>("loadJ2W_nodb",\
            iid, reinterpret_cast<uintptr_t>(memPointer), embedSize);
        int gottenFlag = loadResult.as<int>();

        if (DEBUG)
            std::cout << "wasm::loadOnlyFromJS: gottenFlag=" << gottenFlag << std::endl;

        if (gottenFlag == 0) {
            delete[] memPointer;
            return std::vector<float>();
        }

        std::vector<float> value(memPointer, memPointer + embedSize);
        delete[] memPointer;
        
        if (DEBUG) {
            std::cout << "wasm::loadOnlyFromJS: " << iid << " ";
            for (int i = 0; i < std::min(5, (int)value.size()); i++) {
                std::cout << value[i] << " ";
            }
            std::cout << std::endl;
        }

        return value;
    }

    void saveToJS(const std::vector<int>& iids, const std::vector<std::vector<float>>& values) {
        if (DEBUG)
            std::cout << "wasm::saveToJS" << std::endl;

        uintptr_t iidsPointer = reinterpret_cast<uintptr_t>(iids.data());
        size_t iidsLength = iids.size();

        std::vector<float> flattened;
        for (const auto& value : values) {
            flattened.insert(flattened.end(), value.begin(), value.end());
        }
        uintptr_t valuesPointer = reinterpret_cast<uintptr_t>(flattened.data());
        size_t valuesLength = flattened.size();

        emscripten::val saveFunc = emscripten::val::global("GWRAG")["wragInstance"].call<emscripten::val>("saveW2J", \
            iidsPointer, iidsLength, valuesPointer, valuesLength, embedSize);        
    }
};


