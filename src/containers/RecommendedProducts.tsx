import React, { useEffect, useState } from 'react'
import { Product as ProductType } from '@fragrantjewels/gravity-brands.modules.load-product'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import ProductsCarousel from '@fragrantjewels/gravity-brands.components.products-carousel'
import { RECOMMENDED_PRODUCTS_COLLECTION_ID } from '../settings/ids'

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([])

  useEffect(() => {
    loadCollection(RECOMMENDED_PRODUCTS_COLLECTION_ID).then((collection) => setRecommendedProducts(collection.products))
  }, [])

  return (
    <section className="app-h-products-section">
      {recommendedProducts?.length && (
        <ProductsCarousel
          title="Recommended for you"
          products={recommendedProducts}
          onSelectProduct={(productId: number) =>
            (location.href = `/product?id=${productId}&${
              location.search.match(/(?:\?|&)(base_url=[^&]+)(?:&|$)/)?.[1] || ''
            }`)
          }
        />
      )}
    </section>
  )
}

export default RecommendedProducts
