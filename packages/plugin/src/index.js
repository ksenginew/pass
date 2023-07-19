import { createUnplugin } from "unplugin";
import { createFilter } from "@rollup/pluginutils";
import { compileString } from "passlang";

export default createUnplugin(
  /**
   * @param {{
   *   include?: import("@rollup/pluginutils").FilterPattern,
   *   exclude?: import("@rollup/pluginutils").FilterPattern,
   *   emit?: string,
   * }} options
   */
  ({ include = /\.pass\.[mc]?[jt]sx?$/, exclude, emit } = {}) => {
    let filter = createFilter(include, exclude);
    return {
      name: "pass",
      transformInclude(id) {
        return filter(id);
      },
      async transform(src, id) {
        let code = await compileString(src, id);
        if (emit) {
          this.emitFile({
            fileName: emit,
            name: emit,
            source: code,
            type: "asset",
          });
          return "";
        } else return code;
      },
    };
  },
);
