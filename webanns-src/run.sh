# ./compile.sh

# remove all the .wasm files in ./dist
rm -f ./dist/*.wasm
npx webpack build
# npm run build
npm run serve
