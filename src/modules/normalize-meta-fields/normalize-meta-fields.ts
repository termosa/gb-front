export type ServerMetaField = {
  id: 19541795635290
  namespace: 'style' | 'data'
  key: string
  value: 'Regular'
  value_type: 'string'
  description: null | 'string'
  owner_id: number
  created_at: string // Like '2021-07-27T01:25:02-07:00'
  updated_at: string // Like '2021-07-27T01:25:02-07:00'
  owner_resource: 'collection' | 'product'
  admin_graphql_api_id: string // Like 'gid://shopify/Metafield/19541795635290'
}

export type ServerMetaFields = {
  metafields: Array<ServerMetaField>
}

export type MetaFields = {
  [namespace: string]: {
    [key: string]: string
  }
}

export const normalizeMetaFields = (serverMetaFields: ServerMetaFields): MetaFields =>
  serverMetaFields.metafields.reduce<MetaFields>(
    (metaFields, serverMetaField) => ({
      ...metaFields,
      [serverMetaField.namespace]: {
        ...(serverMetaField.namespace in metaFields && metaFields[serverMetaField.namespace]),
        [serverMetaField.key]: serverMetaField.value,
      },
    }),
    {}
  )
