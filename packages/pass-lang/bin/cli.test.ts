import { execSync } from 'child_process'
import * as fs from 'fs'

describe('cli', () => {
  test('without arguments', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js').toString()).toMatchInlineSnapshot()
  })

  test('get version', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js -v').toString()).toMatchInlineSnapshot()
    expect(execSync('node ./packages/pass-lang/bin/cli.js --version').toString()).toMatchInlineSnapshot()
  })

  test('get help', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js -h').toString()).toMatchInlineSnapshot()
    expect(execSync('node ./packages/pass-lang/bin/cli.js --help').toString()).toMatchInlineSnapshot()
  })

  test('javascript file', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js __test__/javascript.js').toString()).toMatchInlineSnapshot()
    expect(fs.readFileSync('__test__/javascript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/javascript.css')
  })

  test('typescript file', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js __test__/typescript.ts').toString()).toMatchInlineSnapshot()
    expect(fs.readFileSync('__test__/typescript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/typescript.css')
  })

  test('multiple files', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js __test__/*').toString()).toMatchInlineSnapshot()
    expect(fs.readFileSync('__test__/javascript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/javascript.css')
    expect(fs.readFileSync('__test__/typescript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/typescript.css')
  })
})
