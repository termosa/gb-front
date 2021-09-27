export type ServerCartItem = {
  id: number
  quantity: number
  variant_id: number
  properties: Record<string, unknown> | null
  key: string
  title: string
  price: number
  line_price: number
  original_price: number
  discounted_price: number
  original_line_price: number
  total_discount: number
  discounts: Array<string>
  line_level_discount_allocations: Array<{
    amount: number
    discount_application: {
      type: 'script' | string
      key: string
      title: string
      description: null | string
      value: string
      created_at: string
      value_type: 'fixed_amount' | string
      allocation_method: 'one' | string
      target_selection: 'explicit' | string
      target_type: 'line_item' | string
      total_allocated_amount: number
    }
  }>
  line_level_total_discount: number
  final_price: number
  final_line_price: number
  sku: null | string
  grams: number
  vendor: 'Shopify' | string
  taxable: boolean
  product_id: number
  product_has_only_default_variant: boolean
  gift_card: boolean
  url: string
  featured_image: {
    url: string
    aspect_ratio: number
    alt: string
    height: number
    width: number
  }
  image: string
  handle: string
  requires_shipping: boolean
  product_title: string
  product_description: string
  product_type: string
  variant_title: string
  variant_options: Array<string>
  options_with_values: Array<{
    name: string
    value: string
  }>
}

export type CartItemProperties = {
  discount?: number // Range between 0-1
  shipping_discount?: number // Range between 0-1
  create_bt_subscription?: boolean
  subscription_product_id?: number // variantId
}

export type CartItem = {
  key: string
  productId: number
  variantId: number
  quantity: number
  title: string
  properties: CartItemProperties
  price: number
  totalPrice: number
}

export function normalizeCartItem(item: ServerCartItem): CartItem {
  return {
    key: item.key,
    productId: item.id,
    variantId: item.variant_id,
    quantity: item.quantity,
    title: item.title,
    properties: item.properties || {},
    price: item.price / 100,
    totalPrice: item.line_price / 100,
  }
}
