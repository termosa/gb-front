import { ServerCustomerAddress } from '../normalize-customer-address'

export type ServerCustomer = {
  id: number
  email: string
  first_name: string
  last_name: string
  phone: null | string
  default_address: ServerCustomerAddress
}

export type Customer = {
  customerId: number
  email: string
  fullName: string
  phone?: string
}

export const normalizeCustomer = (customer: ServerCustomer): Customer => ({
  customerId: customer.id,
  email: customer.email,
  fullName: [customer.first_name, customer.last_name].filter(Boolean).join(' '),
  ...(customer.phone && { phone: customer.phone }),
})
