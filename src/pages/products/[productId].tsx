import React, { useEffect } from 'react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentialProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'
import MainPageLayout from '../../lib/main-page-layout'
import YotpoReviews from '../../lib/yotpo-reviews'
import SiteSection from '../../components/site-section'
import klaviyo from '../../lib/klaviyo'
import window from '../../lib/window'
import formatPrice from '../../modules/format-price'

export default function ProductPage({ product }: ProductPageProps): React.ReactElement {
  if (!product) throw new Error('Product not found')

  useEffect(() =>
    klaviyo('trackViewedItem', {
      Title: product.title,
      ItemId: product.product_id,
      ...(product.image && { ImageUrl: product.image.src }),
      Url: `${window?.location.origin || ''}/products/${product.handle}`,
      Metadata: {
        ...(product.variants[0] && { Price: formatPrice(product.variants[0].actual_price) }),
        ...(product.variants[0]?.compare_at_price && {
          CompareAtPrice: formatPrice(product.variants[0].compare_at_price),
        }),
        Brand: product.vendor,
      },
    })
  )

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
