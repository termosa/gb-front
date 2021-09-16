import { ServerCustomerAddress } from '../normalize-customer-address'

export type ServerCustomer = null | {
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
  firstName: string
  fullName: string
  phone?: string
}

export const normalizeCustomer = (customer: ServerCustomer): null | Customer =>
  customer && {
    customerId: customer.id,
    email: customer.email,
    firstName: customer.first_name,
    fullName: [customer.first_name, customer.last_name].filter(Boolean).join(' '),
    ...(customer.phone && { phone: customer.phone }),
  }
