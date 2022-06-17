#!/usr/bin/env node

let minimist = require("minimist");
let glob = require("glob");
let { writeFileSync, watch, existsSync } = require("fs");
let { resolve, normalize, sep } = require("path");
let { compile, compileSync } = require("../dist/passlang.js");
let { version } = require("../package.json");
let argv = minimist(process.argv.slice(2));

const doc = `Generate css from source files that containing default exports.
Usage:
  passlang filename [-o=<outfile>] [-d]
  passlang glob [-o=<outdir>] [-d]
Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print passlang current version and exit.
  -d, --dev             Enable hot reload and watch mode.
  -o, --output PATH     Set output css file path.
  -i, --init PATH           Start a new project on the path.
`;

/**
 * @param {string} file
 * @param {number} files
 */
function build(file, files) {
  try {
    let output = file.replace(/\.[jt]sx?$/, ".css");
    if (files == 1) output = argv.o || argv.output || output;
    else if (argv.o || argv.output)
      output = resolve(argv.o || argv.output, output);
    writeFileSync(output, compileSync(file));
    console.info(`Successfully built "${file}"`);
  } catch (error) {
    console.info(`Faild to build "${file}"\n`, error);
  }
}

/**
 * @param {string} file
 * @param {number} files
 */
function dev(file, files) {
  let fsWait = false;
  watch(file, (event, filename) => {
    if (filename) {
      if (fsWait) return;
      fsWait = true;
      setTimeout(() => {
        build(file, files);
        fsWait = false;
      }, 100);
    }
  });
}

if (argv.v || argv.version) {
  console.info(version);
} else if (argv.h || argv.help) {
  console.info(doc);
} else {
  /**
   * @type {string[]}
   */
  let files = [];
  argv._.forEach(
    (pattern) =>
      (files = files.concat(existsSync(pattern) ? pattern : glob.sync(pattern)))
  );
  console.info(`Processing ${files.length} files(${files[0] || ""}, ...)`);
  files.forEach((file) => {
    build("." + sep + normalize(file), files.length);
    if (argv.d || argv.dev) {
      dev(file, files.length);
    }
  });
}
