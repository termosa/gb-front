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
    const collectionPromise = loadCollection(+context.query.collectionId)
    return {
      collection: collectionPromise.catch(() => null),
      builderContent: collectionPromise
        .then((collection) => loadModelTemplate('collection', collection.template))
        .catch((error) => (console.error(error), null)),
    }
  })
}
