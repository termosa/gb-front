import useDefer from 'use-defer'
import http from '../../modules/http'
import baseSiteUrl from '../../modules/base-site-url'

export type Cart = {
  items: Array<{
    id: number
  }>
}

const loadCart = (): Promise<Cart> => http({ url: `${baseSiteUrl()}/cart.js` }).then((r) => r.json())

export function useCart() {
  return useDefer(() => loadCart().catch(() => null), [], [])
}
