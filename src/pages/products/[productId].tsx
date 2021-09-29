import React, { useMemo } from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import Product from '../../containers/Product'
import ProductsCarousel from '../../components/products-carousel'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'
import trackViewedProduct from '../../lib/track-viewed-product'
import RemotePage from '../../lib/remote-page'
import navigate from '../../lib/navigate'
import Head from 'next/head'
import LazyLoad from '../../lib/lazy-load'
import YotpoProductGallery from '../../lib/yotpo-product-gallery'
import createLink from '../../lib/create-link'
import FjWild from '../../components/fj-wild'
import parseProductDetails from '../../lib/parse-product-details'

export default function ProductPage({ product, productId, potentialProducts }: ProductPageProps): React.ReactElement {
  const productDescription = useMemo<string>(() => {
    if (!product) return ''
    const details = parseProductDetails(product)
    return (details.find((detail) => detail.title === 'Overview') || details[0])?.content || ''
  }, [product])

  if (!product) return <RemotePage url={createLink.forProduct(productId)} />

  trackViewedProduct(product)

  return (
    <>
      <Head>
        <title>{product.title} - Fragrant Jewels</title>
        <meta name="description" content={productDescription.slice(0, 320) || product.title} />
      </Head>
      <ProductContext.Provider value={product}>
        <MainPageLayout>
          <Product />
          <div>
            <FjWild
              title="FJ in the wild"
              textFirstPart="See our products in action on"
              textSecondPart="customers just like you."
            />
            <LazyLoad threshold={1000}>
              <YotpoProductGallery galleryId="5d12193001f0950007b69682" productId={product.product_id} />
            </LazyLoad>
          </div>
          {potentialProducts && (
            <SiteSection>
              <ProductsCarousel
                title="More you might like"
                products={potentialProducts}
                onSelectProduct={(product) => navigate(createLink.forProduct(product.handle))}
              />
            </SiteSection>
          )}
          <div className="product-yotpo-reviews-section">
            <LazyLoad threshold={1000} placeholder={<div style={{ height: 300 }} />}>
              <SiteSection>
                <YotpoReviews />
              </SiteSection>
            </LazyLoad>
          </div>
        </MainPageLayout>
      </ProductContext.Provider>
    </>
  )
}

export const getServerSideProps = productPageProps()
