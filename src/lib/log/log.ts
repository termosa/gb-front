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
  const now = new Date()
  if (isLogDetailed()) console?.log(` >>> ${now.toISOString()}\n`, ...values)
  else
    console?.log(
      `%c${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`,
      'padding: .2em .5em; background: pink',
      ...values
    )
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
