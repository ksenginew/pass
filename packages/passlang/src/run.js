import { lstatSync, readFileSync } from "fs";
import { Module, builtinModules, createRequire } from "module";
import { dirname, extname, join, relative } from "path";
import { platform } from "os";
import vm from "vm";
import { transform as sucrase } from "sucrase";
import { fileURLToPath } from "url";

const isWindows = platform() === "win32";

/**
 * @param {import("module")} [parentModule]
 */
export function createRuntime(file = process.cwd(), parentModule) {
  // If file is dir, createRequire goes with parent directory, so we need fakepath
  if (lstatSync(file).isDirectory()) file = join(file, "index.js");

  const nativeRequire = createRequire(
    isWindows
      ? file.replace(/\//g, "\\") // Import maps does not work with normalized paths!
      : file,
  );

  /**
   * @param {string} id
   * @param { { paths?: string[] }} [options]
   */
  function tryResolve(id, options) {
    try {
      return nativeRequire.resolve(id, options);
    } catch (e) {}
  }

  /**
   * @param {string} id
   * @param { { paths?: string[] }} [options]
   */
  const resolve = (id, options) => {
    let resolved, err;

    // Try native require resolve
    if (!/\.[mc]?[jt]sx?/.test(extname(id)))
      return nativeRequire.resolve(id, options);

    try {
      return nativeRequire.resolve(id, options);
    } catch (_err) {
      err = _err;
    }

    for (const ext of [
      ".js",
      ".mjs",
      ".cjs",
      "jsx",
      "mjsx",
      "cjsx",
      ".ts",
      ".mts",
      ".cts",
      "tsx",
      "mtsx",
      "ctsx",
    ]) {
      resolved =
        tryResolve(id + ext, options) ||
        tryResolve(id + "/index" + ext, options);
      if (resolved) return resolved;
    }

    throw err;
  };
  resolve.paths = nativeRequire.resolve.paths;

  /**
   * @param {string} source
   * @param {string} filePath
   * @param {boolean} ts
   */
  function transform(source, filePath, ts) {
    /** @type {import("sucrase").Transform[]} */
    const transforms = ["imports"];

    if (ts) transforms.push("typescript");

    let transformed = sucrase(source, {
      filePath,
      transforms,
    });
    let code = transformed.code;

    if (code.startsWith("#!")) code = "// " + code;

    code = `async ()=>{${code}}`;

    return code;
  }

  /**
   * @param {string} id
   * @param {string} [src]
   */
  function runtime(id, src) {
    let source;
    let filename;
    let ext;
    if (src) {
      source = src;
      filename = id;
      ext = extname(id);
    } else {
      // Check for node: and file: protocol
      if (id.startsWith("node:")) id = id.slice(5);
      else if (id.startsWith("file:")) id = fileURLToPath(id);

      // Check for builtin node module like fs
      if (builtinModules.includes(id) || id === ".pnp.js" /* #24 */)
        return nativeRequire(id);

      // Resolve path
      filename = resolve(id);
      ext = extname(filename);

      // Unknown format
      if (ext && !/\.[mc]?[jt]sx?/.test(ext)) return nativeRequire(id);

      // Read source
      source = readFileSync(filename, "utf-8");
    }

    // Transpile
    const isTypescript = /\.[mc]?tsx?/.test(ext);
    source = transform(source, filename, isTypescript);

    // Compile module
    const mod = new Module(filename, parentModule);
    mod.filename = filename;
    if (
      parentModule &&
      Array.isArray(parentModule.children) &&
      !parentModule.children.includes(mod)
    )
      parentModule.children.push(mod);

    mod.require = createRuntime(filename, mod);

    mod.path = dirname(filename);

    // @ts-ignore
    mod.paths = Module._nodeModulePaths(mod.path);

    // Compile wrapped script
    // mod._compile wraps require and require.resolve to global function
    vm.runInNewContext(
      source,
      {
        exports: mod.exports,
        require: mod.require,
        __filename: mod.filename,
        __dirname: dirname(mod.filename),
      },
      {
        filename,
        lineOffset: 0,
        displayErrors: false,
      },
    )();

    // Set as loaded
    mod.loaded = true;

    // Return exports
    return mod.exports;
  }

  runtime.resolve = resolve;
  runtime.cache = nativeRequire.cache;
  runtime.extensions = nativeRequire.extensions;
  runtime.main = nativeRequire.main;
  runtime.transform = transform;

  return runtime;
}
