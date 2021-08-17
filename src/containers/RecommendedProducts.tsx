import React, { useEffect, useState } from 'react'
import ProductsCarousel from '../components/products-carousel'
import loadCollection from '../lib/load-collection'
import { Product as ProductType } from '../lib/load-product'
import { RECOMMENDED_PRODUCTS_COLLECTION_ID } from '../settings/ids'

const RecommendedProducts = (): null | React.ReactElement => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([])

  useEffect(() => {
    loadCollection(RECOMMENDED_PRODUCTS_COLLECTION_ID).then((collection) => setRecommendedProducts(collection.products))
  }, [])

  if (!recommendedProducts?.length) return null

  return (
    <section className="app-h-products-section">
      <ProductsCarousel
        title="Recommended for you"
        products={recommendedProducts}
        onSelectProduct={(productId: number) => (location.href = `/products/${productId}`)}
      />
    </section>
  )
}

export default RecommendedProducts
