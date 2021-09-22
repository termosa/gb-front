import log from '../log'
import window from '../window'
import initiateGtm from '../initiate-gtm'

export function gtm(eventName: string, eventProperties: Record<string, unknown> = {}): Promise<void> {
  if (!window) return Promise.resolve()

  return initiateGtm()
    .then((gtm) => {
      log(`gtm.push("${eventName}", ${JSON.stringify(eventProperties)})`)
      gtm.push({ ...eventProperties, event: eventName })
    })
    .catch((error) => {
      log(`GTM failed to track "${eventName}"`, eventProperties)
      if (error) log('GTM failed due to', error)
    })
}
