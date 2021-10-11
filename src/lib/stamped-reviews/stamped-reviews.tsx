import React, { useContext, useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '../../modules/product-context'
import createLink from '../create-link'
import initiateStamped from '../initiate-stamped'

export type StampedReviewsProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
  productTitle?: string
  productUrl?: string
  productImageUrl?: string
}

export function StampedReviews({
  className,
  style,
  productId,
  productTitle,
  productUrl,
  productImageUrl,
}: StampedReviewsProps): null | React.ReactElement {
  const product = useContext(ProductContext)

  useEffect(() => {
    initiateStamped().then(() => window?.StampedFn?.reloadUGC())
  }, [product, productId, productTitle, productUrl, productImageUrl])

  const identifier = productId || product?.handle
  if (!identifier) return null

  return (
    <div
      className={cn(className)}
      style={style}
      id="stamped-main-widget"
      data-product-id={productId || product?.product_id}
      data-name={productTitle || product?.title}
      data-url={productUrl || createLink.forProduct(identifier)}
      data-image-url={productImageUrl || product?.image?.src}
      // data-description="##product.description##"
      // data-product-sku="##product.handle##"
    />
  )
}
