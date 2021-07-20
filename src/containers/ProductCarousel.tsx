import React, { useEffect, useState } from 'react'
import { Collection, loadCollection } from '@fragrantjewels/gravity-brands.modules.load-collection'
import { ProductsCarousel } from '@fragrantjewels/gravity-brands.components.products-carousel'

type ProductCarouselProps = {
  collectionId: number
  title: string
  subTitle?: string
}

const ProductCarouselContainer = ({
  collectionId,
  title,
  subTitle,
}: ProductCarouselProps): React.ReactElement | null => {
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
