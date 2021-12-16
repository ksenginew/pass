import { execSync } from 'child_process'
import * as fs from 'fs'

describe('cli', () => {
  test('without arguments', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js')).toMatchInlineSnapshot()
  })

  test('get version', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js -v')).toMatchInlineSnapshot()
    expect(execSync('node ./packages/pass-lang/bin/cli.js --version')).toMatchInlineSnapshot()
  })

  test('get help', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js -h')).toMatchInlineSnapshot()
    expect(execSync('node ./packages/pass-lang/bin/cli.js --help')).toMatchInlineSnapshot()
  })

  test('javascript file', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js __test__/javascript.js')).toMatchInlineSnapshot()
    expect(fs.readFileSync('__test__/javascript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/javascript.css')
  })

  test('typescript file', () => {
    expect(execSync('node ./packages/pass-lang/bin/cli.js __test__/typescript.ts')).toMatchInlineSnapshot()
    expect(fs.readFileSync('__test__/typescript.css').toString()).toMatchInlineSnapshot()
    fs.unlinkSync('__test__/typescript.css')
  })
})
