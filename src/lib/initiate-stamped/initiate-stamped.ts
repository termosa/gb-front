import window from '../window'
import log from '../log'
import loadScript from '../load-script'

const STAMPED_API_KEY = 'pubkey-vTS264EPmba69fOj0b4ESN97syqldU'

declare global {
  interface Window {
    StampedFn?: {
      init(options: { apiKey: string; storeUrl: string }): void
      reloadUGC(): void
    }
  }
}

let scriptRequest: undefined | Promise<void>

export function initiateStamped(): Promise<void> {
  if (!window) {
    log('Stamped cannot be executed on server side')
    return Promise.reject()
  }

  if (!scriptRequest) {
    scriptRequest = loadScript('https://cdn1.stamped.io/files/widget.min.js').then(() => {
      if (!window?.StampedFn) {
        log('Stamped failed to initialize')
        return
      }

      window?.StampedFn?.init({ apiKey: STAMPED_API_KEY, storeUrl: 'www.fragrantjewels.com' })
      log('Stamped successfully initialized')
    })
  }

  return scriptRequest
}
