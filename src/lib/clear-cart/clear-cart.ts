import shopifyApi from '../shopify-api'
import normalizeCart, { Cart, ServerCart } from '../normalize-cart'

export function clearCart(): Promise<Cart> {
  return shopifyApi<ServerCart>({
    path: '/cart/clear.js',
    method: 'POST',
  }).then(normalizeCart)
}
