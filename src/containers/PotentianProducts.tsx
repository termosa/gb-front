import React, { useEffect, useState } from 'react'
import { Product as ProductType } from '@fragrantjewels/gravity-brands.modules.normalize-product'
import { loadCollection } from '@fragrantjewels/gravity-brands.modules.load-collection'
import { POTENTIAL_PRODUCTS_COLLECTION_ID } from '../settings/ids'
import { ProductsCarousel } from '@fragrantjewels/gravity-brands.components.products-carousel'

const PotentialProducts = (): React.ReactElement => {
  const [potentialProducts, setPotentialProducts] = useState<ProductType[]>([])

  useEffect(() => {
    loadCollection(POTENTIAL_PRODUCTS_COLLECTION_ID).then((collection) => setPotentialProducts(collection.products))
  }, [])

  return (
    <section className="app-h-section app-h-products-section">
      {potentialProducts?.length && (
        <ProductsCarousel
          title="More you might like"
          products={potentialProducts}
          onSelectProduct={(productId) =>
            (location.href = `/product?id=${productId}&${
              location.search.match(/(?:\?|&)(base_url=[^&]+)(?:&|$)/)?.[1] || ''
            }`)
          }
        />
      )}
    </section>
  )
}

export default PotentialProducts
