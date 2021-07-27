import { GetServerSidePropsContext } from 'next'
import resolvePageProps from '@fragrantjewels/gravity-brands.modules.resolve-page-props'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import loadCollection, { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import { POTENTIAL_PRODUCTS_COLLECTION_ID, RECOMMENDED_PRODUCTS_COLLECTION_ID } from 'src/settings/ids'
import { parse } from 'node-html-parser'

export type ProductDescription = {
  title: string
  content: string
}

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

const getProductDescription = async (context: GetServerSidePropsContext): Promise<ProductDescription[] | null> => {
  const product = await loadProduct(Number(context.query.id)).catch(() => null)
  const formatText = (str: string) => {
    return str
      .trim()
      .replace('&amp;', '')
      .replace(/[\r\n]{3,}/g, '\n\n')
  }

  if (!product || !product.body_html) {
    return null
  }

  const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))
  return trArr
    .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
    .map((el: HTMLElement) => ({
      title: el.querySelectorAll('td')[0].innerText.trim(),
      content: formatText(el.querySelectorAll('td')[1].innerText),
    }))
}

function productPageProps<PropsType>(): (context: GetServerSidePropsContext) => Promise<{ props: PropsType }> {
  return resolvePageProps((context) => ({
    product: loadProduct(Number(context.query.id)).catch(() => null),
    recommendedProducts: loadCollectionProducts(RECOMMENDED_PRODUCTS_COLLECTION_ID),
    potentialProducts: loadCollectionProducts(POTENTIAL_PRODUCTS_COLLECTION_ID),
    productDescription: getProductDescription(context),
  }))
}

export default productPageProps
