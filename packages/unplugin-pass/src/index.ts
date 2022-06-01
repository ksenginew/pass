import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-pass',
  transformInclude(id) {
    return (/\.pass\.[jt]sx?$/i).test(id)
  },
  transform(code) {
    return 
  },
}))
