#include "hnsw.hpp"

float DistanceFunctions::calculate(const std::vector<float>& a, const std::vector<float>& b){
    if (a.size() != b.size()) {
        throw std::invalid_argument("Vectors must be of the same length");
    }
    if (nameFunction == "euclidean") {
        return round(euclidean(a, b), distancePrecision);
    } else if (nameFunction == "cosine") {
        return round(cosine(a, b), distancePrecision);
    } else if (nameFunction == "cosine-normalized") {
        return round(cosineNormalized(a, b), distancePrecision);
    } else {
        throw std::invalid_argument("Unknown distance function");
    }
}

float DistanceFunctions::round(float num, int decimal) const {
    return std::round((num+1e-16) * std::pow(10, decimal)) / std::pow(10, decimal);
}

// Euclidean distance function
float DistanceFunctions::euclidean(const std::vector<float>& a, const std::vector<float>& b) {
    return std::sqrt(std::inner_product(a.begin(), a.end(), b.begin(), 0.0, std::plus<>(), [](float aa, float bb) {
        return (aa - bb) * (aa - bb);
    }));
}

// Cosine distance function
float DistanceFunctions::cosine(const std::vector<float>& a, const std::vector<float>& b) {
    float dotProduct = std::inner_product(a.begin(), a.end(), b.begin(), 0.0);
    float magnitudeA = std::sqrt(std::accumulate(a.begin(), a.end(), 0.0, [](float sum, float val) {
        return sum + val * val;
    }));
    float magnitudeB = std::sqrt(std::accumulate(b.begin(), b.end(), 0.0, [](float sum, float val) {
        return sum + val * val;
    }));
    return 1.0 - (dotProduct / (magnitudeA * magnitudeB));
}

// Cosine-normalized distance function
float DistanceFunctions::cosineNormalized(const std::vector<float>& a, const std::vector<float>& b) {
    float dotProduct = std::inner_product(a.begin(), a.end(), b.begin(), 0.0);
    return 1.0 - dotProduct;
}


