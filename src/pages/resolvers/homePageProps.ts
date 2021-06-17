import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'

const TRENDING_PRODUCTS_COLLECTION_ID = 174027178074

const loadTrendingProducts = (baseApiUrl?: string) =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID, baseApiUrl).then(
    (collection) => collection.products,
    () => null
  )

const INNER_CIRCLE_PRODUCT_ID = 10419937998 // 10419930702

const loadInnerCircleProduct = (id: string, baseApiUrl?: string) =>
  loadProduct(id ? Number(id) : INNER_CIRCLE_PRODUCT_ID, baseApiUrl).catch(() => null)

export default function homePageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps(context => ({
    trendingProducts: loadTrendingProducts(context.query.base_url?.toString()),
    innerCircleProduct: loadInnerCircleProduct(context?.query?.id?.toString(), context.query.base_url?.toString()),
  }))
}
