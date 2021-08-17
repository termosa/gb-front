import http from '../http'
import normalizeCustomer, { Customer } from '../normalize-customer'

export type { Customer }

export const loadActiveCustomer = (): Promise<Customer> => {
  return http({ url: '/pages/api-customer-json' })
    .then((r) => r.json())
    .then(normalizeCustomer)
}
