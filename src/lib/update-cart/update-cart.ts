import shopifyApi from '../shopify-api'
import normalizeCart, { Cart, ServerCart } from '../normalize-cart'

export type CartPatch = {
  note?: string
  attributes?: Record<string, unknown>
  updates?: { [cartItemKey: string]: number }
}

export function updateCart(patch: CartPatch): Promise<Cart> {
  return shopifyApi<ServerCart>({
    path: '/cart/update.js',
    method: 'POST',
    body: patch,
  }).then(normalizeCart)
}
