import loadCustomer, { Customer as ActiveCustomer } from '@fragrantjewels/gravity-brands.modules.load-customer'

export type { ActiveCustomer }

export const loadActiveCustomer = (): Promise<ActiveCustomer> => {
  const activeCustomerEmail = 'hihop92924@teeshirtsprint.com'
  return activeCustomerEmail ? loadCustomer(activeCustomerEmail) : Promise.reject('No active customer')
}
