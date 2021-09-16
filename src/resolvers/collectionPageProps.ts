import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '../modules/resolve-page-props'
import loadCollection, { Collection } from '../lib/load-collection'

export type CollectionPageProps = {
  collectionId: string
  collection: null | Collection
}

export default function collectionPageProps<PropsType>(): (
  context: GetServerSidePropsContext
) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => {
    const collectionId =
      context.query.collectionId instanceof Array
        ? context.query.collectionId.find((id) => id.trim())
        : context.query.collectionId
    if (!collectionId) throw new Error('Collection id is missing')

    const collectionPromise = loadCollection(collectionId)

    return {
      collectionId: Promise.resolve(collectionId),
      collection: collectionPromise.catch(() => null),
    }
  })
}
