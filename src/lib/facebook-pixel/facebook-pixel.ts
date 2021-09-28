import log from '../log'
import window from '../window'
import initiateFacebookPixel from '../initiate-facebook-pixel'

export function facebookPixel(eventName: string): Promise<void> {
  if (!window) return Promise.resolve()

  return initiateFacebookPixel()
    .then((fbq) => {
      log(`fbq('track', '${eventName}')`)
      fbq('track', eventName)
    })
    .catch((error) => {
      log('Facebook Pixel failed to track', eventName)
      if (error) log('Facebook Pixel failed due to', error)
    })
}
