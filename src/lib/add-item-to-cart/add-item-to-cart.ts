import shopifyApi from '../shopify-api'

export function addItemToCart(variantId: number, quantity = 1): Promise<void> {
  return shopifyApi({
    path: '/cart/add.js',
    method: 'POST',
    body: {
      items: [{ id: variantId, quantity }],
    },
  }).then(() => {})
}
