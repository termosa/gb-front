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
  title: string
  front_image?: {
    src: string
    alt?: string
  }
  variants: Array<Variant>
}

export type Collection = {
  collection_id: number
  title: string
  products: Array<Product>
}

export const loadCollection = (collectionId: number): Promise<Collection> =>
  api<Collection>({ path: `/inventory/collections/${collectionId}` })
