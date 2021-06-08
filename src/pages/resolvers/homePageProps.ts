import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'

const TRENDING_PRODUCTS_COLLECTION_ID = 174027178074

const loadTrendingProducts = () =>
  loadCollection(TRENDING_PRODUCTS_COLLECTION_ID).then(
    (collection) => collection.products,
    () => [] as Product[]
  )

export default function homePageProps<PropsType>(): () => Promise<{ props: PropsType }> {
  return resolvePageProps(() => ({
    trendingProducts: loadTrendingProducts(),
  }))
}
