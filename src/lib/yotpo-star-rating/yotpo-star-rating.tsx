import React, { useContext, useRef } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '../../modules/product-context'
import useYotpo from '../use-yotpo'

export type YotpoStarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function YotpoStarRating({
  className,
  style,
  productId,
  onClick,
}: YotpoStarRatingProps): null | React.ReactElement {
  const product = useContext(ProductContext)
  useYotpo([productId || product?.product_id])
  const blockRef = useRef<HTMLDivElement>(null)
  if (blockRef.current) {
    // If that ID stays with the element it removes HTML content when scrolling the page (don't know why)
    delete blockRef.current.dataset.yotpoElementId
  }
  if (!productId && !product) return null
  return (
    <div
      ref={blockRef}
      className={cn(className, 'yotpo', 'bottomLine', 'yotpo-small')}
      style={style}
      data-product-id={productId || product?.product_id}
      onClick={onClick}
    />
  )
}
