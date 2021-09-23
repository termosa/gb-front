import log from '../log'
import window from '../window'
import initiateAlooma from '../initiate-alooma'
import formatDate from 'date-fns/format'

export function alooma(eventName: string, eventProperties: Record<string, unknown> = {}): Promise<void> {
  if (!window) return Promise.resolve()

  const patchedProperties = {
    timestamp: formatDate(new Date(), 'MM/dd/yyyy hh:mm:ss aa'),
    siteVersion: 3,
    ...eventProperties,
  }

  return initiateAlooma()
    .then((alooma) => {
      log(`alooma.track("${eventName}", ${JSON.stringify(patchedProperties)})`)
      alooma.track(eventName, patchedProperties)
    })
    .catch((error) => {
      log(`Alooma failed to track "${eventName}"`, patchedProperties)
      if (error) log('Alooma failed due to', error)
    })
}

if (window) Object.assign(window, { track: alooma })
