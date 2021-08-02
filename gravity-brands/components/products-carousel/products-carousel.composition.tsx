import React from 'react'
import { ProductsCarousel } from './products-carousel'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicProductsCarousel = (): React.ReactElement => (
  <PresentationCanvas>
    <ProductsCarousel
      onSelectProduct={() => null}
      products={[
        {
          product_id: 1618339446,
          title: 'Cleopatra',
          product_type: 'Bundle',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Cleopatra',
              available: true,
              product_id: 1618339446,
            },
          ],
          image: {
            id: 1,
            src: 'https://cdn.shopify.com/s/files/1/1356/7945/products/cleopatra_bundle_comp.png?v=1618339446',
            width: 40,
            height: 40,
          },
          published_at_shop: '',
          template: 'Default',
        },
        {
          product_id: 10419939918,
          title: 'Relax - Candle & Bath Bomb Gift Set',
          product_type: 'Bundle',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Relax',
              available: true,
              product_id: 10419939918,
            },
          ],
          image: {
            id: 2,
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/pink_champagne_bundle_a843c22c-ed08-4ca8-80d8-40dc892ca757.png?v=1492822021',
            width: 40,
            height: 40,
          },
          published_at_shop: '',
          template: 'Default',
        },
        {
          product_id: 10419939918,
          title: 'Pink Champagne - Candle & Bath Bomb Gift Set',
          product_type: 'Bundle',
          variants: [
            {
              actual_price: 29.95,
              variant_id: 7945,
              title: 'Unicorn',
              available: true,
              product_id: 10419939918,
            },
          ],
          image: {
            id: 3,
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/pink_champagne_bundle_a843c22c-ed08-4ca8-80d8-40dc892ca757.png?v=1492822021',
            width: 40,
            height: 40,
          },
          published_at_shop: '',
          template: 'Default',
        },
        {
          product_id: 10419921743,
          title: 'Unicorn Tears - Candle and Bath Bomb Gift Set',
          product_type: 'Bundle',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Unicorn',
              available: true,
              product_id: 10419921743,
            },
          ],
          image: {
            id: 4,
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/Unicorn_Tears_relaunch_Bundle_Comp_3eb3e0a2-8b20-4c1d-9bf3-3d07230e7484.png?v=1592829644',
            width: 40,
            height: 40,
          },
          published_at_shop: '',
          template: 'Default',
        },
      ]}
    />
  </PresentationCanvas>
)
