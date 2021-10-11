import React, { useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import initiateStamped from '../initiate-stamped'
import window from '../window'

export type StampedStarRatingProps = {
  productId: number
  className?: ClassName
  style?: React.CSSProperties
}

export function StampedStarRating({ productId, className, style }: StampedStarRatingProps): null | React.ReactElement {
  useEffect(() => {
    initiateStamped().then(() => window?.StampedFn?.reloadUGC())
  }, [productId])

  return (
    <span
      data-id={productId}
      className={cn(className, 'stamped-product-reviews-badge', 'stamped-main-badge')}
      style={style}
    />
  )
}
