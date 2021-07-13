import React from 'react'
import { ShopByProductCard } from './shop-by-product-card'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicShopByProductCard = (): React.ReactElement => (
  <PresentationCanvas>
    <ShopByProductCard
      image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg"
      buttonLink={'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'}
      title={'SHOP NOW'}
    />
  </PresentationCanvas>
)
