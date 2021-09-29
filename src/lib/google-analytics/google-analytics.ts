import log from '../log'
import window from '../window'
import initiateGoogleAnalytics from '../initiate-google-analytics'

export function googleAnalytics(event: string | Record<string, unknown>, ...properties: Array<unknown>): Promise<void> {
  if (!window) return Promise.resolve()

  return initiateGoogleAnalytics()
    .then((ga) => {
      ga('send', event, ...properties)
    })
    .catch((error) => {
      log(`Google Analytics failed to track ${JSON.stringify(event)}`, properties)
      if (error) log('Google Analytics failed due to', error)
    })
}
