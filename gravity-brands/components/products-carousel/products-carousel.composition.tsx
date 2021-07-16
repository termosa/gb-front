import React from 'react'
import { ProductsCarousel } from './products-carousel'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicProductsCarousel = (): React.ReactElement => (
  <PresentationCanvas>
    <ProductsCarousel
      title={''}
      onSelectProduct={() => null}
      products={[
        {
          product_id: 1618339446,
          product_type: '',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Cleopatra',
              available: true,
            },
          ],
          title: 'Cleopatra',
          front_image: {
            alt: '',
            src: 'https://cdn.shopify.com/s/files/1/1356/7945/products/cleopatra_bundle_comp.png?v=1618339446',
          },
          created_at_shop: '',
          published_at_shop: '',
          tags: '',
        },
        {
          product_id: 10419939918,
          product_type: '',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Relax',
              available: true,
            },
          ],
          title: 'Relax - Candle & Bath Bomb Gift Set',
          front_image: {
            alt: '',
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/pink_champagne_bundle_a843c22c-ed08-4ca8-80d8-40dc892ca757.png?v=1492822021',
          },
          created_at_shop: '',
          published_at_shop: '',
          tags: '',
        },
        {
          product_id: 10419939918,
          product_type: '',
          variants: [
            {
              actual_price: 29.95,
              variant_id: 7945,
              title: 'Unicorn',
              available: true,
            },
          ],
          title: 'Pink Champagne - Candle & Bath Bomb Gift Set',
          front_image: {
            alt: '',
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/pink_champagne_bundle_a843c22c-ed08-4ca8-80d8-40dc892ca757.png?v=1492822021',
          },
          created_at_shop: '',
          published_at_shop: '',
          tags: '',
        },
        {
          product_id: 10419921743,
          product_type: '',
          variants: [
            {
              actual_price: 39.95,
              variant_id: 7945,
              title: 'Unicorn',
              available: true,
            },
          ],
          title: 'Unicorn Tears - Candle and Bath Bomb Gift Set',
          front_image: {
            alt: '',
            src:
              'https://cdn.shopify.com/s/files/1/1356/7945/products/Unicorn_Tears_relaunch_Bundle_Comp_3eb3e0a2-8b20-4c1d-9bf3-3d07230e7484.png?v=1592829644',
          },
          created_at_shop: '',
          published_at_shop: '',
          tags: '',
        },
      ]}
    />
  </PresentationCanvas>
)
