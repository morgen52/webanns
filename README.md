# WebANNS
[![Node.js](https://img.shields.io/badge/Node.js-v18.18.0-brightgreen)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-v10.8.3-orange)](https://www.npmjs.com/)
[![Docker](https://img.shields.io/badge/Docker-v27.4.0-blue)](https://www.docker.com/)

**Ultra-fast Approximate Nearest Neighbor Search in Browser**

## Getting Started

### Import WebANNS lib
The WebANNS library includes `webanns_core.js` and `hnsw_main.wasm`, which can be found in the `build/` folder.

To import WebANNS, simply add the following line to your HTML. Please note that the `hnsw_main.wasm` must be in the same folder as `webanns_core.js`:
```html
<script src="webanns_core.js"></script>
```

### Vector Search and Storage in Browsers
Then, you can use WebANNS to import and query vector data:
```typescript
// Init WebANNS, you just need to conduct once.
GWRAG.initWrag();

// Import vector data
GWRAG.importData(uploadFile)

// Query by vector
let queryArray: number[];
let topK: number[];
const results = await GWRAG.fastQuery(queryArray, topK);
```

## Evaluating WebANNS
### Run evaluation webpage
Firstly, you need to install the node modules for the evaluation demo:
```bash
cd webanns-demo
npm install
```

Then, run the evaluation service:
```bash
node local_service.js
```

The service will run on localhost:

http://localhost:8006/eval.html

### Reproduce evaluation results

1. Open the demo in your browser (e.g., `http://localhost:8006/eval.html`).
2. Upload the dataset (e.g., `webanns-demo/eval_data/arxiv_1k.jsonl`) to the `Data Points`.
3. Upload the HNSW graph (e.g., `webanns-demo/eval_data/arxiv_1k_hnsw_graph.jsonl`) to the `HNSW Graph`.
4. Click the `Load With Cache` button and `Query Eval` button to start data loading and querying.

Note: Loading large datasets (e.g., >1GB) may take significant time, but subsequent queries run instantly without reloading.

### Evaluation Datasets

- A dataset example (Arxiv-1k) is provided in `webanns-demo/eval_data/`.
- Full datasets used in this paper is provided in this [link](https://drive.google.com/drive/folders/1OEAiUsFLWoLvso3ZJr1u4PKgtBIIqDKY?usp=sharing).

## Developing WebANNS

### Preparing development environment
Clone or download this repository:

```bash
https://github.com/morgen52/webanns.git
```

Construct docker image by Dockerfile:
```bash
cd webanns/
docker build -t webanns_image .
```

Launch docker environment:
```bash
docker run -it --name webanns -v ./webanns-src:/webanns_exchange -p 8005:8005 webanns_image:latest
```

If this is your first time running `webanns_image`, please copy the node modules folder:
```bash
rm -rf /webanns_exchange/node_modules&&cp -r /webanns_copy/node_modules/ /webanns_exchange
```

### Build WebANNS
**Note that the `webanns-src` folder is mapped to `/webanns_exchange` in Docker.**

If this is your first time running build.sh, please set the execute permission with:

```bash
chmod +x build.sh
```

Then, you can build the source code, which will be output to `webanns-src/build`. The build folder includes a .wasm file and a .js file:

```bash
./build.sh
```

### Settings
Settings are defined in the `webanns-src/src/settings.ts` file. 
For example,
- Change the `cacheOptTest` to `true` to enable the cache optimization.
- Change the `lazyLoading` to `false` to disable the lazy loading algorithm during queries.

## Citation

If you find this work useful, please consider citing our paper.

## Contact us

If you have any questions, please feel free to email us (`lmg@pku.edu.cn`).

## Acknowledgements

We learned the design and code from the following projects: [Mememo](https://github.com/poloclub/mememo).

