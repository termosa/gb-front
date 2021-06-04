import React from 'react'
import { ShopByProductsOverview, ProductDetails } from './shop-by-products-overview'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

const mockProducts: Array<ProductDetails> = [
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg', product_id: 1 },
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg', product_id: 2 },
  { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg', product_id: 3 },
]

export const BasicShopByProductsOverview = () => (
  <PresentationCanvas>
    <ShopByProductsOverview products={mockProducts} />
  </PresentationCanvas>
)
