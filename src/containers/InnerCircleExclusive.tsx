import React from 'react'
import useDefer from 'use-defer'
import loadProduct from '../lib/load-product'
import InnerCircleExclusive from '../components/inner-circle-exclusive'
import addCartItem from '../lib/add-cart-item'
import navigate from '../lib/navigate'
import loadMembershipProductForSubscriptionProduct from '../lib/load-membership-product-for-subscription-product'
import trackAddedToCart from '../lib/track-added-to-cart'

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
  const subscriptionProductRequest = useDefer(() => loadProduct(productId), [], [])
  const membershipProductRequest = useDefer(() => loadMembershipProductForSubscriptionProduct(productId), [], [])

  if (!subscriptionProductRequest.value || !membershipProductRequest.value) return null

  return (
    <InnerCircleExclusive
      membershipProductVariants={membershipProductRequest.value.variants}
      product={subscriptionProductRequest.value}
      title={title}
      buttonLink={buttonLink}
      slideImages={slideImages.map((s) => s.slide)}
      subTitle={subTitle}
      topButtonText={topButtonText}
      onReserve={(variant) => {
        const product = subscriptionProductRequest.value
        addCartItem(variant.variant_id)
          .then(() => product && trackAddedToCart(product))
          .then(() => navigate('/cart'))
      }}
    />
  )
}

export default InnerCircleExclusiveContainer
