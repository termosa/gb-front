import api from '../api'
import normalizeCollection, { ServerCollection, Collection } from '../normalize-collection'

export type { Collection, Product } from '../normalize-collection'

export const loadCollection = (collectionId: number): Promise<Collection> =>
  api<ServerCollection>({ path: `/inventory/collections/${collectionId}` }).then(normalizeCollection)
