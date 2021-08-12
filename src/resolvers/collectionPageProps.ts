import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Collection } from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadModelTemplate, { ModelTemplate } from 'src/builder/load-model-template'

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

    const collectionPromise = loadCollection(+collectionId)

    return {
      collection: collectionPromise.catch(() => null),
      builderContent: collectionPromise
        .then((collection) => loadModelTemplate('Collection', collection.template))
        .catch(() => null),
    }
  })
}
