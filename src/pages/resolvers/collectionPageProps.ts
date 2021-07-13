import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'


const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

export default function collectionPageProps<PropsType>(): (
  context: GetServerSidePropsContext
) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    collectionProducts: loadCollectionProducts(+context.query.id),
  }))
}
