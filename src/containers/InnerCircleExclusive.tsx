import React, { useEffect, useState } from 'react'
import loadProduct, { Product } from '@fragrantjewels/gravity-brands.modules.load-product'
import { InnerCircleExclusive } from '@fragrantjewels/gravity-brands.components.inner-circle-exclusive'

type InnerCircleExclusiveProps = {
  productId: number
  frontImage: string
  sideImage: string
}

const InnerCircleExclusiveContainer = ({
  productId,
  frontImage,
  sideImage,
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
      frontImage={frontImage}
      sideImage={sideImage}
      onReserve={(variant) => {
        console.log(variant)
      }}
    />
  ) : null
}

export default InnerCircleExclusiveContainer