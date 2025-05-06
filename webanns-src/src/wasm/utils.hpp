# pragma once

#include "macro.hpp"
#include <string>
#include <unordered_map>
#include <queue>
#include <unordered_set>

#define TIMER true
#define CACHECOUNTER true

class Timer {
public:
    std::chrono::time_point<std::chrono::high_resolution_clock> startTime;
    std::vector<double> timeList;
    bool running;

    Timer() {
        running = false;
    }
    ~Timer() {}

    void start() {
        // assert(running == false);
        startTime = std::chrono::high_resolution_clock::now();
        running = true;
    }

    void end(){
        assert(running == true);
        std::chrono::duration<double, std::milli> diff = std::chrono::high_resolution_clock::now() - startTime;
        timeList.push_back(diff.count());
        running = false;
    }

    double getSum() const {
        return std::accumulate(timeList.begin(), timeList.end(), 0.0); // 单位是秒
    }

    double getAvg() const {
        return getSum() / timeList.size();
    }

    int getLen() const {
        return timeList.size();
    }

    nlohmann::json toJson() const {
        nlohmann::json jsonTimeList;
        for (const auto& time : timeList) {
            jsonTimeList.push_back(time);
        }
        return jsonTimeList;
    }
};

class Timers {
public:
    std::unordered_map<std::string, Timer> timers;
    std::string mode;

    Timers() {
        timers.clear();
        mode = "default";
    }

    void setMode(const std::string& _mode) {
        if (!_mode.empty()) {
            mode = _mode;
        }
        else {
            mode = "default";
        }
    }

    void start(const std::string& timerName) {
        std::string fullName = mode + "::" + timerName;

        auto it = timers.find(fullName);
        if (it == timers.end()) {
            timers[fullName] = Timer();
        }
        timers[fullName].start();
    }

    void end(const std::string& timerName) {
        std::string fullName = mode + "::" + timerName;
        
        timers[fullName].end();
    }

    void clear() {
        timers.clear();
    }

    void print() const {
        // for (const auto& [timerName, timer] : timers) {
        //     std::cout << "Wasm::" << timerName << ": " << timer.getSum() << "ms / " << timer.getLen() << "times = " << timer.getAvg() << "ms" << std::endl;
        // }

        std::vector<std::string> keys;
        for (const auto& [key, _] : timers) {
            keys.push_back(key);
        }
        std::sort(keys.begin(), keys.end());

        for (const auto& key : keys) {
            const auto& timer = timers.at(key);
            // if key ends with ::query
            if (key.find("::query") != std::string::npos) {
                std::cout << "Wasm::" << key << ": " << timer.getSum() << "ms / "
                          << timer.getLen() << " times = " << timer.getAvg() << "ms" << std::endl;
            }
        }
    }

    nlohmann::json toJson() const {
        nlohmann::json jsonTimers;
        for (const auto& [timerName, timer] : timers) {
            jsonTimers[timerName] = timer.toJson();
        }
        return jsonTimers;
    }
};

class CacheCounter {
public:
    std::unordered_map<int, int> hitCounter;
    std::unordered_map<int, int> missCounter;
    CacheCounter() {
        hitCounter.clear();
        missCounter.clear();
    }

    void hit(int iid) {
        if (hitCounter.find(iid) == hitCounter.end()) {
            hitCounter[iid] = 1;
        } else {
            ++hitCounter[iid];
        }
    }

    void miss(int iid) {
        if (missCounter.find(iid) == missCounter.end()) {
            missCounter[iid] = 1;
        } else {
            ++missCounter[iid];
        }
    }

    int getSum(const std::unordered_map<int, int>& counter) const {
        return std::accumulate(counter.begin(), counter.end(), 0, [](int sum, const std::pair<int, int>& p) { return sum + p.second; });
    }

    void print() const {
        std::cout << "Wasm::hitCounter.total: " << getSum(hitCounter) << std::endl;
        std::cout << "Wasm::missCounter.total: " << getSum(missCounter) << std::endl;
    }   

    nlohmann::json toJson() const {
        nlohmann::json jsonCounter;
        jsonCounter["hit"] = getSum(hitCounter);
        jsonCounter["miss"] = getSum(missCounter);
        return jsonCounter;
    }

    std::string getCounterStr() const {
        std::string counterStr = "";
        counterStr += std::to_string(getSum(hitCounter));
        counterStr += ",";
        counterStr += std::to_string(getSum(missCounter));
        return counterStr;
    }

    void clear() {
        hitCounter.clear();
        missCounter.clear();
    }
};

class CacheCounters {
public:
    std::unordered_map<std::string, CacheCounter> cacheCounters;
    std::string mode;

    CacheCounters() {
        cacheCounters.clear();
        mode = "default";
    }

    void setMode(const std::string& _mode) {
        if (!_mode.empty()) {
            mode = _mode;
        }
        else {
            mode = "default";
        }
    }

    void hit(int iid) {
        auto it = cacheCounters.find(mode);
        if (it == cacheCounters.end()) {
            cacheCounters[mode] = CacheCounter();
        }
        cacheCounters[mode].hit(iid);
    }

    void miss(int iid) {
        auto it = cacheCounters.find(mode);
        if (it == cacheCounters.end()) {
            cacheCounters[mode] = CacheCounter();
        }
        cacheCounters[mode].miss(iid);
    }

    void clear() {
        cacheCounters.clear();
    }

    void print() const {
        for (const auto& [counterMode, cacheCounter] : cacheCounters) {
            std::cout << "Wasm::CacheCounters::print: " << counterMode << std::endl;
            cacheCounter.print();
        }
    }

    nlohmann::json toJson() const {
        nlohmann::json jsonCacheCounters;
        for (const auto& [counterMode, cacheCounter] : cacheCounters) {
            jsonCacheCounters[counterMode] = cacheCounter.toJson();
        }
        return jsonCacheCounters;
    }

    std::string getCounterStr() {
        return cacheCounters[mode].getCounterStr();
    }


};

class UniqueQueue {
private:
    std::queue<int> itemQueue;
    std::unordered_set<int> itemSet;

public:
    void push_back(const int item) {
        if (itemSet.find(item) == itemSet.end()) {
            itemQueue.push(item);
            itemSet.insert(item);
        }
    }

    int pop_front() {
        if (itemQueue.empty()) {
            return -1;
        }
        int item = itemQueue.front(); // return the front element via reference
        itemQueue.pop();
        itemSet.erase(item);
        return item;
    }

    bool has(const int item) const {
        return itemSet.find(item) != itemSet.end();
    }
    
    int size() const {
        return itemQueue.size();
    }

    void clear() {
        itemQueue = std::queue<int>();
        itemSet.clear();
    }

    void print() const {
        std::cout << "Wasm::UniqueQueue::print: ";
        std::queue<int> tempQueue = itemQueue;
        while (!tempQueue.empty()) {
            std::cout << tempQueue.front() << " ";
            tempQueue.pop();
        }
        std::cout << std::endl;
    }
};
