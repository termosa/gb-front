import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import { loadCollection as loadCollectionRequest } from '@fragrantjewels/gravity-brands.modules.load-collection'

const RECOMMENDED_PRODUCTS_COLLECTION_ID = 173959905370
const POTENTIAL_PRODUCTS_COLLECTION_ID = 174027145306

const loadCollection = (collectionId: number) =>
  loadCollectionRequest(collectionId).then(
    (collection) => collection.products,
    () => null
  )

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    product: loadProduct(Number(context.query.id), context.query.base_url?.toString()).catch(() => null),
    recommendedProducts: loadCollection(RECOMMENDED_PRODUCTS_COLLECTION_ID),
    potentialProducts: loadCollection(POTENTIAL_PRODUCTS_COLLECTION_ID),
  }))
}

export default productPageProps
