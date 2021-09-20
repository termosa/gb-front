import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '../modules/resolve-page-props'
import loadCollection, { Product } from '../lib/load-collection'
import loadProduct from '../lib/load-product'
import loadMembershipProductForSubscriptionProduct from '../lib/load-membership-product-for-subscription-product'
import { INNER_CIRCLE_PRODUCT_ID, TRENDING_PRODUCTS_COLLECTION_ID } from '../settings/ids'

export const loadTrendingProducts = (): Promise<Product[] | null> =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => (collection.products.length ? collection.products : null),
    () => null
  )

export type HomePageProps = {
  trendingProducts: null | Array<Product>
  innerCircleSubscriptionProduct: null | Product
  innerCircleMembershipProduct: null | Product
}

export default function homePageProps(): (context: GetServerSidePropsContext) => Promise<{ props: HomePageProps }> {
  return resolvePageProps(() => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleSubscriptionProduct: loadProduct(INNER_CIRCLE_PRODUCT_ID).catch(() => null),
    innerCircleMembershipProduct: loadMembershipProductForSubscriptionProduct(INNER_CIRCLE_PRODUCT_ID).catch(
      () => null
    ),
  }))
}
