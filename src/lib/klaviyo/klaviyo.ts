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
      push(command: KlaviyoCommand): unknown
      identify(
        identity: KlaviyoIdentity,
        doNotKnowWhatIsIt: undefined,
        doNotKnowWhatIsIt2: undefined,
        callback: () => void
      ): unknown
    }
  }
}

let initialRequests: undefined | Promise<unknown>

export function klaviyo(...command: KlaviyoCommand): Promise<unknown> {
  if (!window) {
    log('Klaviyo cannot be executed on server side')
    return Promise.reject()
  }

  if (!initialRequests) {
    initialRequests = Promise.all([
      loadCustomer(),
      loadScript(`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_API_KEY}&shop=${KLAVIYO_SHOP}`),
    ])
      .then(([customer]) => {
        window?._learnq?.push(['account', KLAVIYO_ACCOUNT])
        if (customer) {
          return new Promise((resolve) => {
            window?._learnq?.identify({ $email: customer.email }, undefined, undefined, () => resolve(undefined))
          })
        }
      })
      .catch((error) => log('Klaviyo could not be initialized', error))
  }

  if (!command.length) return initialRequests
  log(`klaviyo(${command.map((arg) => JSON.stringify(arg)).join(', ')})`)
  return initialRequests.then(() => window?._learnq?.push(command))
}
