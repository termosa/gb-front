import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import { loadTrendingProducts } from './homePageProps'

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    product: loadProduct(Number(context.query.id), context.query.base_url?.toString()).catch(() => null),
    recommendedProducts: loadTrendingProducts(context.query.base_url?.toString()),
  }))
}

export default productPageProps
