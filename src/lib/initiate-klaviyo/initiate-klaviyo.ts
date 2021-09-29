import log from '../log'
import window from '../window'
import repeat from '../repeat'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'

export const KLAVIYO_ACCOUNT = 'HsK4TE'
export const KLAVIYO_SHOP = 'fragrantjewels.myshopify.com'

const KLAVIYO_CHECK_TIMEOUT = 100
const KLAVIYO_CHECK_LOG_INDEX = 100
const KLAVIYO_MAX_TRIES = KLAVIYO_CHECK_LOG_INDEX * 10

export type KlaviyoIdentity = {
  $email?: string
  $first_name?: string
  $last_name?: string
} & Record<string, string | number | boolean>

export type TrackViewedItemPayload = {
  ProductID: string
  Name: string
  Categories?: Array<string> // collection names
  ImageURL?: string
  URL: string
  Brand?: string
  Price: string // Like: "$.140"
  CompareAtPrice?: string // Like: "$.140"
  siteVersion: 'V3'
}

// https://apidocs.klaviyo.com/reference/javascript-client-library
export type KlaviyoCommand =
  | []
  | ['account', string]
  | ['identify', KlaviyoIdentity, void | Record<string, unknown>, void | Record<string, unknown>, void | (() => void)]
  | ['track', 'Viewed Product', TrackViewedItemPayload]
  | ['track', string, Record<string, unknown>]
  | Array<unknown>

export type Klaviyo = {
  push(command: KlaviyoCommand): unknown
  identify(
    identity: KlaviyoIdentity,
    doNotKnowWhatIsIt?: Record<string, unknown>,
    doNotKnowWhatIsIt2?: Record<string, unknown>,
    callback?: () => void
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
      loadCustomer().catch(() => null),
      loadScript(`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_ACCOUNT}&shop=${KLAVIYO_SHOP}`),
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

        repeat(
          (index) => {
            if (index && !(index % KLAVIYO_CHECK_LOG_INDEX)) {
              log(
                `Klaviyo can not initialize during ${
                  ((index / KLAVIYO_CHECK_LOG_INDEX) * KLAVIYO_CHECK_TIMEOUT * index) / 1e3
                }s`
              )
            }
            if (!klaviyo.identify) return
            log(`klaviyo.identify({ $email: ${JSON.stringify(customer.email)} })`)
            klaviyo.identify({ $email: customer.email }, { siteVersion: '1_V3' }, { siteVersion: '2_V3' }, () => {
              log('Klaviyo successfully initialized')
              resolve(klaviyo)
            }) // TODO: handle reject
            return true
          },
          KLAVIYO_CHECK_TIMEOUT,
          KLAVIYO_MAX_TRIES
        )
      })
      .catch((error) => {
        log('Klaviyo failed to initialize', error)
        reject()
      })
  }))
}
