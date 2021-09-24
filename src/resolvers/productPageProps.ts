import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '../modules/resolve-page-props'
import loadProduct from '../lib/load-product'
import loadCollection from '../lib/load-collection'
import { Product, ProductType } from '../modules/normalize-product'

export type ProductDescription = {
  title: string
  content: string
}

export type ProductPageProps = {
  productId: string
  product: Product
  potentialProducts: null | Array<Product>
  productDescription: ProductDescription
}

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId, { limit: 6, ordering: 'created_at_shop' }).then((collection) =>
    collection.products.length ? collection.products : null
  )

const loadPotentialProducts = (productType: ProductType): Promise<Product[] | null> => {
  if (productType === 'Bath Bomb') return loadCollectionProducts(262384648270)
  if (productType === 'Jewel Candle') return loadCollectionProducts(262384681038)
  if (productType === 'Sugar Scrub') return loadCollectionProducts(262384746574)
  if (productType.startsWith('Bundle')) return loadCollectionProducts(262384713806)
  return Promise.resolve(null)
}

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => {
    const productId =
      context.query.productId instanceof Array
        ? context.query.productId.find((id) => id.trim())
        : context.query.productId
    if (!productId) throw new Error('Product id missing')

    const productPromise = loadProduct(productId)
    return {
      productId: Promise.resolve(productId),
      product: productPromise.catch(() => null),
      potentialProducts: productPromise.then((product) => loadPotentialProducts(product.type)).catch(() => null),
    }
  })
}

export default productPageProps
