import React, { useContext } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '../../modules/product-context'
import useYotpo from '../use-yotpo'

export type YotpoStarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
}

export function YotpoStarRating({ className, style, productId }: YotpoStarRatingProps): React.ReactElement {
  const product = useContext(ProductContext)
  useYotpo([product, productId])
  console.log(3333333333355555, style)
  return (
    <div
      className={cn(className, 'yotpo', 'bottomLine')}
      style={style}
      data-product-id={productId || product?.product_id}
    />
  )
}
