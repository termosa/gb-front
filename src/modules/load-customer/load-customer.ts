import shopifyApi from '../../lib/shopify-api'
import normalizeCustomer, { Customer, ServerCustomer } from '../normalize-customer'

export type { Customer } from '../normalize-customer'

export const loadCustomer = (): Promise<Customer | null> =>
  shopifyApi<ServerCustomer>({ path: `/pages/api-customer-json` }).then(normalizeCustomer)
