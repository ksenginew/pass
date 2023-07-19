import { rollup } from "rollup";
import { createFilter } from "@rollup/pluginutils";
import { parse as parseWasm, init } from "es-module-lexer";
// @ts-ignore
import { parse as parseJs } from "es-module-lexer/js"; // eslint-disable-line import/no-unresolved
import vm from "vm";
import MagicString from "magic-string";

let wasmParserInitialized = false;

// eslint-disable-next-line promise/catch-or-return
init.then(() => {
  wasmParserInitialized = true;
});

const parseEsm = (/** @type {string} */ code) =>
  wasmParserInitialized ? parseWasm(code) : parseJs(code);

// @ts-ignore
export function pass({ include, exclude }) {
  let filter = createFilter(include, exclude);

  return {
    name: "pass",
    /**
     * @param {any} options
     */
    buildStart(options) { },
    /**
     * @param {string} code
     * @param {unknown} id
     */
    async transform(code, id) {
      if (!filter(id)) return null;

      const magicString = new MagicString(code);

      return {
        map: { mappings: "" },
      };
    },
  };
}
