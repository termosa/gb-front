import normalizeCart, { ServerCart, Cart } from '../normalize-cart'
import shopifyApi from '../shopify-api'

export type { Cart, CartItem } from '../normalize-cart'

export function loadCart(): Promise<Cart> {
  return shopifyApi<ServerCart>({ path: '/cart.js' }).then(normalizeCart)
}
