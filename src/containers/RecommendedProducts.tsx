import React, { useEffect, useState } from 'react'
import { Product as ProductType } from '../../gravity-brands/modules/normalize-product'
import { loadCollection } from '../../gravity-brands/modules/load-collection'
import { RECOMMENDED_PRODUCTS_COLLECTION_ID } from '../settings/ids'
import { ProductsCarousel } from '@fragrantjewels/gravity-brands.components.products-carousel/products-carousel'

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
