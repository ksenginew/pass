import { Plugin, rollup } from "rollup";
import { createFilter, CreateFilter, FilterPattern } from "@rollup/pluginutils";
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

export const parseEsm = (code: string): typeof parseWasm =>
  wasmParserInitialized ? parseWasm(code) : parseJs(code);

type Options = {
  include: FilterPattern;
  exclude: FilterPattern;
};

function pass({ include, exclude }: Options): Plugin {
  let filter = createFilter(include, exclude);

  return {
    name: "pass",
    buildStart(options) {},
    async transform(code, id) {
      if (!filter(id)) return null;

      const magicString = new MagicString(code);

      return {
        map: { mappings: "" as const },
      };
    },
  };
}
