import React, { useEffect, useState } from 'react'
import loadProduct, { Product } from '../modules/load-product'
import InnerCircleExclusive from '../components/inner-circle-exclusive'
import addItemToCart from 'src/lib/add-item-to-cart'

type InnerCircleExclusiveProps = {
  productId: number
  slideImages: { slide: string }[]
  title: string
  subTitle: string
  topButtonText: string
  buttonLink: string
}

const InnerCircleExclusiveContainer = ({
  productId,
  slideImages,
  title,
  subTitle,
  topButtonText,
  buttonLink,
}: InnerCircleExclusiveProps): React.ReactElement | null => {
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    loadProduct(productId)
      .then((res) => setProduct(res))
      .catch((e) => console.log(e))
  }, [])

  return product ? (
    <InnerCircleExclusive
      product={product}
      title={title}
      buttonLink={buttonLink}
      slideImages={slideImages.map((s) => s.slide)}
      subTitle={subTitle}
      topButtonText={topButtonText}
      onReserve={(variant) => {
        addItemToCart(variant.variant_id)
      }}
    />
  ) : null
}

export default InnerCircleExclusiveContainer
