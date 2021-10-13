import React, { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'node-html-parser'
import { useRouter } from 'next/router'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import Product from '../../containers/Product'
import ProductsCarousel from '../../components/products-carousel'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import SiteSection from '../../components/site-section'
import trackViewedProduct from '../../lib/track-viewed-product'
import RemotePage from '../../lib/remote-page'
import LazyLoad from '../../lib/lazy-load'
import createLink from '../../lib/create-link'
import StampedReviews from '../../lib/stamped-reviews'

export default function ProductPage({ product, productId, potentialProducts }: ProductPageProps): React.ReactElement {
  const router = useRouter()
  const productDescription = useMemo(() => {
    if (!product) return ''
    return (product.body_html && parse(product.body_html).innerText.trim().replace(/\s+/g, ' ')) || ''
  }, [product])

  if (!product) return <RemotePage url={`/products/${productId}`} />

  trackViewedProduct(product)

  return (
    <>
      <Head>
        <title>{product.title} - Fragrant Jewels</title>
        <meta name="description" content={productDescription.slice(0, 320) || product.title} />
      </Head>
      <MainPageLayout>
        <ProductContext.Provider value={product}>
          <Product />
          {potentialProducts && (
            <SiteSection>
              <ProductsCarousel
                title="More you might like"
                products={potentialProducts}
                onSelectProduct={(product) => router.push(createLink.forProduct(product.handle))}
              />
            </SiteSection>
          )}
          <LazyLoad threshold={1000} placeholder={<div style={{ height: 300 }} />}>
            <SiteSection>
              <StampedReviews />
            </SiteSection>
          </LazyLoad>
        </ProductContext.Provider>
      </MainPageLayout>
    </>
  )
}

export const getServerSideProps = productPageProps()
