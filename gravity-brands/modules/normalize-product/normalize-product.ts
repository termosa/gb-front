import normalizeProductVariant, {
  ServerProductVariant,
  ProductVariant,
} from '@fragrantjewels/gravity-brands.modules.normalize-product-variant'
import normalizeProductImage, {
  ServerProductImage,
  ProductImage,
} from '@fragrantjewels/gravity-brands.modules.normalize-product-image'

export type { ProductVariant } from '@fragrantjewels/gravity-brands.modules.normalize-product-variant'
export type { ProductImage } from '@fragrantjewels/gravity-brands.modules.normalize-product-image'

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
}

export type Product = {
  product_id: number
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
}

const selectValueFromTags = (tags: Array<string>, prefix: string) =>
  tags
    .find((tag) => tag.toLowerCase().startsWith(prefix.toLowerCase()))
    ?.slice(prefix.length)
    .trim()

export const normalizeProduct = (product: ServerProduct): Product => {
  const allTags = product.tags.length ? product.tags.split(',').map((tag) => tag.trim()) : []
  const tags = allTags.filter((tag) => !~tag.indexOf(':'))
  const tagsProperties = {
    fragrance: selectValueFromTags(allTags, 'fragrance:'),
    material: selectValueFromTags(allTags, 'material:'),
    color: selectValueFromTags(allTags, 'metal color:'),
  }

  return {
    product_id: product.product_id,
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
    body_html: product.body_html,
    ...(tags.length && { tags }),
    ...(tagsProperties.fragrance && { fragrance: selectValueFromTags(allTags, 'fragrance:') }),
    ...(tagsProperties.material && { material: selectValueFromTags(allTags, 'material:') }),
    ...(tagsProperties.color && { color: selectValueFromTags(allTags, 'metal color:') }),
  }
}
