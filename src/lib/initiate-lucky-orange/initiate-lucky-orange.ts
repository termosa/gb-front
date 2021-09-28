import log from '../log'
import window from '../window'
import loadScript from '../load-script'

const LUCKY_ORANGE_SITE_ID = 132073

declare global {
  interface Window {
    __lo_site_id?: number
  }
}

let initialRequest: undefined | Promise<void>

export function initiateLuckyOrange(): Promise<void> {
  if (!window) {
    log('Lucky Orange cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise<void>((resolve, reject) => {
    if (!window) {
      log('Lucky Orange cannot be executed on server side')
      return reject()
    }

    window.__lo_site_id = LUCKY_ORANGE_SITE_ID

    loadScript('//d10lpsik1i8c69.cloudfront.net/w.js')
      .then(() => {
        log('Lucky Orange successfully initialized')
        resolve()
      })
      .catch((error) => {
        log('Lucky Orange failed to initialize', error)
        reject()
      })
  }))
}
