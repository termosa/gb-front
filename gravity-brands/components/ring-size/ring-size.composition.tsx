import React from 'react'
import { RingSize } from './ring-size'

export const BasicRingSize = () => (
    <RingSize
        variants={[
            {
                title: '6',
                variant_id: 1,
                position: 2,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 67,
            },
            {
                title: '5',
                variant_id: 2,
                position: 1,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 0,
            },
            {
                title: '7',
                variant_id: 3,
                position: 3,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 99,
            },
            {
                title: '8',
                variant_id: 4,
                position: 4,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 3,
            },
            {
                title: '9',
                variant_id: 5,
                position: 5,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 36,
            },
            {
                title: '10',
                variant_id: 6,
                position: 6,
                actual_price: 12.50,
                compare_at_price: 10.50,
                inventory_quantity: 0,
            },
        ]}
    />
)
