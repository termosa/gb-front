import log from '../log'
import window from '../window'
import initiateKlaviyo, { KlaviyoCommand } from '../initiate-klaviyo'

const stringifyKlaviyoCommand = (command: Array<unknown>) => command.map((arg) => JSON.stringify(arg)).join(', ')

export function klaviyo(...command: KlaviyoCommand): Promise<void> {
  if (!window) return Promise.resolve()

  return initiateKlaviyo()
    .then((klaviyo) => {
      log(`klaviyo.push(${stringifyKlaviyoCommand(command)})`)
      klaviyo.push(command)
    })
    .catch((error) => {
      log('Klaviyo failed to track', command)
      log(error)
    })
}
