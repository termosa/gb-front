import { GetServerSidePropsContext } from 'next'
import { parse } from 'node-html-parser'
import resolvePageProps from '../modules/resolve-page-props'
import loadProduct from '../lib/load-product'
import loadCollection from '../lib/load-collection'
import removeNewLineCharacters from '../modules/remove-new-line-characters'
import { Product } from '../modules/normalize-product'
import { POTENTIAL_PRODUCTS_COLLECTION_ID, RECOMMENDED_PRODUCTS_COLLECTION_ID } from '../settings/ids'
import loadModelTemplate, { ModelTemplate } from '../builder/load-model-template'

export type ProductDescription = {
  title: string
  content: string
}

export type ProductPageProps = {
  product: Product
  recommendedProducts: Array<Product>
  potentialProducts: Array<Product>
  productDescription: ProductDescription
  builderContent: null | ModelTemplate
}

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

const getProductDescription = async (product: Product): Promise<ProductDescription[] | null> => {
  if (!product || !product.body_html) {
    return null
  }

  const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))
  return trArr
    .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
    .map((el: HTMLElement) => ({
      title: el.querySelectorAll('td')[0].innerText.trim(),
      content: removeNewLineCharacters(el.querySelectorAll('td')[1].innerText).replace('&amp;', ''),
    }))
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
      product: productPromise.catch(() => null),
      recommendedProducts: loadCollectionProducts(RECOMMENDED_PRODUCTS_COLLECTION_ID),
      potentialProducts: loadCollectionProducts(POTENTIAL_PRODUCTS_COLLECTION_ID),
      productDescription: productPromise.then((product) => getProductDescription(product)).catch(() => null),
      builderContent: productPromise
        .then((product) => loadModelTemplate('Product', product.template))
        .catch(() => null),
    }
  })
}

export default productPageProps
