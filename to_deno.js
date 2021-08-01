import { convert } from "https://deno.land/x/nodedeno@v0.2.8/mod.js";

// Convert the code
await convert({
  src: "postcss-selector-parser",
  input: ["src"],
  output: "deno",
  transpile: false,
  modules: {
    "": "mod.js",
  },
  copy: {
    // "source_map.ts": "lib/source_map.ts",
    // "deps.js": "lib/deps.js",
    // "test": "test",
    "postcss-selector-parser/README.md": "README.md",
    "postcss-selector-parser/CHANGELOG.md": "CHANGELOG.md",
    "postcss-selector-parser/LICENSE-MIT": "LICENSE",
  },
  beforeConvert(_src, { replaceAll, rename }) {
    // Rename lib/purgecss.esm.js => mod.js
    rename(
      "src/index.js",
      "mod.js",
      (code) => code.replaceAll(`./`, `./src/`),
    );
  },
  afterConvert(_src, { replaceAll }) {
    replaceAll((code) => {
        // code = code.replaceAll('from"fs"', 'from "https://deno.land/std@0.98.0/node/fs.ts"');
        // code = code.replaceAll('from"path"', 'from "https://deno.land/std@0.98.0/node/path.ts"');
        // code = code.replaceAll('from"util"', 'from "https://deno.land/std@0.98.0/node/util.ts"')
        // code = code.replaceAll('from"postcss"', 'from "https://deno.land/x/postcss/mod.js"');
        return code
    }
    );
  },
});