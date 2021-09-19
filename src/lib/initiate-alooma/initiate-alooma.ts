import log from '../log'
import window from '../window'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'

const DEFAULT_FUNCTION_NAMES = [
  'alias',
  'disable',
  'identify',
  'name_tag',
  'people.append',
  'people.clear_charges',
  'people.delete_user',
  'people.increment',
  'people.set_once',
  'people.set',
  'people.track_charge',
  'people.union',
  'register_once',
  'register',
  'set_config',
  'time_event',
  'track_custom_event',
  'track_forms',
  'track_links',
  'track_pageview',
  'track',
  'unregister',
]

export type AloomaEventProperties<EventProperties extends Record<string, unknown>> = {
  $browser_version: number
  $browser: string
  $current_url: string
  $device?: unknown
  $initial_referrer: string
  $initial_referring_domain: string
  $lib_version: string
  $os: string
  $referrer?: unknown
  $referring_domain?: unknown
  $screen_height: number
  $screen_width: number
  $search_engine?: string
  distinct_id: string
  email?: string
  mp_keyword?: unknown
  mp_lib: string
  token: string
  utm_campaign?: unknown
  utm_content?: unknown
  utm_medium?: unknown
  utm_source?: unknown
  utm_term?: unknown
} & EventProperties

export type AloomaEvent<EventName extends string, EventProperties extends Record<string, unknown>> = {
  event: EventName
  properties: AloomaEventProperties<EventProperties>
}

type AloomaInitOptions = { api_host: string }

type AloomaConfig = {
  api_host: string
  callback_fn: string
  cookie_expiration: number
  cookie_name: string
  cross_subdomain_cookie: boolean
  debug: boolean
  disable_cookie: boolean
  disable_persistence: boolean
  img: boolean
  ip: boolean
  loaded: () => void
  name: string
  persistence: string
  persistence_name: string
  property_blacklist: Array<unknown>
  save_referrer: boolean
  secure_cookie: boolean
  store_google: boolean
  test: boolean
  token: string
  track_links_timeout: number
  track_pageview: boolean
  upgrade: boolean
}

export type Alooma = Array<unknown> & {
  init(apiKey: string, options: AloomaInitOptions, customProperty?: string): void
  track<EventName extends string, EventProperties extends Record<string, unknown>>(
    eventName?: EventName,
    eventProperties?: EventProperties
  ): AloomaEvent<EventName, EventProperties>
  disable: (eventName?: string) => void
  track_custom_event: (a: unknown, b: unknown) => unknown
  track_pageview: (url?: string) => void
  track_links: (...args: Array<unknown>) => unknown
  track_forms: (...args: Array<unknown>) => unknown
  time_event: (a: unknown) => unknown
  register: (identity: { email: string }, b?: unknown) => void
  register_once: (identity: { email: string }, b: unknown, c: unknown) => void
  unregister: (a: unknown) => unknown
  identify: (...args: Array<unknown>) => void
  get_distinct_id?: () => string | unknown
  alias: (a: unknown, b: unknown) => unknown
  name_tag: (a: unknown, b: unknown) => void
  set_config: (a: unknown) => unknown
  get_config?: (a: unknown) => unknown
  get_property?: (name: string) => unknown
  toString: (isPrefix?: boolean) => string
  config?: AloomaConfig
  cookie?: Record<string, unknown>
  persistence?: Record<string, unknown>
  people: {
    append: (a: unknown, b: unknown, c: unknown) => unknown
    clear_charges: (a: unknown) => unknown
    delete_user: () => unknown
    increment: (a: unknown, b: unknown, c: unknown) => unknown
    set_once: (a: unknown, b: unknown, c: unknown) => unknown
    set: (a: unknown, b: unknown, c: unknown) => unknown
    track_charge: (a: unknown, b: unknown, c: unknown) => unknown
    union: (a: unknown, b: unknown, c: unknown) => unknown
    toString: () => string
  }
  __SV: number
  _i: Array<[string, AloomaInitOptions, string | undefined]>
}

declare global {
  interface Window {
    alooma?: Alooma
  }
}

const ALOOMA_VERSION = 1.2
const ALOOMA_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnROYW1lIjoiZ3Jhdml0eWJyYW5kcyIsImlucHV0TGFiZWwiOiJmcmFncmFudC1qZXdlbHMiLCJpbnB1dFR5cGUiOiJKU1NESyJ9.gxcH9rYsDJ0gHWCiPUURFhfH9NvnRlNCkXSsm0fkYOk'
const ALOOMA_SCRIPT_SRC = '//s3.amazonaws.com/fj-landing-pages/global-js/custom.alooma.min.js' // //cdn.alooma.com/libs/alooma-latest.min.js
const ALOOMA_HOST_URL = 'https://6fmfsgcm1h.execute-api.us-east-1.amazonaws.com/production' // https://inputs.alooma.com

let initialRequest: undefined | Promise<Alooma>

export function initiateAlooma(): Promise<Alooma> {
  if (!window) {
    log('Alooma cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise((resolve, reject) => {
    if (!window) {
      log('Alooma cannot be executed on server side')
      return reject()
    }

    const alooma = window.alooma || (([] as unknown) as Alooma)
    if (!alooma.__SV) {
      window.alooma = alooma
      alooma._i = []
      alooma.init = function (apiKey, options, customProperty) {
        function f(b: Alooma, h: string) {
          const a = h.split('.')
          if (a.length === 2) {
            b = (b[(a[0] as unknown) as number] as unknown) as Alooma
            h = a[1]
          }
          b[(h as unknown) as number] = (...args: Array<unknown>) => {
            b.push([h, ...args])
          }
        }
        let c = alooma
        if ('undefined' !== typeof customProperty) {
          c = alooma[(customProperty as unknown) as number] = ([] as unknown) as Alooma
        } else {
          customProperty = 'alooma'
        }
        c.people = c.people || []
        c.toString = (isPrefix?: boolean) =>
          `alooma${customProperty === 'alooma' ? '' : '.' + customProperty}${isPrefix ? '' : ' (stub)'}`
        c.people.toString = () => `${c.toString(true)}.people (stub)`
        for (let index = 0; index < DEFAULT_FUNCTION_NAMES.length; index++) f(c, DEFAULT_FUNCTION_NAMES[index])
        alooma._i.push([apiKey, options, customProperty])
      }
      alooma.__SV = ALOOMA_VERSION
      Promise.all([
        loadCustomer(),
        loadScript(ALOOMA_SCRIPT_SRC), // Maybe it need script tag with the given url (as in original script), but I didn't notice it until now
      ])
        .then(([customer]) => {
          if (!window?.alooma) {
            log('Alooma did not initialize')
            return reject()
          }
          if (customer) {
            log(`alooma.register({ email: "${customer.email}" })`)
            alooma.register({ email: customer.email })
          }
          resolve(alooma)
        })
        .catch((error) => {
          log('Alooma failed to initialize', error)
          reject()
        })
    }
    alooma.init(ALOOMA_KEY, { api_host: ALOOMA_HOST_URL })
  }))
}
