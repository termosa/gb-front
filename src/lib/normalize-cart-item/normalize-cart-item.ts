export type ServerCartItem = {
  id: number
  quantity: number
  variant_id: number
  key: string
  title: string
  price: number
  line_price: number
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

export type CartItem = {
  productId: number
  quantity: number
  title: string
}

export function normalizeCartItem({ id, quantity, title }: ServerCartItem): CartItem {
  return {
    productId: id,
    quantity,
    title,
  }
}
