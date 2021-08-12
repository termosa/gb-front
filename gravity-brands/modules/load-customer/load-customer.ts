import http from 'gravity-brands/modules/http'
import normalizeCustomer, { Customer } from 'gravity-brands/modules/normalize-customer'
import baseSiteUrl from 'gravity-brands/modules/base-site-url'

export type { Customer } from 'gravity-brands/modules/normalize-customer'

export const loadCustomer = (): Promise<Customer> =>
  http({ url: `${baseSiteUrl()}/pages/api-customer-json` })
    .then((r) => r.json())
    .then(normalizeCustomer)
