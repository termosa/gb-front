import api from 'gravity-brands/modules/api'
import normalizeCollection, { ServerCollection, Collection } from 'gravity-brands/modules/normalize-collection'

export type { Collection, Product } from 'gravity-brands/modules/normalize-collection'

export const loadCollection = (collectionId: number): Promise<Collection> =>
  api<ServerCollection>({ path: `/inventory/collections/${collectionId}` }).then(normalizeCollection)
