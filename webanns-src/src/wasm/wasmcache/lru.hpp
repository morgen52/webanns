#pragma once
#include "../wasmcache.hpp"

class LRUCache : public CacheStrategy {
private:
    std::list<int> lruList;
    std::unordered_map<int, std::list<int>::iterator> lruMap;

public:
    LRUCache(int _wasmMemorySize = 10 * 1024 * 1024)
        : CacheStrategy(_wasmMemorySize) {
        strategy = "LRU";
    }

    void deleteSome() override {
        while (wasmCache.size() > itemsThreshold) {
            int iidToEvict = lruList.back();
            wasmCache.erase(iidToEvict);
            lruMap.erase(iidToEvict);
            lruList.pop_back();
        }
    }
    
    std::vector<float> get(int iid, bool lazy=false) override {
        int hasFlag = has(iid);
        if (hasFlag == 0) { // not in wasmCache
            std::vector<float> value;
            if (lazy) {
                value = loadOnlyFromJS(iid);
                if (value.size() == 0) {
                    return value;
                }
                if(CACHECOUNTER){
                   cacheCounter.hit(iid);
                }
            } else {
                value = loadFromJS(iid);
                if(CACHECOUNTER){
                   cacheCounter.miss(iid);
                }
            }
            wasmCache[iid] = value;
            lruList.push_front(iid);
            lruMap[iid] = lruList.begin();
            deleteSome();
        } else if (hasFlag == 1) { // get from wasmCache
            if(CACHECOUNTER){
                cacheCounter.hit(iid);
            }
            lruList.splice(lruList.begin(), lruList, lruMap[iid]); // move to the front
        }

        return wasmCache.at(iid);
    }

    void set(int iid, const std::vector<float>& value) override {
        if (embedSize == 0) { // initialization
            embedSize = value.size();
            maxWasmItems = maxWasmMemory / (embedSize * sizeof(float));
            itemsThreshold = std::floor(maxWasmItems * 0.8);
        }

        int hasFlag = has(iid);
        if (hasFlag == 1) { // update
            lruList.splice(lruList.begin(), lruList, lruMap[iid]);
            wasmCache[iid] = value;
        } else if (hasFlag == 0) { // directly insert
            wasmCache[iid] = value;
            lruList.push_front(iid);
            lruMap[iid] = lruList.begin();
            deleteSome();
        }
    }

    void clear() override {
        wasmCache.clear();
        lruList.clear();
        lruMap.clear();
    }

    void printConfig() const override {
        CacheStrategy::printConfig(); 
        std::cout << "Wasm::lruList.size(): " << lruList.size() << std::endl;
    }
};