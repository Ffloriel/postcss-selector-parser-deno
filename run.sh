# Clean old files
rm -rf deno
rm -rf postcss-selector-parser

# Clone the repo
git clone --depth 1 --branch master https://github.com/postcss/postcss-selector-parser.git
cd postcss-selector-parser
npm i && cd ../

# Run the script
deno run --unstable --allow-read=. --allow-write=. to_deno.js

# Autoformat the code
deno fmt deno

# Run the tests
# deno test --unstable --allow-read=. --allow-env=DENO_ENV deno/test