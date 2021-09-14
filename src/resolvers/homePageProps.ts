import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '../modules/resolve-page-props'
import loadCollection, { Product } from '../lib/load-collection'
import loadProduct from '../lib/load-product'
import { INNER_CIRCLE_PRODUCT_ID, TRENDING_PRODUCTS_COLLECTION_ID } from '../settings/ids'

export const loadTrendingProducts = (): Promise<Product[] | null> =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => null
  )

const loadInnerCircleProduct = (id: string) => loadProduct(id ? Number(id) : INNER_CIRCLE_PRODUCT_ID).catch(() => null)

export type HomePageProps = {
  trendingProducts: null | Array<Product>
  innerCircleProduct: null | Product
}

export default function homePageProps(): (context: GetServerSidePropsContext) => Promise<{ props: HomePageProps }> {
  return resolvePageProps((context) => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleProduct: loadInnerCircleProduct(context?.query?.id?.toString()),
  }))
}
