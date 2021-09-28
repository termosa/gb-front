import React, { useContext } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '../../modules/product-context'
import useYotpo from '../use-yotpo'

export type YotpoStarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function YotpoStarRating({ className, style, productId, onClick }: YotpoStarRatingProps): React.ReactElement {
  const product = useContext(ProductContext)
  useYotpo([productId || product?.product_id])
  return (
    <div
      className={cn(className, 'yotpo', 'bottomLine', 'yotpo-small')}
      style={style}
      data-product-id={productId || product?.product_id}
      onClick={onClick}
    />
  )
}
