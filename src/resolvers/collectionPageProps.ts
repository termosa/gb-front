import { GetServerSidePropsContext } from 'next'
import resolvePageProps from 'gravity-brands/modules/resolve-page-props'
import loadCollection, { Collection } from 'gravity-brands/modules/load-collection'
import loadModelTemplate, { ModelTemplate } from 'src/builder/load-model-template'
import loadCollectionMetaFields from 'gravity-brands/modules/load-collection-meta-fields'

export type CollectionPageProps = {
  collection: null | Collection
  builderContent: null | ModelTemplate
}

export default function collectionPageProps<PropsType>(): (
  context: GetServerSidePropsContext
) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => {
    const collectionId = +context.query.collectionId
    if (!collectionId) throw new Error('Collection id is not valid')

    return {
      collection: loadCollection(collectionId).catch(() => null),
      builderContent: loadCollectionMetaFields(collectionId)
        .then((metaFields) => loadModelTemplate('Collection', metaFields.style?.template))
        .catch(() => null),
    }
  })
}
