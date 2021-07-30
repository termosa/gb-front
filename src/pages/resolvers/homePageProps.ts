import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import { INNER_CIRCLE_PRODUCT_ID, TRENDING_PRODUCTS_COLLECTION_ID } from 'src/settings/ids'
import loadActiveCustomer from '@fragrantjewels/gravity-brands.modules.load-active-customer'

export const loadTrendingProducts = (): Promise<Product[] | null> =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => null
  )

const loadInnerCircleProduct = (id: string) => loadProduct(id ? Number(id) : INNER_CIRCLE_PRODUCT_ID).catch(() => null)

export default function homePageProps<PropsType>(): (
  context: GetServerSidePropsContext
) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleProduct: loadInnerCircleProduct(context?.query?.id?.toString()),
    activeCustomer: loadActiveCustomer().catch(() => null),
  }))
}
