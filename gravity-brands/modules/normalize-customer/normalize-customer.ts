import { ServerCustomerAddress } from '@fragrantjewels/gravity-brands.modules.normalize-customer-address'

export enum TaxExemption {
  EXEMPT_ALL = 'EXEMPT_ALL', // This customer is exempt from all Canadian taxes.
  CA_STATUS_CARD_EXEMPTION = 'CA_STATUS_CARD_EXEMPTION', // This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada.
  CA_DIPLOMAT_EXEMPTION = 'CA_DIPLOMAT_EXEMPTION', // This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada.
  CA_BC_RESELLER_EXEMPTION = 'CA_BC_RESELLER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia.
  CA_MB_RESELLER_EXEMPTION = 'CA_MB_RESELLER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba.
  CA_SK_RESELLER_EXEMPTION = 'CA_SK_RESELLER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan.
  CA_BC_COMMERCIAL_FISHERY_EXEMPTION = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia.
  CA_MB_COMMERCIAL_FISHERY_EXEMPTION = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba.
  CA_NS_COMMERCIAL_FISHERY_EXEMPTION = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia.
  CA_PE_COMMERCIAL_FISHERY_EXEMPTION = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island.
  CA_SK_COMMERCIAL_FISHERY_EXEMPTION = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan.
  CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia.
  CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION', // This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan.
  CA_BC_SUB_CONTRACTOR_EXEMPTION = 'CA_BC_SUB_CONTRACTOR_EXEMPTION', // This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_SUB_CONTRACTOR_EXEMPTION = 'CA_SK_SUB_CONTRACTOR_EXEMPTION', // This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_BC_CONTRACTOR_EXEMPTION = 'CA_BC_CONTRACTOR_EXEMPTION', // This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia.
  CA_SK_CONTRACTOR_EXEMPTION = 'CA_SK_CONTRACTOR_EXEMPTION', // This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan.
  CA_ON_PURCHASE_EXEMPTION = 'CA_ON_PURCHASE_EXEMPTION', // This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario.
  CA_MB_FARMER_EXEMPTION = 'CA_MB_FARMER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba.
  CA_NS_FARMER_EXEMPTION = 'CA_NS_FARMER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia.
  CA_SK_FARMER_EXEMPTION = 'CA_SK_FARMER_EXEMPTION', // This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan.
}

// https://shopify.dev/api/admin/rest/reference/customers/customer?api%5Bversion%5D=2021-01#index-2021-01
export type ServerCustomer = {
  // Identification
  id: number
  email: string
  first_name: string
  last_name: string
  phone: null | string
  // Orders
  last_order_id: number
  last_order_name: string // Example: '#1099_PRP'
  orders_count: number
  total_spent: string // Example: '6548.93'
  tax_exempt: boolean // Whether the customer is exempt from paying taxes on their order. If true, then taxes won't be applied to an order at checkout. If false, then taxes will be applied at checkout.
  tax_exemptions: Array<TaxExemption>
  // Settings
  accepts_marketing: boolean
  accepts_marketing_updated_at: string // Example: '2020-10-08T14:36:10-07:00'
  marketing_opt_in_level: null | 'single_opt_in' | 'confirmed_opt_in' | 'unknown'
  multipass_identifier: null | string
  tags: string // String of comma-separated values
  note: null | string
  verified_email: boolean
  currency: string // The three-letter code (ISO 4217 format)
  addresses: Array<ServerCustomerAddress>
  default_address: ServerCustomerAddress
  // Meta
  admin_graphql_api_id: string // Example: 'gid://shopify/Customer/3789649707098'
  state: 'disabled' | 'invited' | 'enabled' | 'declined'
  created_at: string // Example: '2020-10-08T14:36:04-07:00'
  updated_at: string // Example: '2021-07-05T13:20:06-07:00'
}

export type Customer = {
  customerId: number
  email: string
  firstName: string
  lastName: string
  phone?: string
}

export const normalizeCustomer = (customer: ServerCustomer): Customer => ({
  customerId: customer.id,
  email: customer.email,
  firstName: customer.first_name,
  lastName: customer.last_name,
  ...(customer.phone && { phone: customer.phone }),
})
