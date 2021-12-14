#!/usr/bin/env node

import minimist from 'minimist';
import { globbySync } from 'globby';
import { writeFileSync, watch } from 'fs';
import { relative, resolve } from 'path';

let argv = minimist(process.argv.slice(2));

const version = '0.0.0'
const doc = `Generate css from source files that containing default exports.
Usage:
  pass-lang filename [-o=<outfile>] [-d]
  pass-lang glob [-o=<outdir>] [-d]
Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print pass-lang current version and exit.
  -d, --dev             Enable hot reload and watch mode.
  -o, --output PATH     Set output css file path.
  -i, --init PATH           Start a new project on the path.
`;

async function build(file) {
  try {
    let source = await import('./' + relative(import.meta.url, file))
    let output = file.replace(/\.[jt]sx?$/, '.css')
    if(files.length == 1)
      output = argv.o || argv.output || output
    else if(argv.o || argv.output)
        output = resolve(argv.o || argv.output, output)
    writeFileSync(output, source.default))
    console.log(`Successfully built "${file}"`)
  }
  catch (error) {
    console.log(`Faild to build "${file}"`, error)
  }
}

function dev(file) {
  let fsWait = false;
  watch(file, (event, filename) => {
    if (filename) {
      if (fsWait) return;
      fsWait = setTimeout(() => {
        build()
        fsWait = false;
      }, 100);
    }
  });
}

if (argv.v || argv.version) {
  console.log(version)
}
else if (argv.h || argv.help) {
  console.log(doc)
}
else {
  let files = globbySync(argv._, {})
  console.log(`Processing ${files.length} files(${files[0] || ''}, ...)`)
  files.forEach(file => {
    build(file)
    if (argv.d || argv.dev) {
      dev(file)
    }
  })
}
