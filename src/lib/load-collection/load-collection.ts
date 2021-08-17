import api from '../../modules/api'
import normalizeCollection, { ServerCollection, Collection } from '../../modules/normalize-collection'

export type { Collection, Product } from '../../modules/normalize-collection'

export function loadCollection(collectionIdOrHandle: number | string): Promise<Collection> {
  return api<ServerCollection>({ path: `/inventory/collections/${collectionIdOrHandle}` }).then(normalizeCollection)
}
