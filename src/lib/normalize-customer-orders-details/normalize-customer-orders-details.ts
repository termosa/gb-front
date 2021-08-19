import { CustomerLevel } from '../use-customer-orders-details'

export type ServerCustomerOrdersDetails = {
  id: number
  email: string
  accepts_marketing: boolean
  created_at: string
  updated_at: string
  first_name: string
  last_name: string
  orders_count: number
  state: 'enabled' | 'disabled' | string
  total_spent: string
  last_order_id: number
  note: null | string
  verified_email: boolean
  multipass_identifier: null | unknown
  tax_exempt: boolean
  phone: null | unknown
  tags: string
  last_order_name: string
  currency: 'USD' | string
  addresses: Array<{
    id: number
    customer_id: number
    first_name: string
    last_name: string
    company: string
    address1: string
    address2: string
    city: string
    province: string
    country: string
    zip: string
    phone: string
    name: string
    province_code: null | unknown
    country_code: string
    country_name: string
    default: boolean
  }>
  accepts_marketing_updated_at: string
  marketing_opt_in_level: null | unknown
  tax_exemptions: Array<unknown>
  admin_graphql_api_id: string
  default_address: {
    id: number
    customer_id: number
    first_name: string
    last_name: string
    company: string
    address1: string
    address2: string
    city: string
    province: string
    country: string
    zip: string
    phone: string
    name: string
    province_code: string
    country_code: string
    country_name: string
    default: boolean
  }
  is_passport_member: boolean
  is_ic_member: boolean
  success: boolean
  allow_by_status: boolean
  is_active: boolean
  customer: {
    email: string
  }
  level: {
    id: number
    description: string
    lower_bound: number
    name?: 'Platinum' | 'Gold'
    created: string
    upper_bound: number
    modified: string
    author_id: number
  }
  total_points: number
  total_points_spent: number
  total_dollars: number
  total_points_earned: number
  total_dollars_ytd: number
  dollars_to_next_level: null | number
  braintree_subscriptions: Array<{
    id: string
    status: 'Canceled' | string
    created_at: string
    merchant_account_id: string
    next_bill_amount: string
    next_billing_date: string
    payment_method_token: string
    plan_id: string
  }>
}

export type CustomerOrdersDetails = {
  totalPoints: number
  isICMember: boolean
  level: CustomerLevel
  isICMembershipActive: boolean
}

function normalizeLevel(levelName?: 'Gold' | 'Platinum') {
  if (levelName === 'Gold') return CustomerLevel.GOLD
  if (levelName === 'Platinum') return CustomerLevel.PLATINUM
  return CustomerLevel.NOIR
}

export function normalizeCustomerOrdersDetails(
  customerOrdersDetails: ServerCustomerOrdersDetails
): CustomerOrdersDetails {
  return {
    totalPoints: customerOrdersDetails.total_points,
    isICMember: customerOrdersDetails.is_ic_member,
    level: normalizeLevel(customerOrdersDetails.level.name),
    isICMembershipActive: customerOrdersDetails.is_active,
  }
}
