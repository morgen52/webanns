#include "hnsw.hpp"

std::vector<Candidate> HNSW::getQueryResults() {
    return globalQueryResults;
}

void HNSW::clearMonitor() {
    timers.clear();
    nodes.clearMonitor();
}

void HNSW::setMonitorMode(const std::string& mode) {
    timers.setMode(mode);
    nodes.setMonitorMode(mode);
}

std::string HNSW::getJsonStrExps() {
    nlohmann::json jsonIndex;
    jsonIndex["m"] = m;
    jsonIndex["efConstruction"] = efConstruction;
    jsonIndex["mMax0"] = mMax;
    jsonIndex["ml"] = ml;
    jsonIndex["seed"] = seed;
    jsonIndex["distanceFunctionType"] = distanceFunction.nameFunction;
    jsonIndex["entryPointKey"] = epId;
    jsonIndex["len(nodes)"] = nodes.size();
    jsonIndex["len(graphLayers)"] = graphLayers.size();
    jsonIndex["timer"] = timers.toJson();
    jsonIndex["nodes"] = nodes.toJson();

    return jsonIndex.dump();
}

void HNSW::print() const {
    std::cout << "lazyLoading: " << lazyLoading << std::endl;
    std::cout << "m: " << m << std::endl;
    std::cout << "efConstruction: " << efConstruction << std::endl;
    std::cout << "mMax: " << mMax << std::endl;
    std::cout << "ml: " << ml << std::endl;
    std::cout << "seed: " << seed << std::endl;
    std::cout << "epId: " << epId << std::endl;
    std::cout << "length of nodes: " << nodes.size() << std::endl;
    std::cout << "length of graphLayers: " << graphLayers.size() << std::endl;
    // for (int i = 0; i < graphLayers.size(); i++) {
    //     std::cout << "layer " << i << ": " << graphLayers[i].graph.size() << std::endl;
    //     for (const auto& [key, value] : graphLayers[i].graph) {
    //         std::cout << key << ": ";
    //         for (const auto& neighbor : value) {
    //             std::cout << neighbor.iid << " (" << neighbor.distance << ") ";
    //         }
    //         std::cout << std::endl;
    //     }
    // }

    timers.print();

    // print nodes config
    // nodes.printConfig();
}

float HNSW::calDistance(const std::vector<float>& a, const std::vector<float>& b) {
    float distance = distanceFunction.calculate(a, b);
    return distance;
}

std::string HNSW::exportJsonlIndex() {
    nlohmann::json jsonIndex;
    jsonIndex["distanceFunctionType"] = distanceFunction.nameFunction;
    jsonIndex["entryPointKey"] = epId;
    jsonIndex["efConstruction"] = efConstruction;
    jsonIndex["m"] = m;
    jsonIndex["mMax0"] = mMax;
    jsonIndex["ml"] = ml;
    jsonIndex["seed"] = seed;
    // jsonIndex["useDistanceCache"] = false;
    // jsonIndex["useIndexedDB"] = true;

    std::string jsonlIndex = jsonIndex.dump() + "\n";

    for (int i = 0; i < graphLayers.size(); i++) {
        jsonlIndex += "{\"graphlayer\": " + std::to_string(i) + "}\n";

        for (const auto& [key, value] : graphLayers[i].graph) {
            // {"key":"0"}
            jsonlIndex += "{\"key\":" + std::to_string(key) + "}\n";
            for (const auto& neighbor : value) {
                // {"nkey":"1","distance":0.5}
                jsonlIndex += "{\"nkey\":" + std::to_string(neighbor.iid) 
                    + ",\"distance\":" + std::to_string(neighbor.distance) + "}\n";
            }
        }
    }
    return jsonlIndex;
}

void HNSW::loadJsonlIndex(const std::string& jsonlIndex) {
    nlohmann::json indexLine = nlohmann::json::parse(jsonlIndex);

    if (indexLine.contains("graphlayer")) { // start a new graph layer
        GraphLayer newGraphLayer;
        graphLayers.push_back(newGraphLayer);
    }
    else if (indexLine.contains("key")) {
        int qId = indexLine["key"].get<int>();
        graphLayers.back().addQId(qId);
    }
    else if (indexLine.contains("nkey")) {
        int nId = indexLine["nkey"].get<int>();
        float distance = indexLine["distance"].get<float>();
        graphLayers.back().addNeighbor(Candidate(nId, distance));
    }
    else { // meta data
        m = indexLine["m"].get<int>();
        efConstruction = indexLine["efConstruction"].get<int>();
        mMax = indexLine["mMax0"].get<int>();
        ml = indexLine["ml"].get<float>();
        seed = indexLine["seed"].get<float>();
        rng.seed(static_cast<unsigned int>(seed));
        uniformDist = std::uniform_real_distribution<float>(0.0, 1.0);
        distanceFunction.nameFunction = indexLine["distanceFunctionType"].get<std::string>();
        epId = indexLine["entryPointKey"].get<int>();
    }
}

void HNSW::loadIndex(const std::string& jsonString) {

    nlohmann::json jsonIndex = nlohmann::json::parse(jsonString);

    m = jsonIndex["m"].get<int>();
    efConstruction = jsonIndex["efConstruction"].get<int>();
    mMax = jsonIndex["mMax0"].get<int>();

    ml = jsonIndex["ml"].get<float>();
    seed = jsonIndex["seed"].get<float>();
    rng.seed(static_cast<unsigned int>(seed));
    uniformDist = std::uniform_real_distribution<float>(0.0, 1.0);

    distanceFunction.nameFunction = jsonIndex["distanceFunctionType"].get<std::string>();

    epId = jsonIndex["entryPointKey"].get<int>();
    
    // load graphLayers
    for (const auto& jsonGraphLayer : jsonIndex["graphLayers"]) {
        GraphLayer newGraphLayer;
        for (const auto& [key, value] : jsonGraphLayer.items()) {
            std::vector<Candidate> neighbors;
            int qId = std::stoi(key);
            for (const auto& [neighborId, distance] : value.items()) {
                int nId = std::stoi(neighborId);
                neighbors.push_back(Candidate(nId, distance));
            }
            newGraphLayer.graph[qId] = neighbors;
        }
        graphLayers.push_back(newGraphLayer);
    }
}

void HNSW::insertSkipIndex(const int qId, const std::vector<float>& value, int layer) {
    if (nodes.has(qId)) {
        std::cout << "There is already a node with id " << qId << " in the index." << std::endl;
        return;
        // throw std::runtime_error("There is already a node with id " + std::to_string(qId) + " in the index.");
    }
    nodes.set(qId, value);
}

int HNSW::insert(const int qId, const std::vector<float>& value, int maxLayer) {

    int layer = maxLayer == -1 ? getRandomLayer() : maxLayer;

    if (nodes.has(qId)) {
        throw std::runtime_error("There is already a node with id " + std::to_string(qId) + " in the index.");
    }

    nodes.set(qId, value);

    if (TIMER){
        timers.start("insert_to_graph");
    }

    if (epId != -1) {
        // if the epId is in indexedDB
        std::vector<float> epValue = nodes.get(epId);
        if (epValue.size() == 0) {
            return -1; // epId is not in indexedDB
        }
        Candidate ep = Candidate(epId, calDistance(value, epValue));

        // (1) Search layers above
        for (int l = graphLayers.size() - 1; l >= layer + 1; --l) {
            ep = searchLayerGreedy(qId, value, ep, l);
        }

        // (2) Insert the node from its random layer to layer 0
        std::vector<Candidate> eps = { ep };
        std::vector<Candidate> selectedNeighbors;
        for (int l = std::min((int)graphLayers.size() - 1, layer); l >= 0; --l) {
            int layerM = l == 0 ? mMax : m; // Layer 0 could have a different neighbor size constraint

            eps = searchLayer(qId, value, eps, l, efConstruction);
            selectedNeighbors = selectNeighborsHeuristic(eps, layerM);

            // Update the neighbors of the new node
            graphLayers[l].graph[qId] = selectedNeighbors;

            // Update the neighbors of the selected neighbors
            for (const auto& neighbor : selectedNeighbors) {
                std::vector<Candidate> & neighborNode = graphLayers[l].graph.at(neighbor.iid); // Maybe empty
                neighborNode.push_back(Candidate(qId, neighbor.distance));

                if (neighborNode.size() > mMax) { // May cause non-bidirectional links
                    std::vector<Candidate> snh = selectNeighborsHeuristic(
                        neighborNode, mMax
                    );
                    graphLayers[l].graph[neighbor.iid] = snh;
                }
            }
        }
    }

    // (3) Extend the layers if necessary
    for (int l = graphLayers.size(); l <= layer; ++l) {
        graphLayers.push_back(GraphLayer(qId));
        epId = qId;
    }

    if (TIMER){
        timers.end("insert_to_graph");
    } 

    return layer;
}


void HNSW::query( const std::vector<float>& value, int k, int efc ) {
    if (TIMER){
        timers.start("query");
    }

    if (efc == -1) {
        efc = efConstruction;
    }
    
    if (epId == -1) {
        throw std::runtime_error("Index is not initialized yet");
    }

    std::vector<float> epValue = nodes.get(epId);
    Candidate ep = Candidate(epId, calDistance(value, epValue));

    for (int l = graphLayers.size() - 1; l >= 1; l--) {
        ep = searchLayerGreedy(-1, value, ep, l);
    }

    std::vector<Candidate> candidates = { ep };
    if (lazyLoading) {
        candidates = searchLayerLazyLoading(-1, value, candidates, 0, efc);
    }
    else {
        candidates = searchLayer(-1, value, candidates, 0, efc);
    }

    std::sort(candidates.begin(), candidates.end());

    if (k != -1) {
        candidates.resize(std::min(k, (int)candidates.size()));
    }

    if (TIMER){
        timers.end("query");
    }

    globalQueryResults = candidates;
}

std::vector<Candidate> HNSW::searchLayerLazyLoading(const int qId, const std::vector<float>& qValue, 
const std::vector<Candidate>& entryPoints, int layer, int ef) {

    if (TIMER){
        timers.start("search_layer");
    }
    
    auto& graphLayer = graphLayers[layer].graph;

    std::priority_queue<Candidate, std::vector<Candidate>, std::greater<Candidate>> candidateMinHeap;
    std::priority_queue<Candidate> foundNodesMaxHeap;
    std::unordered_set<int> visitedNodes;

    for (const auto& searchNode : entryPoints) {
        candidateMinHeap.push(searchNode);
        foundNodesMaxHeap.push(searchNode);
        visitedNodes.insert(searchNode.iid);
    }

    // for lazy loading
    std::queue<int> lazyIdQueue; // UniqueQueue<int> 

    Candidate nearestCandidate, furthestFoundNode;

    while (true) {
        while (!candidateMinHeap.empty()) {
            nearestCandidate = candidateMinHeap.top();
            candidateMinHeap.pop();
            furthestFoundNode = foundNodesMaxHeap.top();

            if (nearestCandidate.distance > furthestFoundNode.distance) { // may < ef
                break;
            }

            const auto& curNodeDis = graphLayer.at(nearestCandidate.iid); // sorted vector<Candidate>

            for (const auto& neighbor : curNodeDis) {
                int neighborId = neighbor.iid;

                if (visitedNodes.find(neighborId) == visitedNodes.end()) {
                    visitedNodes.insert(neighborId);
                    std::vector<float> neighborValue = nodes.get(neighborId, true); // lazy loading = true
                    if (neighborValue.size() == 0) { // lazy loading may return empty vector
                        lazyIdQueue.push(neighborId);
                        continue;
                    }
                    float distance = calDistance(qValue, neighborValue);

                    if (foundNodesMaxHeap.size() < ef || distance < foundNodesMaxHeap.top().distance) {
                        foundNodesMaxHeap.push(Candidate(neighborId, distance));
                        candidateMinHeap.push(Candidate(neighborId, distance));

                        if (foundNodesMaxHeap.size() > ef) {
                            foundNodesMaxHeap.pop();
                        }
                    }
                }
            }

            if (lazyIdQueue.size() > ef) { 
                // if the number of lazy loading nodes is too large, stop the loop
                break;
            }
        }

        if (lazyIdQueue.size() > 0) {
            std::vector<int> lazyIds = {};
            while (!lazyIdQueue.empty()) {
                int lazyId = lazyIdQueue.front();
                lazyIdQueue.pop();
                lazyIds.push_back(lazyId);
            }
            std::unordered_map<int, std::vector<float>> lazyResults = nodes.bulkGetFromDB(lazyIds);

            for (const auto& [lazyId, lazyValue] : lazyResults) {
                float distance = calDistance(qValue, lazyValue);
                if (foundNodesMaxHeap.size() < ef || distance < foundNodesMaxHeap.top().distance) {
                    foundNodesMaxHeap.push(Candidate(lazyId, distance));
                    candidateMinHeap.push(Candidate(lazyId, distance));

                    if (foundNodesMaxHeap.size() > ef) {
                        foundNodesMaxHeap.pop();
                    }
                }
            }

            if (DEBUG) {
                std::cout << "Lazy loading: lazyIdQueue.size()" << lazyIdQueue.size() << std::endl;
            }
        }
        else { // Only when candidateMinHeap is empty and lazyIdQueue is empty, stop the loop.
            // std::cout << "No lazy loading" << std::endl;
            break;
        }
    }

    std::vector<Candidate> result; // sorted by distance, from furthest to nearest
    while (!foundNodesMaxHeap.empty()) {
        result.push_back(foundNodesMaxHeap.top());
        foundNodesMaxHeap.pop();
    }

    if (TIMER){
        timers.end("search_layer");
    }

    return result;
}

void HNSW::clear() {
    nodes.clear();
    graphLayers.clear();
    epId = -1;
    clearMonitor();
}

Candidate HNSW::searchLayerGreedy( const int qId, const std::vector<float>& qValue, 
    Candidate minCandidate, int layer
) {

    if (TIMER){
        timers.start("search_layer_greedy");
    }

    auto& graphLayer = graphLayers[layer].graph;
    
    std::unordered_set<int> visitedNodes;
    std::priority_queue<Candidate, std::vector<Candidate>, std::greater<Candidate>> candidateHeap;
    candidateHeap.push(minCandidate);

    Candidate curCandidate;

    while (!candidateHeap.empty()) {
        curCandidate = candidateHeap.top();
        candidateHeap.pop();

        if (curCandidate.distance > minCandidate.distance) {
            break;
        }

        auto curNodeDis = graphLayer.at(curCandidate.iid); // sorted vector<Candidate>

        for (const auto& neighbor : curNodeDis) {
            const int nId = neighbor.iid;

            if (visitedNodes.find(nId) == visitedNodes.end()) {
                visitedNodes.insert(nId);
                std::vector<float> nValue = nodes.get(nId);
                if (nValue.size() == 0) {
                    return Candidate();
                }
                float distance = calDistance(qValue, nValue);
                if (distance < minCandidate.distance) {
                    minCandidate.iid = nId;
                    minCandidate.distance = distance;
                    candidateHeap.push(minCandidate);
                }
            }
        }
    }

    if (TIMER){
        timers.end("search_layer_greedy");
    }

    return minCandidate;
}

std::vector<Candidate> HNSW::searchLayer(const int qId, const std::vector<float>& qValue, 
const std::vector<Candidate>& entryPoints, int layer, int ef) {

    if (TIMER){
        timers.start("search_layer");
    }
    
    auto& graphLayer = graphLayers[layer].graph;

    std::priority_queue<Candidate, std::vector<Candidate>, std::greater<Candidate>> candidateMinHeap;
    std::priority_queue<Candidate> foundNodesMaxHeap;

    std::unordered_set<int> visitedNodes;

    for (const auto& searchNode : entryPoints) {
        candidateMinHeap.push(searchNode);
        foundNodesMaxHeap.push(searchNode);
        visitedNodes.insert(searchNode.iid);
    }

    Candidate nearestCandidate, furthestFoundNode;
    while (!candidateMinHeap.empty()) {
        nearestCandidate = candidateMinHeap.top();
        candidateMinHeap.pop();
        furthestFoundNode = foundNodesMaxHeap.top();

        if (nearestCandidate.distance > furthestFoundNode.distance) { // may < ef
            break;
        }

        const auto& curNodeDis = graphLayer.at(nearestCandidate.iid); // sorted vector<Candidate>

        for (const auto& neighbor : curNodeDis) {
            int neighborId = neighbor.iid;

            if (visitedNodes.find(neighborId) == visitedNodes.end()) {
                visitedNodes.insert(neighborId);
                std::vector<float> neighborValue = nodes.get(neighborId);
                if (neighborValue.size() == 0) {
                    return std::vector<Candidate>();
                }
                float distance = calDistance(qValue, neighborValue);

                if (foundNodesMaxHeap.size() < ef || distance < foundNodesMaxHeap.top().distance) {
                    foundNodesMaxHeap.push(Candidate(neighborId, distance));
                    candidateMinHeap.push(Candidate(neighborId, distance));

                    if (foundNodesMaxHeap.size() > ef) {
                        foundNodesMaxHeap.pop();
                    }
                }
            }
        }
    }

    std::vector<Candidate> result; // sorted by distance, from furthest to nearest
    while (!foundNodesMaxHeap.empty()) {
        result.push_back(foundNodesMaxHeap.top());
        foundNodesMaxHeap.pop();
    }

    if (TIMER){
        timers.end("search_layer");
    }

    return result;
}

std::vector<Candidate> HNSW::selectNeighborsHeuristic(
    const std::vector<Candidate>& candidates, 
    int maxSize
) {

    if(TIMER){
        timers.start("select_neighbors_heuristic");
    }

    if (candidates.size() < maxSize) {
        return candidates; // unsorted
    }

    std::priority_queue<Candidate, std::vector<Candidate>, std::greater<Candidate>> candidateMinHeap;
    for (const auto& candidate : candidates) {
        candidateMinHeap.push(candidate);
    }

    std::vector<Candidate> selectedNeighbors;

    Candidate candidate;
    while (!candidateMinHeap.empty()) {
        if (selectedNeighbors.size() >= maxSize) {
            return selectedNeighbors; // sorted by distance
        }

        candidate = candidateMinHeap.top();
        candidateMinHeap.pop();

        bool isCandidateFarFromExistingNeighbors = true;

        for (const auto& selectedNeighbor : selectedNeighbors) {

            std::vector<float> candidateValue = nodes.get(candidate.iid);
            std::vector<float> selectedNeighborValue = nodes.get(selectedNeighbor.iid);
            if (candidateValue.size() == 0 || selectedNeighborValue.size() == 0) {
                return std::vector<Candidate>();
            }
            float distanceCandidateToNeighbor = calDistance(
                candidateValue, selectedNeighborValue
            );

            if (distanceCandidateToNeighbor < candidate.distance) {
                isCandidateFarFromExistingNeighbors = false;
                break;
            }
        }

        if (isCandidateFarFromExistingNeighbors) {
            selectedNeighbors.push_back(candidate);
        }
    }

    if(TIMER){
        timers.end("select_neighbors_heuristic");
    }

    return selectedNeighbors; // sorted by distance
}