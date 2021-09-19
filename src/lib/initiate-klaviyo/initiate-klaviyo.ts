import log from '../log'
import window from '../window'
import repeat from '../repeat'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'

export const KLAVIYO_API_KEY = 'HsK4TE'
export const KLAVIYO_ACCOUNT = 'bhN59v'
export const KLAVIYO_SHOP = 'fragrantjewels.myshopify.com'

const KLAVIYO_CHECK_TIMEOUT = 500
const KLAVIYO_CHECK_LOG_INDEX = 20

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
export type KlaviyoCommand =
  | []
  | ['account', string]
  | ['identify', KlaviyoIdentity]
  | ['track', 'Viewed Product', TrackViewedItemPayload]
  | ['track', string, Record<string, unknown>]
  | ['trackViewedItem', KlaviyoItem]

export type Klaviyo = {
  push(command: KlaviyoCommand): unknown
  identify(
    identity: KlaviyoIdentity,
    doNotKnowWhatIsIt: undefined,
    doNotKnowWhatIsIt2: undefined,
    callback: () => void
  ): unknown
}

declare global {
  interface Window {
    _learnq?: Klaviyo
  }
}

let initialRequest: undefined | Promise<Klaviyo>

export function initiateKlaviyo(): Promise<Klaviyo> {
  if (!window) {
    log('Klaviyo cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise((resolve, reject) => {
    if (!window) {
      log('Klaviyo cannot be executed on server side')
      return reject()
    }

    Promise.all([
      loadCustomer(),
      loadScript(`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_API_KEY}&shop=${KLAVIYO_SHOP}`),
    ])
      .then(([customer]) => {
        if (!window?._learnq) {
          log('Klaviyo did not initialize')
          return reject()
        }

        const klaviyo = window._learnq

        log(`klaviyo.push(['account', "${KLAVIYO_ACCOUNT}"])`)
        klaviyo.push(['account', KLAVIYO_ACCOUNT])

        if (!customer) return resolve(klaviyo)

        repeat((index) => {
          if (!klaviyo.identify && !(index % KLAVIYO_CHECK_LOG_INDEX)) {
            if (index) {
              log(
                `Klaviyo can not initialize during ${
                  ((index / KLAVIYO_CHECK_LOG_INDEX) * KLAVIYO_CHECK_TIMEOUT * index) / 1e3
                }s`
              )
            }
            return
          }
          log(`klaviyo.identify({ $email: ${JSON.stringify(customer.email)} })`)
          klaviyo.identify({ $email: customer.email }, undefined, undefined, () => resolve(klaviyo)) // TODO: handle reject
          return true
        }, KLAVIYO_CHECK_TIMEOUT)
      })
      .catch((error) => {
        log('Klaviyo failed to initialize', error)
        reject()
      })
  }))
}
