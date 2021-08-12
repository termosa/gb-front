import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import { INNER_CIRCLE_PRODUCT_ID, TRENDING_PRODUCTS_COLLECTION_ID } from 'src/settings/ids'
import loadCustomer, { Customer } from '@fragrantjewels/gravity-brands.modules.load-customer'
import loadModelTemplate, { ModelTemplate } from 'src/builder/load-model-template'

export const loadTrendingProducts = (): Promise<Product[] | null> =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => null
  )

const loadInnerCircleProduct = (id: string) => loadProduct(id ? Number(id) : INNER_CIRCLE_PRODUCT_ID).catch(() => null)

export type HomePageProps = {
  trendingProducts: null | Array<Product>
  innerCircleProduct: null | Product
  activeCustomer: null | Customer
  builderContent: ModelTemplate
}

export default function homePageProps(): (context: GetServerSidePropsContext) => Promise<{ props: HomePageProps }> {
  return resolvePageProps((context) => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleProduct: loadInnerCircleProduct(context?.query?.id?.toString()),
    activeCustomer: loadCustomer().catch(() => null),
    builderContent: loadModelTemplate('Home').catch(() => null),
  }))
}
