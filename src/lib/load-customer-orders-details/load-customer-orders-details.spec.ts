import loadCustomerOrdersDetails from '.'
import api from '../../modules/api'
import { CustomerLevel } from '../normalize-customer-orders-details'
jest.mock('../../modules/api')

describe('loadCustomerOrdersDetails()', () => {
  beforeEach(() => {
    ;(api as jest.Mock).mockReset()
    ;(api as jest.Mock).mockResolvedValue({
      total_points: 555,
      is_ic_member: true,
      level: { name: 'Gold' },
      is_active: true,
    })
  })

  it('should make a call to API', () => {
    loadCustomerOrdersDetails('customerEmail@email.com')
    expect(api).toBeCalledWith({
      path: `/customers/customer_data/`,
      query: { customer_email: 'customerEmail@email.com' },
    })
  })

  it('should return normalized customer orders details', () => {
    expect(loadCustomerOrdersDetails('customerEmail@email.com')).resolves.toEqual({
      totalPoints: 555,
      isICMember: true,
      level: CustomerLevel.GOLD,
      isICMembershipActive: true,
    })
  })
})
