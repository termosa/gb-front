import window from '../window'
import console from '../console'

declare global {
  interface Window {
    logIsEnabled?: boolean
    logIsDetailed?: boolean
  }
}

let logIsEnabled = true
let logIsDetailed = false

const isLogEnabled = () => (typeof window?.logIsEnabled !== 'undefined' ? window.logIsEnabled : logIsEnabled)

const isLogDetailed = () => (typeof window?.logIsDetailed !== 'undefined' ? window.logIsEnabled : logIsDetailed)

export function log(...values: unknown[]): void {
  if (!isLogEnabled()) return
  if (isLogDetailed()) console?.log(` >>> ${new Date().toISOString()}\n`, ...values)
  else console?.log(...values)
}

log.enable = () => {
  logIsEnabled = true
}

log.disable = () => {
  logIsEnabled = false
}

log.enableDetails = () => {
  logIsDetailed = true
}

log.disableDetails = () => {
  logIsDetailed = false
}
