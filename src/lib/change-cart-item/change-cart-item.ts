import normalizeCart, { ServerCart, Cart } from '../normalize-cart'
import shopifyApi from '../shopify-api'

export function changeCartItem(
  cartItemKey: string,
  newProperties?: Record<string, unknown>,
  newQuantity?: number
): Promise<Cart> {
  return shopifyApi<ServerCart>({
    path: '/cart/change.js',
    method: 'POST',
    body: {
      id: cartItemKey,
      ...(typeof newQuantity !== 'undefined' && { quantity: newQuantity }),
      ...(newProperties && { properties: newProperties }),
    },
  }).then(normalizeCart)
}
