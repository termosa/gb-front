import api from '@fragrantjewels/gravity-brands.modules.api'
import normalizeMetaFields, {
  MetaFields,
  ServerMetaFields,
} from '@fragrantjewels/gravity-brands.modules.normalize-meta-fields'

export const loadCollectionMetaFields = (collectionId: number): Promise<MetaFields> =>
  api<ServerMetaFields>({ path: `/inventory/collections/${collectionId}/metafields` }).then(normalizeMetaFields)
