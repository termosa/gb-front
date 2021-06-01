import React from 'react'
import { ShopByProductsOverview } from './shop-by-products-overview'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'
import { ShopByProductCardProps } from '@fragrantjewels/gravity-brands.components.shop-by-product-card'

const mockProducts: Array<ShopByProductCardProps> = [
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg' },
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg' },
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg' },
]

export const BasicShopByProductsOverview = () => (
  <PresentationCanvas>
    <ShopByProductsOverview products={mockProducts} />
  </PresentationCanvas>
)
