import normalizeCartItem, { CartItem, ServerCartItem } from '../normalize-cart-item'

export type { CartItem } from '../normalize-cart-item'

export type ServerCart = {
  currency: string
  item_count: number
  items: Array<ServerCartItem>
  items_subtotal_price: number
  note: string | null
  original_total_price: number
  requires_shipping: boolean
  token: string
  total_discount: number
  total_price: number
  total_weight: number
  attributes: Record<string, unknown>
  cart_level_discount_applications: Array<{
    type: string
    key: string
    title: string
    description: null | string
    value: string
    created_at: string
    value_type: string
    allocation_method: string
    target_selection: string
    target_type: string
    total_allocated_amount: number
  }>
}

export type Cart = {
  token: string
  items: Array<CartItem>
  itemCount: number
  totalPrice: number
}

export const normalizeCart = (cart: ServerCart): Cart => ({
  token: cart.token,
  items: cart.items.map(normalizeCartItem),
  itemCount: cart.item_count,
  totalPrice: cart.total_price / 100,
})
