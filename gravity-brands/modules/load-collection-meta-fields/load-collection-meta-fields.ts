import api from 'gravity-brands/modules/api'
import normalizeMetaFields, { MetaFields, ServerMetaFields } from 'gravity-brands/modules/normalize-meta-fields'

export const loadCollectionMetaFields = (collectionId: number): Promise<MetaFields> =>
  api<ServerMetaFields>({ path: `/inventory/collections/${collectionId}/metafields` }).then(normalizeMetaFields)
