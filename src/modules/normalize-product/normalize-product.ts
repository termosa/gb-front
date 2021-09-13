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

export type ServerProduct = {
  product_id: number
  title: string
  body_html: string
  vendor: string
  handle: string // like-a-slug
  product_type: 'Bundle (Candle + Bath Bomb)' | 'Jewel Candle' | string
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
  reviews_average: number
  reviews_count: number
}

export type Product = {
  product_id: number
  handle: string
  title: string
  image?: ProductImage
  images?: Array<ProductImage>
  variants: Array<ProductVariant>
  product_type: string
  published_at_shop: string
  body_html?: string
  tags?: Array<string>
  fragrance?: string
  material?: string
  color?: string
  template: string
  reviewsAverage: number
  reviewsCount: number
}

const selectValueFromTags = (tags: Array<string>, prefix: string) =>
  tags
    .find((tag) => tag.toLowerCase().startsWith(prefix.toLowerCase()))
    ?.slice(prefix.length)
    .trim()

export const normalizeProduct = (product: ServerProduct): Product => {
  const tags = product.tags.length ? product.tags.split(',').map((tag) => tag.trim()) : []
  const tagsProperties = {
    fragrance: selectValueFromTags(tags, 'fragrance:'),
    material: selectValueFromTags(tags, 'material:'),
    color: selectValueFromTags(tags, 'metal color:'),
    template: selectValueFromTags(tags, 'template:'),
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
    product_type: product.product_type,
    published_at_shop: product.published_at_shop,
    reviewsAverage: +product.reviews_average || 0,
    reviewsCount: product.reviews_count,
    body_html: product.body_html,
    ...(tags.length && { tags }),
    ...(tagsProperties.fragrance && { fragrance: tagsProperties.fragrance }),
    ...(tagsProperties.material && { material: tagsProperties.material }),
    ...(tagsProperties.color && { color: tagsProperties.color }),
    template: tagsProperties.template || 'Default',
  }
}
