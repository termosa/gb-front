import React from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentialProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'
import trackViewedItem from 'src/lib/track-viewed-item'

export default function ProductPage({ product }: ProductPageProps): React.ReactElement {
  if (!product) throw new Error('Product not found')

  trackViewedItem(product)

  return (
    <ProductContext.Provider value={product}>
      <MainPageLayout>
        <Product />
        <FjWild
          title="FJ in the wild"
          textFirstPart="See our products in action on"
          textSecondPart="customers just like you."
        />
        <PotentialProducts />
        <SiteSection>
          <YotpoReviews />
        </SiteSection>
      </MainPageLayout>
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
