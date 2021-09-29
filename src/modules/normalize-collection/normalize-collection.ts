import normalizeProduct, { ServerProduct, Product } from '../normalize-product'

export type { Product } from '../normalize-product'

export type ServerCollection = {
  collection_id: number
  title: string
  handle: string // like-a-slug
  updated_at_shop: string // Example: '2020-04-03T06:38:45-07:00'
  published_at_shop: null | string // Example: '2020-04-03T06:38:45-07:00'
  sort_order: string
  template_suffix: null | string
  published_scope: 'global' | 'web' | string
  body_html: null | string
  admin_graphql_api_id: string
  products: Array<ServerProduct>
  template: null | string
}

export type Collection = {
  collection_id: number
  title: string
  handle: string
  products: Array<Product>
  template: string
  htmlDescription: null | string
}

export const normalizeCollection = (collection: ServerCollection): Collection => ({
  collection_id: collection.collection_id,
  title: collection.title,
  handle: collection.handle,
  products: collection.products.map(normalizeProduct),
  template: collection.template || 'Default',
  htmlDescription: collection.body_html || null,
})
