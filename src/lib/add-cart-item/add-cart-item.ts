import addCartItems, { CartItem } from '../add-cart-items'

export function addCartItem(variantId: number, quantity = 1): Promise<CartItem> {
  return addCartItems([{ variantId, quantity }]).then((updatedItems) => {
    if (!updatedItems.length) throw new Error('Response is missing updated item')
    return updatedItems[0]
  })
}
