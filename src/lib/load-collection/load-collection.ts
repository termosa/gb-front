import api from '../../modules/api'
import normalizeCollection, { ServerCollection, Collection } from '../../modules/normalize-collection'

export type { Collection, Product } from '../../modules/normalize-collection'

export type GetCollectionQuery = {
  limit?: number
  product_type?: string
  search?: string
  ordering?:
    | 'product_id'
    | 'title'
    | 'vendor'
    | 'handle'
    | 'product_type'
    | 'created_at_shop'
    | 'updated_at_shop'
    | 'published_at_shop'
    | 'admin_graphql_api_id'
    | 'reviews_average'
    | 'reviews_count'
}

export function loadCollection(collectionIdOrHandle: number | string, query?: GetCollectionQuery): Promise<Collection> {
  return api<ServerCollection>({ path: `/inventory/collections/${collectionIdOrHandle}`, query }).then(
    normalizeCollection
  )
}
