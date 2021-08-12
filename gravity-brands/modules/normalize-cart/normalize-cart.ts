import { normalizeProduct, Product, ServerProduct } from 'gravity-brands/modules/normalize-product'

export type ServerCart = {
  currency: string
  item_count: number
  items: ServerProduct[]
  items_subtotal_price: number
  note: string | null
  original_total_price: number
  requires_shipping: boolean
  token: string
  total_discount: number
  total_price: number
  total_weight: number
}

export type Cart = {
  items: Product[]
  itemsSubtotalPrice: number
  originalTotalPrice: number
  token: string
  totalDiscount: number
  totalPrice: number
  totalWeight: number
}

export const normalizeCart = (cart: ServerCart): Cart => ({
  items: cart.items.map(normalizeProduct),
  itemsSubtotalPrice: cart.items_subtotal_price,
  originalTotalPrice: cart.original_total_price,
  token: cart.token,
  totalDiscount: cart.total_discount,
  totalPrice: cart.total_price,
  totalWeight: cart.total_weight,
})
