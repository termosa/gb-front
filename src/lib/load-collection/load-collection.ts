import api from '../../modules/api'
import normalizeCollection, { ServerCollection, Collection } from '../../modules/normalize-collection'

export type { Collection, Product } from '../../modules/normalize-collection'

export type GetCollectionQuery = {
  productType?: string
  limit?: number
}

export function loadCollection(collectionIdOrHandle: number | string, query?: GetCollectionQuery): Promise<Collection> {
  return api<ServerCollection>({ path: `/inventory/collections/${collectionIdOrHandle}`, query }).then(
    normalizeCollection
  )
}
