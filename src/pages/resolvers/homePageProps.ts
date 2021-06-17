import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'

const TRENDING_PRODUCTS_COLLECTION_ID = 174027178074

const loadTrendingProducts = () =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => null
  )

const INNER_CIRCLE_PRODUCT_ID = 10419937998 // 10419930702

const loadInnerCircleProduct = () =>
  loadProduct(INNER_CIRCLE_PRODUCT_ID).catch(() => null)

export default function homePageProps<PropsType>(): () => Promise<{ props: PropsType }> {
  return resolvePageProps(() => ({
    trendingProducts: loadTrendingProducts(),
    innerCircleProduct: loadInnerCircleProduct(),
  }))
}
