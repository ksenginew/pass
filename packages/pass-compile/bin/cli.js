#!/usr/bin/env node

let minimist = require('minimist');
let glob = require('glob');
let { writeFileSync, watch } = require('fs');
let { relative, resolve } = require('path');
let { version } = require('../package.json');

let argv = minimist(process.argv.slice(2));

const doc = `Generate css from source files that containing default exports.
Usage:
  pass-compile filename [-o=<outfile>] [-d]
  pass-compile glob [-o=<outdir>] [-d]
Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print pass-compile current version and exit.
  -d, --dev             Enable hot reload and watch mode.
  -o, --output PATH     Set output css file path.
  -i, --init PATH           Start a new project on the path.
`;

function build(file, files) {
  try {
    let source = require('./' + relative(__dirname, file));
    let output = file.replace(/\.[jt]sx?$/, '.css');
    if (files == 1) output = argv.o || argv.output || output;
    else if (argv.o || argv.output)
      output = resolve(argv.o || argv.output, output);
    writeFileSync(output, source.default);
    console.log(`Successfully built "${file}"`);
  } catch (error) {
    console.log(`Faild to build "${file}"`, error);
  }
}

function dev(file, files) {
  let fsWait = false;
  watch(file, (event, filename) => {
    if (filename) {
      if (fsWait) return;
      fsWait = setTimeout(() => {
        build(file, files);
        fsWait = false;
      }, 100);
    }
  });
}

if (argv.v || argv.version) {
  console.log(version);
} else if (argv.h || argv.help) {
  console.log(doc);
} else {
  require('sucrase/register');
  let files = [];
  argv._.forEach((pattern) => (files = files.concat(glob.sync(pattern))));
  console.log(`Processing ${files.length} files(${files[0] || ''}, ...)`);
  files.forEach((file) => {
    build(file, files.length);
    if (argv.d || argv.dev) {
      dev(file, files.length);
    }
  });
}
