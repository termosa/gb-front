import log from '../log'
import window from '../window'
import initiatePinterestPixel from '../initiate-pinterest-pixel'

export function pinterestPixel(eventName: string): Promise<void> {
  if (!window) return Promise.resolve()

  return initiatePinterestPixel()
    .then((pinterestPixel) => {
      log(`pinterestPixel('${eventName}')`)
      pinterestPixel(eventName)
    })
    .catch((error) => {
      log('Pinterest Pixel failed to track', eventName)
      if (error) log('Pinterest Pixel failed due to', error)
    })
}
