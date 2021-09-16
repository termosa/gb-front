import React from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentialProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'
import trackViewedProduct from '../../lib/track-viewed-product'
import RemotePage from '../../lib/remote-page'

export default function ProductPage({ product, productId }: ProductPageProps): React.ReactElement {
  if (!product) return <RemotePage url={`//www.fragrantjewels.com/products/${productId}`} />

  trackViewedProduct(product)

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
