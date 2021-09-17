import log from '../log'
import window from '../window'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'

export const KLAVIYO_API_KEY = 'HsK4TE'
export const KLAVIYO_ACCOUNT = 'bhN59v'
export const KLAVIYO_SHOP = 'fragrantjewels.myshopify.com'

export type KlaviyoIdentity = {
  $email?: string
  $first_name?: string
  $last_name?: string
} & Record<string, string | number | boolean>

export type KlaviyoItem = {
  ItemId: number
  Title: string
  ImageUrl?: string
  Categories?: Array<string> // collection names
  Url: string
  Metadata: {
    Price: string // Like "$1.40"
    CompareAtPrice?: string // Like "$1.40"
    Brand?: string
  }
}

export type TrackViewedItemPayload = {
  ProductID: string
  Name: string
  Categories?: Array<string> // collection names
  ImageURL?: string
  URL: string
  Brand?: string
  Price: string // Like: "$.140"
  CompareAtPrice?: string // Like: "$.140"
}

// https://apidocs.klaviyo.com/reference/javascript-client-library
type KlaviyoCommand =
  | []
  | ['account', string]
  | ['identify', KlaviyoIdentity]
  | ['track', 'Viewed Product', TrackViewedItemPayload]
  | ['track', string, Record<string, unknown>]
  | ['trackViewedItem', KlaviyoItem]

declare global {
  interface Window {
    _learnq?: {
      push(command: KlaviyoCommand): void
    }
  }
}

let initialRequests: undefined | Promise<unknown>

const push = (command: KlaviyoCommand) => {
  log(`klaviyo(${command.map((arg) => JSON.stringify(arg)).join(', ')})`)
  window?._learnq?.push(command)
}

export function klaviyo(...command: KlaviyoCommand): void {
  if (!window) {
    log('Klaviyo cannot be executed on server side')
    return
  }

  if (!initialRequests) {
    initialRequests = Promise.all([
      loadCustomer(),
      loadScript(`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_API_KEY}&shop=${KLAVIYO_SHOP}`),
    ])
      .then(([customer]) => {
        push(['account', KLAVIYO_ACCOUNT])
        if (customer) push(['identify', { $email: customer.email }])
      })
      .catch((error) => log('Klaviyo could not be initialized', error))
  }

  if (command.length) initialRequests.then(() => push(command))
}
