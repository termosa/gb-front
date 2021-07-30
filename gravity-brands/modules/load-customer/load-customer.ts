import api from '@fragrantjewels/gravity-brands.modules.api'
import normalizeCustomer, { ServerCustomer, Customer } from '@fragrantjewels/gravity-brands.modules.normalize-customer'

export type { Customer } from '@fragrantjewels/gravity-brands.modules.normalize-customer'

export const loadCustomer = (email: string): Promise<Customer> =>
  api<ServerCustomer>({ path: '/customers/shopify_user/', query: { customer_email: email } }).then(normalizeCustomer)
