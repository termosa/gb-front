export type ServerProductImage = {
  id: number
  src: string
  alt: null | string
  width: number
  height: number
  position: number // order number when displaying
  created_at: string // Example: '2020-04-03T06:38:48-07:00'
  updated_at: string // Example: '2020-04-03T06:38:48-07:00'
  variant_ids: Array<number>
  admin_graphql_api_id: string // Example: 'gid://shopify/ProductImage/14932314685530'
}

export type ProductImage = {
  id: number
  src: string
  alt?: string
  width: number
  height: number
}

export const normalizeProductImage = (image: ServerProductImage): ProductImage => ({
  id: image.id,
  src: image.src,
  alt: image.alt || undefined,
  width: image.width,
  height: image.height,
})
