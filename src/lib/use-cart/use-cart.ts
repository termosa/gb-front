import { useCallback, useEffect, useMemo } from 'react'
import useDefer, { Status } from 'use-defer'
import loadCart, { CartItem } from '../load-cart'
import createGlobalStateHook from '../create-global-state-hook'
import addItemToCart from '../add-item-to-cart'

export type { Status } from 'use-defer'
export type { CartItem } from '../load-cart'

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
  reload: () => Promise<void>
  addItem: (variantId: number, quantity?: number) => Promise<void>
}

export function useCart(useData = true): CartHookResult {
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

  const reload = useCallback(() => cartRequest.execute().then(() => {}), [cartRequest.execute])
  const addItem = useCallback((variantId, quantity = 1) => addItemToCart(variantId, quantity).then(reload), [])

  return useMemo(
    () => ({
      ...state,
      reload,
      addItem,
    }),
    [state, reload, addItem]
  )
}
