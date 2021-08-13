import React, { useEffect, useState } from 'react'
import { ProductsCarousel } from '../components/products-carousel'
import { Product as ProductType } from '../modules/normalize-product'
import { loadCollection } from '../modules/load-collection'
import { POTENTIAL_PRODUCTS_COLLECTION_ID } from '../settings/ids'

const PotentialProducts = (): null | React.ReactElement => {
  const [potentialProducts, setPotentialProducts] = useState<ProductType[]>([])

  useEffect(() => {
    loadCollection(POTENTIAL_PRODUCTS_COLLECTION_ID).then((collection) => setPotentialProducts(collection.products))
  }, [])

  if (!potentialProducts?.length) return null

  return (
    <section className="app-h-section app-h-products-section">
      <ProductsCarousel
        title="More you might like"
        products={potentialProducts}
        onSelectProduct={(productId) => (location.href = `/products/${productId}`)}
      />
    </section>
  )
}

export default PotentialProducts
