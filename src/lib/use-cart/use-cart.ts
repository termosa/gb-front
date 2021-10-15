import { useEffect, useMemo } from 'react'
import useDefer, { Status } from 'use-defer'
import loadCart, { Cart, CartItem } from '../load-cart'
import createGlobalStateHook from '../create-global-state-hook'
import addCartItem from '../add-cart-item'
import addCartItemWithSubscription, { VariantSize } from '../add-cart-item-with-subscription'

export { Status } from 'use-defer'
export type { Cart, CartItem } from '../load-cart'

const useLoadPromise = createGlobalStateHook<Promise<Cart> | null>(null)

export type CartHookResult = {
  status: Status
  token: undefined | string
  items: Array<CartItem>
  itemCount: number
  totalPrice: number
  error: undefined | string
  hasSubscriptionProduct: boolean
  reload: () => Promise<Cart>
  addItem: (variantId: number, quantity?: number) => Promise<void>
  addItemWithSubscription: (
    variantId: number,
    subscriptionProductSize: VariantSize | undefined,
    quantity?: number
  ) => Promise<void>
}

export function useCart(requireData = false): CartHookResult {
  const [loadPromise, setLoadPromise] = useLoadPromise()

  const reload = () => {
    const request = loadCart()
    setLoadPromise(request)
    return request
  }

  const cartRequest = useDefer(() => loadPromise, [loadPromise], [])

  useEffect(() => {
    if (!requireData) return
    if (loadPromise) cartRequest.execute()
    else reload()
  }, [requireData])

  return useMemo(() => {
    const addItem = (variantId: number, quantity = 1) =>
      addCartItem(variantId, quantity)
        .then(reload)
        .then(() => undefined)

    const addItemWithSubscription = (
      variantId: number,
      subscriptionProductSize: VariantSize | undefined,
      quantity = 1
    ) =>
      addCartItemWithSubscription(variantId, subscriptionProductSize, quantity)
        .then(reload)
        .then(() => undefined)

    const hasSubscriptionProduct = !!cartRequest.value?.items.some((item) => item.properties.subscription_product_id)
    return {
      status: cartRequest.status,
      token: cartRequest.value?.token,
      items: cartRequest.value?.items || [],
      itemCount: cartRequest.value?.itemCount || 0,
      totalPrice: cartRequest.value?.totalPrice || 0,
      error: cartRequest.error?.toString(),
      hasSubscriptionProduct,
      reload,
      addItem,
      addItemWithSubscription,
    }
  }, [cartRequest])
}
