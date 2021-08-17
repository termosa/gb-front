import api from '../api'
import normalizeMetaFields, { MetaFields, ServerMetaFields } from '../normalize-meta-fields'

export const loadCollectionMetaFields = (collectionId: number): Promise<MetaFields> =>
  api<ServerMetaFields>({ path: `/inventory/collections/${collectionId}/metafields` }).then(normalizeMetaFields)
