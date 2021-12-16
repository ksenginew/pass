// @ts-ignore
import { compileString } from 'sass'
// @ts-ignore
import type { StringOptions } from 'sass'
// @ts-ignore
import { css as pass } from 'pass-lang'

export * from 'sass'

export let scss = (options?: StringOptions) => ((...args) => compileString(pass(...args), options)) as typeof pass

export let sass = (options: StringOptions = {}) => scss({ style: 'indented', ...options})

export default scss();
