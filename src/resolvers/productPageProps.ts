import { GetServerSidePropsContext } from 'next'
// import { parse } from 'node-html-parser'
import resolvePageProps from '../modules/resolve-page-props'
import loadProduct from '../lib/load-product'
import loadCollection from '../lib/load-collection'
// import removeNewLineCharacters from '../modules/remove-new-line-characters'
import { Product, ProductType } from '../modules/normalize-product'

export type ProductDescription = {
  title: string
  content: string
}

export type ProductPageProps = {
  productId: string
  product: Product
  // recommendedProducts: null | Array<Product>
  potentialProducts: null | Array<Product>
  productDescription: ProductDescription
}

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId, { limit: 6, ordering: 'published_at_shop' }).then(
    (collection) => (collection.products.length ? collection.products : null),
    () => null
  )

const loadPotentialProducts = (productType: ProductType): Promise<Product[] | null> => {
  if (productType === 'Bath Bomb') return loadCollectionProducts(262384648270)
  if (productType === 'Jewel Candle') return loadCollectionProducts(262384681038)
  if (productType === 'Sugar Scrub') return loadCollectionProducts(262384746574)
  if (productType.startsWith('Bundle')) return loadCollectionProducts(262384713806)
  return Promise.resolve(null)
}

// const getProductDescription = async (product: Product): Promise<ProductDescription[] | null> => {
//   if (!product || !product.body_html) {
//     return null
//   }

//   const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))
//   return trArr
//     .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
//     .map((el: HTMLElement) => ({
//       title: el.querySelectorAll('td')[0].innerText.trim(),
//       content: removeNewLineCharacters(el.querySelectorAll('td')[1].innerText).replace('&amp;', ''),
//     }))
// }

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
      // recommendedProducts: loadCollectionProducts(RECOMMENDED_PRODUCTS_COLLECTION_ID),
      potentialProducts: productPromise.then((product) => loadPotentialProducts(product.type)),
      // productDescription: productPromise.then((product) => getProductDescription(product)).catch(() => null),
    }
  })
}

export default productPageProps
