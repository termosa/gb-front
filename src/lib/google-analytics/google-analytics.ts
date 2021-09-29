import log from '../log'
import window from '../window'
import initiateGoogleAnalytics from '../initiate-google-analytics'

export function googleAnalytics(event: string, ...properties: Array<unknown>): Promise<void> {
  if (!window) return Promise.resolve()

  return initiateGoogleAnalytics()
    .then((ga) => {
      ga('send', event, ...properties)
    })
    .catch((error) => {
      log(`Google Analytics failed to track "${event}"`, properties)
      if (error) log('Google Analytics failed due to', error)
    })
}
