import log from '../log'
import window from '../window'
import loadScript from '../load-script'
import loadCustomer from '../../modules/load-customer'
import api from './../../modules/api'

const GOOGLE_ANALYTICS_ID = 'UA-52545853-1'

export interface GoogleAnalytics {
  (command: string, ...params: Array<unknown>): void
  q?: Array<Array<unknown>>
  l?: number
}

declare global {
  interface Window {
    GoogleAnalyticsObject?: 'ga'
    ga?: GoogleAnalytics
  }
}

let initialRequest: undefined | Promise<GoogleAnalytics>

export function initiateGoogleAnalytics(): Promise<GoogleAnalytics> {
  if (!window) {
    log('Google Analytics cannot be executed on server side')
    return Promise.reject()
  }

  if (initialRequest) return initialRequest

  return (initialRequest = new Promise((resolve, reject) => {
    if (!window) {
      log('Google Analytics cannot be executed on server side')
      return reject()
    }

    const ga = (command: string, ...params: Array<unknown>) => {
      log(`ga("${command}", ${params.map((p) => JSON.stringify(p)).join(', ')})`)
      window?.ga?.(command, ...params)
    }

    if (window.ga) return resolve(ga)

    window.ga = (command: string, ...params: Array<unknown>) => {
      if (!window || !window.ga) return
      if (!window.ga.q) window.ga.q = []
      window.ga.q.push([command, ...params])
    }

    window.ga.l = Date.now()

    Promise.all([
      loadCustomer().then(
        (customer) =>
          customer &&
          api<{ uuid: string }>({
            base: 'https://tp45uw9vi5.execute-api.us-east-1.amazonaws.com',
            path: '/prod/fj-uuid-service',
            query: { email: customer.email },
          })
            .then((response) => response.uuid)
            .catch(() => null)
      ),
      loadScript('https://www.google-analytics.com/analytics.js'),
    ])
      .then(([customerUniqId]) => {
        log('Google Analytics successfully initialized')
        ga('create', GOOGLE_ANALYTICS_ID, 'auto')
        ga('set', 'dimension4', 'V3')
        if (customerUniqId) ga('set', 'userId', customerUniqId)
        resolve(ga)
      })
      .catch((error) => {
        log('Google Analytics failed to initialize', error)
        reject()
      })
  }))
}
