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

#include "utils.hpp"
#include "wasmcache.hpp"
#include "wasmcache/lru.hpp"
#include "wasmcache/fifo.hpp"

class Nodes {
private:
    std::unique_ptr<CacheStrategy> cacheStrategy;

public:
    Nodes(std::string _cacheStrategy="FIFO", int _wasmMemorySize=10 * 1024 * 1024) {
        if (_cacheStrategy == "LRU") {
            cacheStrategy = std::make_unique<LRUCache>(_wasmMemorySize);
        }
        else if (_cacheStrategy == "FIFO") {
            cacheStrategy = std::make_unique<FIFOCache>(_wasmMemorySize);
        }
        else {
            throw std::invalid_argument("Invalid cache strategy");
        }
    }

    void setCacheStrategy(std::string _cacheStrategy) {
        if (_cacheStrategy == "LRU") {
            cacheStrategy = std::make_unique<LRUCache>(cacheStrategy->getWasmMemorySize());
        }
        else if (_cacheStrategy == "FIFO") {
            cacheStrategy = std::make_unique<FIFOCache>(cacheStrategy->getWasmMemorySize());
        }
        else {
            throw std::invalid_argument("Invalid cache strategy");
        }
    }

    void setWasmMemorySize(int _wasmMemorySize) {
        cacheStrategy->setWasmMemorySize(_wasmMemorySize);
    }

    void setItemsThreshold(int _itemsThreshold) {
        cacheStrategy->setItemsThreshold(_itemsThreshold);
    }

    int getItemsThreshold() {
        return cacheStrategy->getItemsThreshold();
    }

    int getCacheSize() {
        return cacheStrategy->size();
    }

    std::vector<float> get(int iid, bool lazy=false) {
        return cacheStrategy->get(iid, lazy);
    }

    std::unordered_map<int, std::vector<float>> bulkGetFromDB(const std::vector<int>& iids) {
        return cacheStrategy->bulkGetFromDB(iids);
    }

    void set(int iid, const std::vector<float>& value) {
        cacheStrategy->set(iid, value);
    }

    void clear() {
        cacheStrategy->clear();
    }

    void clearMonitor() {
        cacheStrategy->timers.clear();
        cacheStrategy->cacheCounter.clear();
    }

    void setMonitorMode(const std::string& mode) {
        cacheStrategy->timers.setMode(mode);
        cacheStrategy->cacheCounter.setMode(mode);
    }

    int size() const {
        return cacheStrategy->size();
    }

    int has(int iid) const {
        return cacheStrategy->has(iid);
    }

    void printConfig() const {
        cacheStrategy->printConfig();
    }

    nlohmann::json toJson() const {
        return cacheStrategy->toJson();
    }

    std::string getCacheCounter() const {
        return cacheStrategy->cacheCounter.getCounterStr();
    }
};
