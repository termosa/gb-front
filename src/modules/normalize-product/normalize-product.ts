import normalizeProductVariant, { ServerProductVariant, ProductVariant } from '../normalize-product-variant'
import normalizeProductImage, { ServerProductImage, ProductImage } from '../normalize-product-image'

export type { ProductVariant } from '../normalize-product-variant'
export type { ProductImage } from '../normalize-product-image'

export type ServerProductOption = {
  id: number
  product_id: number
  name: string // Example: 'Size' | 'Ring Size'
  position: number // order number when displaying
  values: Array<string>
}

export type ProductType =
  | string
  | 'Bath Bomb'
  | 'Jewel Candle'
  | 'Sugar Scrub'
  | 'Bundle (2 Bath Bombs)'
  | 'Bundle (Candle + Bath Bomb)'
  | 'Bundle (3 Bath Bombs)'
  | 'Bundle (Bath Bomb + Body Scrub + Body Spray)'

export type ServerProduct = {
  product_id: number
  title: string
  body_html: string
  vendor: string
  handle: string // like-a-slug
  product_type: ProductType
  front_image: null | ServerProductImage
  side_images: null | Array<ServerProductImage>
  variants: Array<ServerProductVariant>
  published_scope: 'global' | 'web' | string
  template_suffix: null | string
  created_at_shop: string // Example: '2020-04-03T06:38:45-07:00'
  updated_at_shop: string // Example: '2021-07-15T09:49:06-07:00'
  published_at_shop: string // Example: '2020-04-03T06:33:09-07:00', only published are available
  tags: string // comma separated values
  admin_graphql_api_id: string // Example: 'gid://shopify/Product/4619502977114'
  options: null | Array<ServerProductOption>
  collection: Array<number>
  reviews_average: number | null
  reviews_count: number
}

export type Product = {
  product_id: number
  handle: string
  title: string
  image?: ProductImage
  images?: Array<ProductImage>
  variants: Array<ProductVariant>
  type: ProductType
  published_at_shop: string
  body_html?: string
  tags?: Array<string>
  fragrance?: string
  material?: string
  color?: string
  vendor: string
  template: string
  reviewsAverage: number
  reviewsCount: number
  preOrder?: boolean
}

const selectValueFromTags = (tags: Array<string>, prefix: string) =>
  tags
    .find((tag) => tag.toLowerCase().startsWith(prefix.toLowerCase()))
    ?.slice(prefix.length)
    .trim()

const hasSterlingSilver = (tags: Array<string>) =>
  tags.some((tag) => tag.toLowerCase().includes('material: 925 sterling silver'))

const hasPreOrder = (tags: Array<string>) => tags.some((tag) => tag.toLowerCase().includes('web: pre-order'))

export const normalizeProduct = (product: ServerProduct): Product => {
  const tags = product.tags.length ? product.tags.split(',').map((tag) => tag.trim()) : []
  const tagsProperties = {
    fragrance: selectValueFromTags(tags, 'fragrance:'),
    material: hasSterlingSilver(tags) ? '925 Sterling Silver' : selectValueFromTags(tags, 'material:'),
    color: selectValueFromTags(tags, 'metal color:'),
    template: selectValueFromTags(tags, 'template:'),
    preOrder: hasPreOrder(tags),
  }

  return {
    product_id: product.product_id,
    handle: product.handle,
    title: product.title,
    ...(product.front_image && { image: normalizeProductImage(product.front_image) }),
    ...(product.side_images?.length && {
      images: product.side_images
        .sort((imageA, imageB) => imageA.position - imageB.position)
        .map(normalizeProductImage),
    }),
    variants: product.variants
      .sort((variantA, variantB) => variantA.position - variantB.position)
      .map(normalizeProductVariant),
    type: product.product_type,
    published_at_shop: product.published_at_shop,
    reviewsAverage: Number(product.reviews_average),
    reviewsCount: product.reviews_count,
    body_html: product.body_html,
    ...(tags.length && { tags }),
    ...(tagsProperties.fragrance && { fragrance: tagsProperties.fragrance }),
    ...(tagsProperties.material && { material: tagsProperties.material }),
    ...(tagsProperties.color && { color: tagsProperties.color }),
    ...(tagsProperties.preOrder && { preOrder: tagsProperties.preOrder }),
    vendor: product.vendor,
    template: tagsProperties.template || 'Default',
  }
}
