import log from '../log'
import window from '../window'
import loadScript from '../load-script'

const FBQ_TOKEN = '1997108640544837'

export interface FacebookPixelFunction {
  (command: string, ...params: Array<string>): void
  // (command: 'init', token: string): void
  // (command: 'track', event: 'PageView'): void
}

export interface FacebookPixel extends FacebookPixelFunction {
  queue: Array<Array<string>>
  callMethod?: FacebookPixelFunction
  push: FacebookPixelFunction
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: FacebookPixel
    _fbq?: FacebookPixel
  }
}

let initialRequest: undefined | Promise<FacebookPixel>

export function initiateFacebookPixel(): Promise<FacebookPixel> {
  if (!window) {
    log('Facebook Pixel cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise<FacebookPixel>((resolve, reject) => {
    if (!window) {
      log('Facebook Pixel cannot be executed on server side')
      return reject()
    }

    if (window.fbq) return resolve(window.fbq)

    const fbq: FacebookPixel = Object.assign(
      (...args: Parameters<FacebookPixelFunction>) => {
        fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args)
      },
      { queue: [], push: () => {}, loaded: true, version: '2.0' }
    )

    window.fbq = fbq
    if (!window._fbq) window._fbq = fbq

    loadScript('//connect.facebook.net/en_US/fbevents.js')
      .then(() => {
        log('Facebook Pixel successfully initialized')

        log(`fbq('init', '${FBQ_TOKEN}')`)
        fbq('init', FBQ_TOKEN)

        resolve(fbq)
      })
      .catch((error) => {
        log('Facebook Pixel failed to initialize', error)
        reject()
      })
  }))
}
