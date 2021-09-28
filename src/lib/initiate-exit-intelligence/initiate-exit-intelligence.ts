import log from '../log'
import window from '../window'
import loadScript from '../load-script'

const EXIT_INTELLIGENCE_ACCOUNT_ID = 2948

let initialRequest: undefined | Promise<void>

export function initiateExitIntelligence(): Promise<void> {
  if (!window) {
    log('Exit Intelligence cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise<void>((resolve, reject) => {
    if (!window) {
      log('Exit Intelligence cannot be executed on server side')
      return reject()
    }

    loadScript(`//get.exitintel.com/load.js?exitintelAccount=${EXIT_INTELLIGENCE_ACCOUNT_ID}`)
      .then(() => {
        log('Exit Intelligence successfully initialized')
        resolve()
      })
      .catch((error) => {
        log('Exit Intelligence failed to initialize', error)
        reject()
      })
  }))
}
