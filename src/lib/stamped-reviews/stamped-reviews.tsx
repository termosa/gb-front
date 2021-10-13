import React, { useContext, useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '../../modules/product-context'
import createLink from '../create-link'
import initiateStamped from '../initiate-stamped'
import styled from 'styled-components'

const SReviews = styled.div`
  min-height: 300px;

  ::after {
    content: 'Loading reviews' !important;
    margin-bottom: 0;
    font-size: 20px;
    color: gray;
    text-align: center;
    display: block !important;
    height: 30px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    margin-top: -60px;
  }

  .stamped-container {
    background: #fff;
  }
`

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
    <SReviews
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
