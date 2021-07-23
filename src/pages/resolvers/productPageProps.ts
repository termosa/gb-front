import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import { POTENTIAL_PRODUCTS_COLLECTION_ID, RECOMMENDED_PRODUCTS_COLLECTION_ID } from 'src/settings/ids'

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    product: loadProduct(Number(context.query.id)).catch(() => null),
    recommendedProducts: loadCollectionProducts(RECOMMENDED_PRODUCTS_COLLECTION_ID),
    potentialProducts: loadCollectionProducts(POTENTIAL_PRODUCTS_COLLECTION_ID),
  }))
}

export default productPageProps
