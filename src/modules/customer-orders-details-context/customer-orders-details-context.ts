import React from 'react'
import { CustomerOrdersDetails, CustomerLevel } from '../../lib/normalize-customer-orders-details'

export { CustomerLevel } from '../../lib/normalize-customer-orders-details'
export type { CustomerOrdersDetails } from '../../lib/normalize-customer-orders-details'

export const CustomerOrdersDetailsContext = React.createContext<CustomerOrdersDetails>({
  totalPoints: 0,
  isICMember: false,
  level: CustomerLevel.NOIR,
  levelName: null,
  isICMembershipActive: false,
})
