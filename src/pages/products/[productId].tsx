import React from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentianProducts'
import RecommendedProducts from '../../containers/RecommendedProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'
import Frame from '../../lib/frame'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from 'src/components/site-section'

export default function ProductPage({ product }: ProductPageProps): React.ReactElement {
  if (!product) throw new Error('Product not found')

  return (
    <ProductContext.Provider value={product}>
      <Frame
        frames={{
          component: MainPageLayout,
          children: [
            { component: Product },
            {
              component: FjWild,
              props: {
                title: 'FJ in the wild',
                textFirstPart: 'See our products in action on',
                textSecondPart: 'customers just like you.',
              },
            },
            {
              component: RecommendedProducts,
              props: { title: 'Recommended', titleHighlighted: 'for you', collectionId: 57957515342 },
            },
            { component: PotentialProducts },
            { component: SiteSection, children: { component: YotpoReviews } },
          ],
        }}
      />
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
