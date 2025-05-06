#include "hnsw.hpp"
#include <emscripten/bind.h>

void gottenIndexedDB() {
    std::cout << "gottenIndexedDB" << std::endl;
}

class HNSW_BIND : public HNSW {
public:
    using HNSW::HNSW; // succeed the constructor of the base class
    emscripten::val resolveFinalFunc; // finish all the operations
    
    void setFinalPromise(emscripten::val resolve) {
        resolveFinalFunc = resolve;
    }

    void loadIndex(const emscripten::val& jsonString) {
        std::string jsonStr = jsonString.as<std::string>();
        HNSW::loadIndex(jsonStr);
    }

    void loadJsonlIndex(const emscripten::val& jsonString) {
        std::string jsonStr = jsonString.as<std::string>();
        HNSW::loadJsonlIndex(jsonStr);
    }

    emscripten::val exportJsonlIndex(){
        return emscripten::val(HNSW::exportJsonlIndex());
    }

    void insertSkipIndex(int qId, emscripten::val point, int layer=-1){
        std::vector<float> vec = emscripten::convertJSArrayToNumberVector<float>(point);
        HNSW::insertSkipIndex(qId, vec, layer);
    }

    void insert(int curID, emscripten::val point, int layer=-1) {
        if(TIMER){
            HNSW::timers.start("insert_bind");
        }
        std::vector<float> vec = emscripten::convertJSArrayToNumberVector<float>(point);
        if(TIMER){
            HNSW::timers.end("insert_bind");
        }
        HNSW::insert(curID, vec, layer);

        resolveFinalFunc(curID);
    }

    void query(emscripten::val query, int k, int ef=-1) {

        // if (TIMER){
        //     HNSW::timers.start("query_bind");
        // }

        // std::vector<float> vec = emscripten::convertJSArrayToNumberVector<float>(query);
        std::vector<float> vec = query.as<std::vector<float>>();

        // if (TIMER){
        //     HNSW::timers.end("query_bind");
        // }

        HNSW::query(vec, k, ef);

        resolveFinalFunc(0);
    }

    void setParams(int _m, int _efConstruction, bool _lazyLoading) {
        HNSW::setParams(_m, _efConstruction, _lazyLoading);
    }

    void print() {
        HNSW::print();
    }

    std::string getJsonStrExps() {
        return HNSW::getJsonStrExps();
    }

    void clearMonitor() {
        HNSW::clearMonitor();
    }

    void setMonitorMode(std::string mode) {
        HNSW::setMonitorMode(mode);
    }

    std::vector<Candidate> getQueryResults() {
        return HNSW::getQueryResults();
    }

    std::string getCacheCounter() {
        return HNSW::nodes.getCacheCounter();
    }

    void get_node(int index) {
        std::vector<float> node = HNSW::nodes.get(index);
        resolveFinalFunc(node);
    }

    int get_len() {
        return HNSW::nodes.size();
    }

    void clear() {
        HNSW::clear();
    }

    void setWasmMemory(int maxWasmMemory) {
        HNSW::nodes.setWasmMemorySize(maxWasmMemory);
    }

    void setCacheStrategy(std::string cacheStrategy) {
        HNSW::nodes.setCacheStrategy(cacheStrategy);
    }

    int getCacheSize() {
        return HNSW::getCacheSize();
    }

    int getItemsThreshold() {
        return HNSW::getItemsThreshold();
    }

    void setItemsThreshold(int _itemsThreshold) {
        HNSW::setItemsThreshold(_itemsThreshold);
    }
};

EMSCRIPTEN_BINDINGS(hnsw_module) {

    emscripten::register_vector<float>("VectorFloat");
    emscripten::register_vector<Candidate>("VectorCandidate");
    emscripten::register_vector<int>("VectorInt");

    // emscripten::function("gottenIndexedDB", &gottenIndexedDB);

    emscripten::value_object<Candidate>("Candidate")
        .field("iid", &Candidate::iid)
        .field("distance", &Candidate::distance);

    emscripten::class_<HNSW_BIND>("HNSW")
        .constructor<int, int, int, float, float, int>()
        .constructor<>()
        .function("setWasmMemory", &HNSW_BIND::setWasmMemory)
        .function("loadIndex", &HNSW_BIND::loadIndex)
        .function("loadJsonlIndex", &HNSW_BIND::loadJsonlIndex)
        .function("exportJsonlIndex", &HNSW_BIND::exportJsonlIndex)
        .function("insertSkipIndex", &HNSW_BIND::insertSkipIndex)
        .function("setParams", &HNSW_BIND::setParams)
        .function("print", &HNSW_BIND::print)
        .function("getJsonStrExps", &HNSW_BIND::getJsonStrExps)
        .function("clearMonitor", &HNSW_BIND::clearMonitor)
        .function("setMonitorMode", &HNSW_BIND::setMonitorMode)
        .function("clear", &HNSW_BIND::clear)
        .function("get_node", &HNSW_BIND::get_node)
        .function("get_len", &HNSW_BIND::get_len)
        .function("insert", &HNSW_BIND::insert)
        .function("query", &HNSW_BIND::query)
        .function("setFinalPromise", &HNSW_BIND::setFinalPromise)
        .function("getQueryResults", &HNSW_BIND::getQueryResults)
        .function("setCacheStrategy", &HNSW_BIND::setCacheStrategy)
        .function("getCacheCounter", &HNSW_BIND::getCacheCounter)
        .function("setItemsThreshold", &HNSW_BIND::setItemsThreshold)
        .function("getItemsThreshold", &HNSW_BIND::getItemsThreshold)
        .function("getCacheSize", &HNSW_BIND::getCacheSize);
}
