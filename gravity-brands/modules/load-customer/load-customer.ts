import http from '@fragrantjewels/gravity-brands.modules.http'
import normalizeCustomer, { Customer } from '@fragrantjewels/gravity-brands.modules.normalize-customer'
import baseSiteUrl from '@fragrantjewels/gravity-brands.modules.base-site-url'

export type { Customer } from '@fragrantjewels/gravity-brands.modules.normalize-customer'

export const loadCustomer = (): Promise<Customer> =>
  http({ url: `${baseSiteUrl()}/pages/api-customer-json` })
    .then((r) => r.json())
    .then(normalizeCustomer)
