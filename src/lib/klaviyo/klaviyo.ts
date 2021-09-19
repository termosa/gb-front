import log from '../log'
import window from '../window'
import initiateKlaviyo, { KlaviyoCommand } from '../initiate-klaviyo'

export function klaviyo(...command: KlaviyoCommand): Promise<void> {
  if (!window) {
    log('Klaviyo cannot be executed on server side')
    return Promise.reject()
  }

  return initiateKlaviyo()
    .then((klaviyo) => {
      log(`klaviyo.push(${command.map((arg) => JSON.stringify(arg)).join(', ')})`)
      klaviyo.push(command)
    })
    .catch((error) => {
      log('Klaviyo failed to track', command)
      log(error)
    })
}
