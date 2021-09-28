import log from '../log'
import window from '../window'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'

const PINTEREST_TOKEN = '2617527893066'

export interface PinterestPixelFunction {
  (command: string, ...params: Array<unknown>): void
}

export interface PinterestPixel extends PinterestPixelFunction {
  queue: Array<Array<unknown>>
  version: string
}

declare global {
  interface Window {
    pintrk?: PinterestPixel
  }
}

let initialRequest: undefined | Promise<PinterestPixelFunction>

export function initiatePinterestPixel(): Promise<PinterestPixelFunction> {
  if (!window) {
    log('Pinterest Pixel cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise<PinterestPixelFunction>((resolve, reject) => {
    if (!window) {
      log('Pinterest Pixel cannot be executed on server side')
      return reject()
    }

    if (window.pintrk) return resolve(window.pintrk)

    const pintrk: PinterestPixel = Object.assign(
      (command: string, ...params: Array<unknown>) => {
        pintrk.queue.push([command, ...params])
      },
      { queue: [], version: '3.0' }
    )

    window.pintrk = pintrk

    Promise.all([loadCustomer().catch(() => null), loadScript('//s.pinimg.com/ct/core.js')])
      .then(([customer]) => {
        log('Pinterest Pixel successfully initialized')

        log(`pintrk('load', '${PINTEREST_TOKEN}'${customer ? `, { em: '${customer?.email}' }` : ''})`)
        window?.pintrk?.('load', PINTEREST_TOKEN, { em: customer?.email })

        resolve((command: string, ...params: Array<unknown>) => {
          window?.pintrk?.(command, ...params)
        })
      })
      .catch((error) => {
        log('Pinterest Pixel failed to initialize', error)
        reject()
      })
  }))
}
