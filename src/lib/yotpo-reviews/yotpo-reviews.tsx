import React, { useContext } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useYotpo from '../use-yotpo'
import ProductContext from '../../modules/product-context'
import createLink from '../create-link'

export type YotpoReviewsProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
  productTitle?: string
  productUrl?: string
  productImageUrl?: string
}

export function YotpoReviews({
  className,
  style,
  productId,
  productTitle,
  productUrl,
  productImageUrl,
}: YotpoReviewsProps): null | React.ReactElement {
  const product = useContext(ProductContext)
  useYotpo([product, productId, productTitle, productUrl, productImageUrl])
  if (!productId && !product) return null
  return (
    <div
      className={cn(className, 'yotpo', 'yotpo-main-widget')}
      style={style}
      data-product-id={productId || product?.product_id}
      data-name={productTitle || product?.title}
      data-url={productUrl || createLink.forProduct(product?.handle || productId)}
      data-image-url={productImageUrl || product?.image?.src}
    />
  )
}
