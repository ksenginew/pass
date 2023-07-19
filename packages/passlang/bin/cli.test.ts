import { execSync } from "child_process";
import * as fs from "fs";

function clean() {
  try {
    fs.unlinkSync("__test__/javascript.css");
    fs.unlinkSync("__test__/typescript.css");
  } catch { }
}

describe("cli", () => {
  test("without arguments", () => {
    expect(execSync("node ./packages/passlang/bin/cli.js").toString())
      .toMatchInlineSnapshot(`
      "Processing 0 files(, ...)
      "
    `);
  });

  test("get help", () => {
    expect(execSync("node ./packages/passlang/bin/cli.js -h").toString())
      .toMatchInlineSnapshot(`
      "Generate css from source files that containing default exports.
      Usage:
        passlang filename [-o=<outfile>] [-d]
        passlang glob [-o=<outdir>] [-d]
      Options:
        -h, --help            Print this help message and exit.
        -v, --version         Print passlang current version and exit.
        -d, --dev             Enable hot reload and watch mode.
        -o, --output PATH     Set output css file path.
        -i, --init PATH           Start a new project on the path.

      "
    `);
    expect(execSync("node ./packages/passlang/bin/cli.js --help").toString())
      .toMatchInlineSnapshot(`
      "Generate css from source files that containing default exports.
      Usage:
        passlang filename [-o=<outfile>] [-d]
        passlang glob [-o=<outdir>] [-d]
      Options:
        -h, --help            Print this help message and exit.
        -v, --version         Print passlang current version and exit.
        -d, --dev             Enable hot reload and watch mode.
        -o, --output PATH     Set output css file path.
        -i, --init PATH           Start a new project on the path.

      "
    `);
  });

  test("javascript file", () => {
    expect(
      execSync(
        "node ./packages/passlang/bin/cli.js __test__/javascript.js",
      ).toString(),
    ).toMatchInlineSnapshot(`
      "Processing 1 files(__test__/javascript.js, ...)
      Successfully built \\"./__test__/javascript.js\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/javascript.css").toString(),
    ).toMatchInlineSnapshot(`"js"`);
  });

  test("typescript file", () => {
    expect(
      execSync(
        "node ./packages/passlang/bin/cli.js __test__/typescript.ts",
      ).toString(),
    ).toMatchInlineSnapshot(`
      "Processing 1 files(__test__/typescript.ts, ...)
      Successfully built \\"./__test__/typescript.ts\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/typescript.css").toString(),
    ).toMatchInlineSnapshot(`"ts"`);
  });

  test.skip("multiple files", () => {
    expect(
      execSync("node ./packages/passlang/bin/cli.js __test__/*").toString(),
    ).toMatchInlineSnapshot(`
      "Processing 2 files(__test__/javascript.js, ...)
      Successfully built \\".\\\\__test__\\\\javascript.js\\"
      Successfully built \\".\\\\__test__\\\\typescript.ts\\"
      "
    `);
    expect(
      fs.readFileSync("__test__/javascript.css").toString(),
    ).toMatchInlineSnapshot(`"js"`);
    expect(
      fs.readFileSync("__test__/typescript.css").toString(),
    ).toMatchInlineSnapshot(`"ts"`);

  });

  afterEach(() => {
    clean()
  })
});


