import { execSync } from "child_process";
import * as fs from "fs";

describe("cli", () => {
  test("without arguments", () => {
    expect(execSync("node ./packages/pass-lang/bin/cli.js").toString())
      .toMatchInlineSnapshot(`
      "Processing 0 files(, ...)
      "
    `);
  });

  test("get version", () => {
    expect(execSync("node ./packages/pass-lang/bin/cli.js -v").toString())
      .toMatchInlineSnapshot(`
      "0.0.1
      "
    `);
    expect(
      execSync("node ./packages/pass-lang/bin/cli.js --version").toString()
    ).toMatchInlineSnapshot(`
      "0.0.1
      "
    `);
  });

  test("get help", () => {
    expect(execSync("node ./packages/pass-lang/bin/cli.js -h").toString())
      .toMatchInlineSnapshot(`
      "Generate css from source files that containing default exports.
      Usage:
        pass-lang filename [-o=<outfile>] [-d]
        pass-lang glob [-o=<outdir>] [-d]
      Options:
        -h, --help            Print this help message and exit.
        -v, --version         Print pass-lang current version and exit.
        -d, --dev             Enable hot reload and watch mode.
        -o, --output PATH     Set output css file path.
        -i, --init PATH           Start a new project on the path.

      "
    `);
    expect(execSync("node ./packages/pass-lang/bin/cli.js --help").toString())
      .toMatchInlineSnapshot(`
      "Generate css from source files that containing default exports.
      Usage:
        pass-lang filename [-o=<outfile>] [-d]
        pass-lang glob [-o=<outdir>] [-d]
      Options:
        -h, --help            Print this help message and exit.
        -v, --version         Print pass-lang current version and exit.
        -d, --dev             Enable hot reload and watch mode.
        -o, --output PATH     Set output css file path.
        -i, --init PATH           Start a new project on the path.

      "
    `);
  });

  test("javascript file", () => {
    expect(
      execSync(
        "node ./packages/pass-lang/bin/cli.js __test__/javascript.js"
      ).toString()
    ).toMatchInlineSnapshot(`
      "Processing 1 files(__test__/javascript.js, ...)
      Successfully built \\"__test__/javascript.js\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/javascript.css").toString()
    ).toMatchInlineSnapshot(`"js"`);
    fs.unlinkSync("__test__/javascript.css");
  });

  test("typescript file", () => {
    expect(
      execSync(
        "node ./packages/pass-lang/bin/cli.js __test__/typescript.ts"
      ).toString()
    ).toMatchInlineSnapshot(`
      "Processing 1 files(__test__/typescript.ts, ...)
      Successfully built \\"__test__/typescript.ts\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/typescript.css").toString()
    ).toMatchInlineSnapshot(`"ts"`);
    fs.unlinkSync("__test__/typescript.css");
  });

  test("multiple files", () => {
    expect(
      execSync("node ./packages/pass-lang/bin/cli.js __test__/*").toString()
    ).toMatchInlineSnapshot(`
      "Processing 2 files(__test__/javascript.js, ...)
      Successfully built \\"__test__/javascript.js\\"
      Successfully built \\"__test__/typescript.ts\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/javascript.css").toString()
    ).toMatchInlineSnapshot(`"js"`);
    fs.unlinkSync("__test__/javascript.css");
    expect(
      fs.readFileSync("__test__/typescript.css").toString()
    ).toMatchInlineSnapshot(`"ts"`);
    fs.unlinkSync("__test__/typescript.css");
  });
});
