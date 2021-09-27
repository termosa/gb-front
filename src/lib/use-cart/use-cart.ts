import { useEffect, useMemo } from 'react'
import useDefer, { Status } from 'use-defer'
import loadCart, { CartItem } from '../load-cart'
import createGlobalStateHook from '../create-global-state-hook'
import addCartItem from '../add-cart-item'
import addCartItemWithSubscription, { VariantSize } from '../add-cart-item-with-subscription'

export { Status } from 'use-defer'
export type { Cart, CartItem } from '../load-cart'

type CartState = {
  status: Status
  token: undefined | string
  items: Array<CartItem>
  itemCount: number
  totalPrice: number
  error: undefined | string
}

const useGlobalState = createGlobalStateHook<CartState>({
  status: Status.IDLE,
  token: undefined,
  items: [],
  itemCount: 0,
  totalPrice: 0,
  error: undefined,
})

export type CartHookResult = {
  status: Status
  token: undefined | string
  items: Array<CartItem>
  itemCount: number
  totalPrice: number
  error: undefined | string
  hasSubscriptionProduct: boolean
  reload: () => Promise<void>
  addItem: (variantId: number, quantity?: number) => Promise<void>
  addItemWithSubscription: (
    variantId: number,
    subscriptionProductSize: VariantSize | undefined,
    quantity?: number
  ) => Promise<void>
}

export function useCart(useData = false): CartHookResult {
  const [state, setState] = useGlobalState()

  const cartRequest = useDefer(() => (useData ? loadCart() : undefined), [useData], [])

  useEffect(() => {
    if (!useData) return
    if (cartRequest.status === Status.SUCCESS) {
      setState((prevState) => ({
        ...prevState,
        status: Status.SUCCESS,
        token: cartRequest.value?.token,
        items: cartRequest.value?.items || [],
        itemCount: cartRequest.value?.itemCount || 0,
        totalPrice: cartRequest.value?.totalPrice || 0,
        error: undefined,
      }))
    } else if (cartRequest.status === Status.ERROR) {
      setState({
        status: Status.ERROR,
        token: undefined,
        items: [],
        itemCount: 0,
        totalPrice: 0,
        error: cartRequest.error?.toString(),
      })
    } else {
      setState(({ token }) => ({
        status: cartRequest.status, // Pending
        token,
        items: [],
        itemCount: 0,
        totalPrice: 0,
        error: undefined,
      }))
    }
  }, [cartRequest.status, cartRequest.value, cartRequest.error])

  return useMemo(() => {
    const reload = () => cartRequest.execute().then(() => /*mute response*/ undefined)
    const addItem = (variantId: number, quantity = 1) => addCartItem(variantId, quantity).then(reload)
    const addItemWithSubscription = (
      variantId: number,
      subscriptionProductSize: VariantSize | undefined,
      quantity = 1
    ) => addCartItemWithSubscription(variantId, subscriptionProductSize, quantity).then(reload)
    const hasSubscriptionProduct = !!state.items.some((item) => item.properties.subscription_product_id)
    return {
      ...state,
      hasSubscriptionProduct,
      reload,
      addItem,
      addItemWithSubscription,
    }
  }, [state, cartRequest.execute])
}
