import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'

const TRENDING_PRODUCTS_COLLECTION_ID = 160593838170

export const loadTrendingProducts = (): Promise<Product[] | null> =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => {
      console.error(`ERR: Could not load collection #${TRENDING_PRODUCTS_COLLECTION_ID}`)
      return null
    }
  )

const INNER_CIRCLE_PRODUCT_ID = 6549708636250 // 10419930702

const loadInnerCircleProduct = (id: string) =>
  loadProduct(id ? Number(id) : INNER_CIRCLE_PRODUCT_ID).catch(() => {
    console.error(`ERR: Could not load product #${id || INNER_CIRCLE_PRODUCT_ID}`)
    return null
  })

export default function homePageProps<PropsType>(): (
  context: GetServerSidePropsContext
) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleProduct: loadInnerCircleProduct(context?.query?.id?.toString()),
  }))
}
