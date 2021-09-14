import shopifyApi from '../../lib/shopify-api'
import normalizeCustomer, { Customer, ServerCustomer } from '../normalize-customer'

export type { Customer } from '../normalize-customer'

export type LoadCustomerOptions = {
  skipCache?: boolean
}

let cache: null | Customer = null
let lastRequest: null | Promise<Customer | null> = null

export const loadCustomer = (options: LoadCustomerOptions = {}): Promise<Customer | null> => {
  console.warn('OPTIONS', options)
  if (!options.skipCache) {
    if (cache) return Promise.resolve(cache)
    if (lastRequest) return lastRequest
  }

  lastRequest = shopifyApi<ServerCustomer>({ path: `/pages/api-customer-json` })
    .then(normalizeCustomer)
    .then((customer) => (cache = customer))

  return lastRequest
}
