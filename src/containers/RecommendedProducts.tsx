import navigate from '../lib/navigate'
import React, { useContext, useEffect, useState } from 'react'
import ProductsCarousel from '../components/products-carousel'
import loadCollection from '../lib/load-collection'
import { Product as ProductType } from '../lib/load-product'
import { RECOMMENDED_PRODUCTS_COLLECTION_ID } from '../settings/ids'
import ProductContext from '../modules/product-context'

export type RecommendedProductsProps = {
  title: string
  collectionId?: number
}

const RecommendedProducts = ({ title, collectionId }: RecommendedProductsProps): null | React.ReactElement => {
  const product = useContext<ProductType | undefined>(ProductContext)
  const [recommendedProducts, setRecommendedProducts] = useState<ProductType[]>([])

  useEffect(() => {
    loadCollection(collectionId || RECOMMENDED_PRODUCTS_COLLECTION_ID, {
      limit: 6,
      productType: collectionId ? product?.product_type : '',
    }).then((collection) => setRecommendedProducts(collection.products))
  }, [])

  if (!recommendedProducts?.length) return null

  return (
    <section className="app-h-products-section">
      <ProductsCarousel
        title={title}
        products={recommendedProducts}
        onSelectProduct={(product) => navigate(`/products/${product.product_id}`)}
      />
    </section>
  )
}

export default RecommendedProducts
