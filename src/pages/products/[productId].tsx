import React from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentianProducts'
import RecommendedProducts from '../../containers/RecommendedProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'

export default function ProductPage({ product }: ProductPageProps): React.ReactElement {
  if (!product) throw new Error('Product not found')

  return (
    <ProductContext.Provider value={product}>
      <MainPageLayout>
        <Product />
        <FjWild
          title="FJ in the wild"
          textFirstPart="See our products in action on"
          textSecondPart="customers just like you."
        />
        <RecommendedProducts title="Recommended" titleHighlighted="for you" collectionId={57957515342} />
        <PotentialProducts />
        <SiteSection>
          <YotpoReviews />
        </SiteSection>
      </MainPageLayout>
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
