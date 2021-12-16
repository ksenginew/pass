import { compileString } from 'sass'
import type { StringOptions } from 'sass'
import { css as pass } from 'pass-lang'

export * from 'sass'

export let scss = (options?: StringOptions) => (...args) => compileString(pass(...args), options)

export let sass = (options: StringOptions = {}) => scss({ style: 'indented', ...options})

export default scss();
