import normalizeCustomerOrdersDetails from '.'
import { CustomerLevel } from '../use-customer-orders-details'
import { ServerCustomerLevel, ServerCustomerOrdersDetails } from './normalize-customer-orders-details'

describe('normalizeCustomerOrdersDetails()', () => {
  it('normalizes a server customer orders details data', () => {
    expect(
      normalizeCustomerOrdersDetails({
        total_points: 463,
        is_ic_member: true,
        level: { name: 'Platinum' } as ServerCustomerLevel,
        is_active: false,
      } as ServerCustomerOrdersDetails)
    ).toStrictEqual({
      totalPoints: 463,
      isICMember: true,
      level: CustomerLevel.PLATINUM,
      isICMembershipActive: false,
    })
  })
})
