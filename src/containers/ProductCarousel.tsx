import React, { useEffect, useState } from 'react'
import { Collection, loadCollection } from '../../gravity-brands/modules/load-collection'
import { ProductsCarousel } from '../../gravity-brands/components/products-carousel'

type ProductCarouselProps = {
  collectionId: number
  title: string
  subTitle?: string
}

const ProductCarouselContainer: React.FC<ProductCarouselProps> = ({ collectionId, title, subTitle }) => {
  const [collection, setCollection] = useState<Collection>()

  useEffect(() => {
    loadCollection(collectionId)
      .then((res) => setCollection(res))
      .catch((e) => console.log(e))
  }, [])

  return collection?.products ? (
    <ProductsCarousel
      products={collection?.products}
      title={title}
      subTitle={subTitle}
      onSelectProduct={(product) => {
        console.log(product)
      }}
    />
  ) : null
}

export default ProductCarouselContainer
