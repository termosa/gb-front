import React from 'react'
import { ShopByProductsOverview } from './shop-by-products-overview'
import PresentationCanvas from 'gravity-brands/helpers/presentation-canvas'

export const BasicShopByProductsOverview = () => (
  <PresentationCanvas>
    <ShopByProductsOverview
      products={[
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'CANDLES',
        },
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'BODY SCRUBS',
        },
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'BUNDLES',
        },
      ]}
    />
  </PresentationCanvas>
)