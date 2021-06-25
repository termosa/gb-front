import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    product: loadProduct(Number(context.query.id), context.query.base_url?.toString()).catch(() => null),
  }))
}

export default productPageProps
