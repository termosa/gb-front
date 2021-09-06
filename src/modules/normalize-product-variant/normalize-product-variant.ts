export type VariantSize = 5 | 6 | 7 | 8 | 9 | 10

export type ServerProductVariant = {
  variant_id: number
  product: number // product ID
  title: string // size name
  position: number // order number when displaying
  actual_price: number
  compare_at_price: number | null
  available: boolean
  sku: string | null
  inventory_quantity: number
  old_inventory_quantity: number
  inventory_policy: 'deny' | 'continue' | string
  fulfillment_service: 'manual' | string
  inventory_management: 'shopify' | string | null
  image_id: number | null
  requires_shipping: boolean
  created_at_shop: string // Example: '2020-04-03T06:38:46-07:00'
  updated_at_shop: string // Example: '2021-01-06T05:17:21-08:00'
  grams: number
  weight: number
  weight_unit: 'lb'
  admin_graphql_api_id: string // Example: 'gid://shopify/ProductVariant/32055548477530'
}

export type ProductVariant = {
  variant_id: number
  product_id: number
  title: string
  size: VariantSize | null
  actual_price: number
  compare_at_price?: number
  available: boolean
}

const parseVariantSize = (variant: ServerProductVariant): VariantSize | null => {
  const parsedTitle = parseInt(variant.title)
  if ([5, 6, 7, 8, 9, 10].includes(parsedTitle)) return parsedTitle as VariantSize
  return null
}

export const normalizeProductVariant = (variant: ServerProductVariant): ProductVariant => ({
  variant_id: variant.variant_id,
  product_id: variant.product,
  title: variant.title,
  size: parseVariantSize(variant),
  actual_price: variant.actual_price,
  ...(variant.compare_at_price !== null && { compare_at_price: variant.compare_at_price }),
  available: variant.available,
})
