set -e

export WD=$(cd "$(dirname ${BASH_SOURCE[0]})"/.. &>/dev/null && pwd)
export KIT="$WD/.kit"
export PATH="$KIT/node/bin:$PATH"

cd $WD
echo $WD

mkdir -p $KIT
cp -a root/. $KIT
cp -r build $KIT
cp -r src/types $KIT

cp *.md package*.json LICENSE $KIT

./build/install-node.sh v16.14.2 --prefix $KIT/node

node --version
npm --version
npm i
npx tsc --outDir $KIT
npx tsc --project ./tsconfig-declaration.json --outDir $KIT
npx tsc --project ./tsconfig-cjs.json --outDir "$KIT/cjs"
node ./scripts/cjs-fix.js
