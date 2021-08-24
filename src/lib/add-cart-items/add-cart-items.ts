import shopifyApi from '../shopify-api'
import normalizeCartItem, { CartItem, ServerCartItem, CartItemProperties } from '../normalize-cart-item'

export type { CartItem, CartItemProperties } from '../normalize-cart-item'

export function addCartItems(
  patch: Array<{ variantId: number; quantity?: number; properties?: CartItemProperties }>
): Promise<Array<CartItem>> {
  return shopifyApi<{ items: Array<ServerCartItem> }>({
    path: '/cart/add.js',
    method: 'POST',
    body: {
      items: patch.map((item) => ({
        id: item.variantId,
        quantity: item.quantity || 1,
        ...(item.properties && { properties: item.properties }),
      })),
    },
  }).then(({ items }) => items.map(normalizeCartItem))
}
