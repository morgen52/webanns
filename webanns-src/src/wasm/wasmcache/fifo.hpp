#pragma once
#include "../wasmcache.hpp"

class FIFOCache : public CacheStrategy {
private:
    std::list<int> fifoList;


public:
    FIFOCache(int _wasmMemorySize = 10 * 1024 * 1024)
        : CacheStrategy(_wasmMemorySize) {
        strategy = "FIFO";
    }

    void deleteSome() override{
        while (wasmCache.size() > itemsThreshold) {
            int iidToEvict = fifoList.front();
            wasmCache.erase(iidToEvict);
            fifoList.pop_front();
        }
    }

    std::vector<float> get(int iid, bool lazy=false) override {
        int hasFlag = has(iid);
        if (hasFlag == 0) { // not in wasmCache
            std::vector<float> value;
            if (lazy) {
                value = loadOnlyFromJS(iid);
                if (value.size() == 0) {
                    // neither hit or miss, just ignore and wait for the lazy loading
                    return value; // if lazy ==true, may return empty vector
                }
                if(CACHECOUNTER){
                    cacheCounter.hit(iid);
                }
            } else {
                value = loadFromJS(iid); // if lazy == false, must return a valid vector
                if(CACHECOUNTER){
                   cacheCounter.miss(iid);
                }
            }
            wasmCache[iid] = value;
            fifoList.push_back(iid);
            deleteSome();
        } else if (hasFlag == 1) { // get from wasmCache
            if(CACHECOUNTER){
                cacheCounter.hit(iid);
            }
        }

        return wasmCache.at(iid);
    }

    void set(int iid, const std::vector<float>& value) override {
        if (embedSize == 0) { // initialization
            embedSize = value.size();
            maxWasmItems = maxWasmMemory / (embedSize * sizeof(float));
            itemsThreshold = std::floor(maxWasmItems);
        }

        int hasFlag = has(iid);
        if (hasFlag == 1) { // update
            wasmCache[iid] = value;
        } else if (hasFlag == 0) { // directly insert
            wasmCache[iid] = value;
            fifoList.push_back(iid);
            deleteSome();
        }
    }

    void clear() override {
        wasmCache.clear();
        fifoList.clear();
    }

    void printConfig() const override {
        CacheStrategy::printConfig();
        std::cout << "Wasm::fifoList.size(): " << fifoList.size() << std::endl;
    }
};
    

