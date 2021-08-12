import http from '@fragrantjewels/gravity-brands.modules.http'
import normalizeCustomer, { Customer } from '@fragrantjewels/gravity-brands.modules.normalize-customer'

export type { Customer }

export const loadActiveCustomer = (): Promise<Customer> => {
  return http({ url: '/pages/api-customer-json' })
    .then((r) => r.json())
    .then(normalizeCustomer)
}
