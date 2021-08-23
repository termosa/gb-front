import { renderHook } from '@testing-library/react-hooks'
import { Status } from 'use-defer'
import useCustomerOrdersDetails, { CustomerLevel } from '.'
import loadCustomerOrdersDetails, { CustomerOrdersDetails } from '../load-customer-orders-details'
jest.mock('../load-customer-orders-details')

describe('useCustomerOrdersDetails()', () => {
  beforeEach(() => {
    ;(loadCustomerOrdersDetails as jest.Mock).mockReset()
    ;(loadCustomerOrdersDetails as jest.Mock).mockResolvedValue({
      status: Status.SUCCESS,
      error: undefined,
      totalPoints: 1144,
      isICMember: true,
      level: CustomerLevel.GOLD,
      isICMembershipActive: true,
    } as CustomerOrdersDetails)
  })

  it('should not receive data if email is not given', async () => {
    const { result, waitForNextUpdate } = renderHook(useCustomerOrdersDetails)

    await waitForNextUpdate()
    expect(result.current).toStrictEqual({
      status: Status.IDLE,
      error: undefined,
      totalPoints: 0,
      isICMember: false,
      level: CustomerLevel.NOIR,
      isICMembershipActive: false,
      reload: expect.any(Function),
    })
  })

  it('should have initial data and pending status', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCustomerOrdersDetails('customerEmail@email.com'))

    expect(result.current).toStrictEqual({
      status: Status.PENDING,
      error: undefined,
      totalPoints: 0,
      isICMember: false,
      level: CustomerLevel.NOIR,
      isICMembershipActive: false,
      reload: expect.any(Function),
    })

    await waitForNextUpdate()
    expect(result.current.status).toBe(Status.SUCCESS)
  })

  it('should return data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCustomerOrdersDetails('customerEmail@email.com'))

    await waitForNextUpdate()
    expect(result.current).toStrictEqual({
      status: Status.SUCCESS,
      error: undefined,
      totalPoints: 1144,
      isICMember: true,
      level: CustomerLevel.GOLD,
      isICMembershipActive: true,
      reload: expect.any(Function),
    })
  })
})
