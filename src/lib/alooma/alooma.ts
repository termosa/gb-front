import log from '../log'
import window from '../window'
import initiateAlooma from '../initiate-alooma'

export function alooma(eventName: string, eventProperties: Record<string, unknown> = {}): Promise<void> {
  if (!window) {
    log('Alooma cannot be executed on server side')
    return Promise.reject()
  }

  return initiateAlooma()
    .then((alooma) => {
      log(`alooma.track("${eventName}", ${JSON.stringify(eventProperties)})`)
      alooma.track(eventName, eventProperties)
    })
    .catch((error) => {
      log('Alooma failed to track', eventName, eventProperties)
      log(error)
    })
}
