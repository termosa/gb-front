import http from '../http'
import normalizeCustomer, { Customer } from '../normalize-customer'
import baseSiteUrl from '../base-site-url'

export type { Customer } from '../normalize-customer'

export const loadCustomer = (): Promise<Customer> =>
  http({ url: `${baseSiteUrl()}/pages/api-customer-json` })
    .then((r) => r.json())
    .then(normalizeCustomer)
