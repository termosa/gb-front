import window from '../window'

export const console = window?.console || typeof global === 'object' ? global.console : undefined
