import React from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import Product from '../../containers/Product'
import FjWild from '../../components/fj-wild'
import ProductsCarousel from '../../components/products-carousel'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'
import trackViewedProduct from '../../lib/track-viewed-product'
import RemotePage from '../../lib/remote-page'
import navigate from '../../lib/navigate'
import LazyLoad from '../../lib/lazy-load'

export default function ProductPage({ product, productId, potentialProducts }: ProductPageProps): React.ReactElement {
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
        {potentialProducts && (
          <SiteSection>
            <ProductsCarousel
              title="More you might like"
              products={potentialProducts}
              onSelectProduct={(product) => navigate(`/products/${product.handle}`)}
            />
          </SiteSection>
        )}
        <LazyLoad threshold={1000}>
          <SiteSection>
            <YotpoReviews />
          </SiteSection>
        </LazyLoad>
      </MainPageLayout>
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
