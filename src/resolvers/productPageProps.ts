import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct, { Product } from '@fragrantjewels/gravity-brands.modules.load-product'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import removeNewLineCharacters from '@fragrantjewels/gravity-brands.modules.remove-new-line-characters'
import { POTENTIAL_PRODUCTS_COLLECTION_ID, RECOMMENDED_PRODUCTS_COLLECTION_ID } from 'src/settings/ids'
import loadModelTemplate, { ModelTemplate } from 'src/builder/load-model-template'
import { parse } from 'node-html-parser'

export type ProductDescription = {
  title: string
  content: string
}

export type ProductPageProps = {
  product: Product
  recommendedProducts: Array<Product>
  potentialProducts: Array<Product>
  productDescription: ProductDescription
  builderContent: ModelTemplate
}

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

const getProductDescription = async (context: GetServerSidePropsContext): Promise<ProductDescription[] | null> => {
  const product = await loadProduct(Number(context.query.id)).catch(() => null)

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
    const productPromise = loadProduct(+context.query.productId)
    return {
      product: productPromise.catch(() => null),
      recommendedProducts: loadCollectionProducts(RECOMMENDED_PRODUCTS_COLLECTION_ID),
      potentialProducts: loadCollectionProducts(POTENTIAL_PRODUCTS_COLLECTION_ID),
      productDescription: getProductDescription(context),
      builderContent: productPromise
        .then((product) => loadModelTemplate('product', product.template))
        .catch((error) => (console.error(error), null)),
    }
  })
}

export default productPageProps
