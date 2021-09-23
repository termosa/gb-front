import log from '../log'
import window from '../window'
import repeat from '../repeat'
import TagManager from 'react-gtm-module'

const GTM_CHECK_TIMEOUT = 100
const GTM_CHECK_LOG_INDEX = 100
const GTM_MAX_TRIES = GTM_CHECK_LOG_INDEX * 10

export type GoogleTagManager = Array<Record<string, unknown> & { event: string }>

declare global {
  interface Window {
    dataLayer?: GoogleTagManager
  }
}

let initialRequest: undefined | Promise<GoogleTagManager>

export function initiateGtm(): Promise<GoogleTagManager> {
  if (!window) {
    log('GTM cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise((resolve, reject) => {
    if (!window) {
      log('GTM cannot be executed on server side')
      return reject()
    }

    TagManager.initialize({ gtmId: 'GTM-N7Q8P7' })

    repeat(
      (index) => {
        if (window?.dataLayer) return window.dataLayer
        if (index && !(index % GTM_CHECK_LOG_INDEX)) {
          log(`GTM can not initialize during ${((index / GTM_CHECK_LOG_INDEX) * GTM_CHECK_TIMEOUT * index) / 1e3}s`)
        }
      },
      GTM_CHECK_TIMEOUT,
      GTM_MAX_TRIES
    )
      .then((gtm) => {
        if (!gtm) return Promise.reject('timeout')
        log('Alooma successfully initialized')
        resolve(gtm)
      })
      .catch((error) => {
        log('GTM failed to initialize', error)
        reject()
      })
  }))
}
