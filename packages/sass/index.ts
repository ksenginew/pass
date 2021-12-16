// @ts-ignore
import { compileString } from 'sass'
// @ts-ignore
import type { StringOptions } from 'sass'
// @ts-ignore
import { css as pass } from 'pass-lang'

// @ts-ignore
export * from 'sass'

export let scss = (options?: StringOptions) => (strings: TemplateStringsArray, ...args: any[]) => compileString(pass(strings, ...args), options)

export let sass = (options: StringOptions = {}) => scss({ style: 'indented', ...options})

export default scss();
