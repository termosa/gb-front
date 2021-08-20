import loadScriptPromised from 'tiny-script-loader/loadScriptPromised'
import memoize from 'nano-memoize'
import window from '../window'

const loadScript: (url: string) => Promise<void> = memoize((url: string) =>
  window ? loadScriptPromised(url) : Promise.reject('Can not load script in SSR')
)

export { loadScript }
