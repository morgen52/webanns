
#pragma once

#include <iostream>
#include <unordered_map>
#include <vector>
#include <cmath>
#include <stdexcept>
#include <algorithm>
#include <queue>
#include <random>
#include <functional>
#include <numeric>
#include <string>
#include <set>
#include <unordered_set>
#include <optional>
#include <emscripten/val.h>

#include "json.hpp"
#include "utils.hpp"
#include "nodes.hpp"

class DistanceFunctions {
public:
    std::string nameFunction;
    int distancePrecision;

    DistanceFunctions() : nameFunction("cosine-normalized"), distancePrecision(6) {};
    DistanceFunctions(const std::string& name, int distancePrecision) : nameFunction(name), distancePrecision(distancePrecision) {};

    float calculate(const std::vector<float>& a, const std::vector<float>& b);
    float round(float num, int decimal) const;

    //Euclidean distance function
    static float euclidean(const std::vector<float>& a, const std::vector<float>& b);
    // Cosine distance function
    static float cosine(const std::vector<float>& a, const std::vector<float>& b);
    // Cosine-normalized distance function
    static float cosineNormalized(const std::vector<float>& a, const std::vector<float>& b);
};

class Candidate {
public:
    int iid;
    float distance;

    Candidate() : iid(-1), distance(0) {};
    Candidate(int iid, float distance) : iid(iid), distance(distance) {}

    bool operator>(const Candidate& other) const {
        return distance > other.distance;
    }
    bool operator<(const Candidate& other) const {
        return distance < other.distance;
    }
};

class GraphLayer {
public:
    // std::unordered_map<int, std::unordered_map<int, float>> graph;
    std::unordered_map<int, std::vector<Candidate>> graph;
    // for streaming load jsonl
    int curJsonlQId = -1;

    GraphLayer() {};
    GraphLayer(int iid) {
        graph[iid] = std::vector<Candidate>();
    };

    void addQId(int qId) {
        graph[qId] = std::vector<Candidate>();
        curJsonlQId = qId;
    }

    void addNeighbor(const Candidate& neighbor) {
        graph[curJsonlQId].push_back(neighbor);
    }
};

class HNSW {
private:
    float ml;
    float seed;
    int epId;

    DistanceFunctions distanceFunction;
    int distancePrecision;
    std::mt19937 rng;
    std::uniform_real_distribution<float> uniformDist;

    int getRandomLayer() {
        return static_cast<int>(std::floor(-log(uniformDist(rng)) / ml));
    }

    Candidate searchLayerGreedy(
        const int qId, 
        const std::vector<float>& qValue,
        Candidate minCandidate,
        int layer
    );
    std::vector<Candidate> searchLayer(
        const int qId, 
        const std::vector<float>& qValue, 
        const std::vector<Candidate>& entryPoints, 
        int layer, 
        int ef
    );
    std::vector<Candidate> selectNeighborsHeuristic(
        const std::vector<Candidate>& candidates, 
        int maxSize
    );

    std::vector<Candidate> searchLayerLazyLoading(
        const int qId, 
        const std::vector<float>& qValue, 
        const std::vector<Candidate>& entryPoints, 
        int layer, 
        int ef
    );

public:
    int m, efConstruction, mMax;
    Nodes nodes = Nodes("FIFO");
    bool lazyLoading;
    Timers timers;
    std::vector<GraphLayer> graphLayers;
    std::vector<Candidate> globalQueryResults;

    HNSW(int _m = 16, int _efConstruction = 100, int _mMax = 0, float _ml = 0, float _seed = 0, int _distancePrecision = 6)
        : m(_m), efConstruction(_efConstruction), mMax(_mMax), ml(_ml), seed(_seed), distancePrecision(_distancePrecision) {
        
        lazyLoading = true;

        mMax = mMax ? mMax : m * 2;
        ml = ml ? ml : 1 / log(m);
        if (seed == 0) {
            seed = random();
        }
        seed = 0; // for testing
        rng.seed(static_cast<unsigned int>(seed));
        uniformDist = std::uniform_real_distribution<float>(0.0, 1.0);
        // distanceFunction = DistanceFunctions("cosine-normalized", distancePrecision);
        distanceFunction = DistanceFunctions("euclidean", distancePrecision);
        epId = -1;
    }

    void clear();
    void print() const;
    std::string getJsonStrExps();
    void clearMonitor();
    void setMonitorMode(const std::string& mode);
    void setParams(int _m, int _efConstruction, bool _lazyLoading){
        m = _m;
        efConstruction = _efConstruction;
        mMax = _m * 2;
        ml = 1 / log(_m);
        lazyLoading = _lazyLoading;
    };

    void setItemsThreshold(int _itemsThreshold) {
        nodes.setItemsThreshold(_itemsThreshold);
    }

    int getItemsThreshold() {
        return nodes.getItemsThreshold();
    }

    int getCacheSize() {
        return nodes.getCacheSize();
    }

    void loadIndex(const std::string& jsonIndex);
    void loadJsonlIndex(const std::string& jsonlIndex);
    std::string exportJsonlIndex();

    void insertSkipIndex(const int qId, const std::vector<float>& value, int layer=-1);

    float calDistance(const std::vector<float>& a, const std::vector<float>& b);

    int insert(const int qId, const std::vector<float>& value, int maxLayer=-1);
    void query(const std::vector<float>& value, int k=3, int efc=-1);
    std::vector<Candidate> getQueryResults();
};

