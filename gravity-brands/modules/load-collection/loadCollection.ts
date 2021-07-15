import api from '@fragrantjewels/gravity-brands.modules.api'

export type Variant = {
  variant_id: number
  title: string
  actual_price: number
  compare_at_price: number
  available: boolean
  sku?: string
  product: number
}

export type Product = {
  product_id: number
  product_type: string
  front_image?: {
    src: string
    alt?: string
  }
  side_images?: Array<{
    src: string
    alt: string
  }>
  title: string
  variants: Array<{
    actual_price: number
    variant_id: number
    title: string
    available: boolean
  }>
  created_at_shop: string
  published_at_shop: string | null
  tags: string
}

export type Collection = {
  collection_id: number
  title: string
  products: Array<Product>
}

export const loadCollection = (collectionId: number): Promise<Collection> =>
  api<Collection>({ path: `/inventory/collections/${collectionId}` })
