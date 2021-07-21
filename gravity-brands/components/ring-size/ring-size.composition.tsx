import React from 'react'
import { RingSize } from './ring-size'

export const BasicRingSize = (): React.ReactElement => (
  <RingSize
    onChange={(variant) => alert(`Selected variant "${variant.title}"`)}
    variants={[
      {
        title: '5',
        variant_id: 2,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: false,
        product_id: 1,
      },
      {
        title: '6',
        variant_id: 1,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: true,
        product_id: 1,
      },
      {
        title: '7',
        variant_id: 3,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: true,
        product_id: 1,
      },
      {
        title: '8',
        variant_id: 4,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: true,
        product_id: 1,
      },
      {
        title: '9',
        variant_id: 5,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: true,
        product_id: 1,
      },
      {
        title: '10',
        variant_id: 6,
        actual_price: 12.5,
        compare_at_price: 10.5,
        available: false,
        product_id: 1,
      },
    ]}
  />
)
