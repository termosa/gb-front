import loadScriptPromised from 'tiny-script-loader/loadScriptPromised'
import memoize from 'nano-memoize'

const loadScript: (url: string) => Promise<void> = memoize(loadScriptPromised)

export { loadScript }
