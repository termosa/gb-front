import { useEffect, useMemo } from 'react'
import useDefer, { Status } from 'use-defer'
import createGlobalStateHook from '../create-global-state-hook'
import loadCustomerOrdersDetails, { CustomerOrdersDetails, CustomerLevel } from '../load-customer-orders-details'

export { CustomerLevel } from '../load-customer-orders-details'

type CustomerOrdersDetailsState = CustomerOrdersDetails & {
  status: Status
  error: undefined | string
}

const useGlobalState = createGlobalStateHook<CustomerOrdersDetailsState>({
  status: Status.IDLE,
  error: undefined,
  totalPoints: 0,
  isICMember: false,
  level: CustomerLevel.NOIR,
  levelName: null,
  isICMembershipActive: false,
})

type CustomerOrdersDetailsHookResult = CustomerOrdersDetailsState & {
  reload: () => void
}

export function useCustomerOrdersDetails(email?: string): CustomerOrdersDetailsHookResult {
  const [state, setState] = useGlobalState()

  const customerRequest = useDefer(() => (email ? loadCustomerOrdersDetails(email) : undefined), [email], [])

  useEffect(() => {
    if (!email) return
    if (customerRequest.status === Status.SUCCESS) {
      setState((prevState) => ({
        ...prevState,
        status: Status.SUCCESS,
        error: undefined,
        totalPoints: customerRequest.value?.totalPoints || 0,
        isICMember: customerRequest.value?.isICMember || false,
        level: customerRequest.value?.level || CustomerLevel.NOIR,
        isICMembershipActive: customerRequest.value?.isICMembershipActive || false,
      }))
    } else if (customerRequest.status === Status.ERROR) {
      setState({
        status: Status.ERROR,
        error: customerRequest.error?.toString(),
        totalPoints: 0,
        isICMember: false,
        level: CustomerLevel.NOIR,
        levelName: null,
        isICMembershipActive: false,
      })
    } else {
      setState(() => ({
        status: customerRequest.status, // Pending
        error: undefined,
        totalPoints: 0,
        isICMember: false,
        level: CustomerLevel.NOIR,
        levelName: null,
        isICMembershipActive: false,
      }))
    }
  }, [customerRequest.status, customerRequest.value, customerRequest.error])

  return useMemo(
    () => ({
      ...state,
      reload: customerRequest.execute,
    }),
    [state]
  )
}
