import React from 'react'
import { render } from '@testing-library/react'
import YotpoReviews from '.'

describe('<YotpoReviews>', () => {
  it('should render with given attributes', () => {
    const { container } = render(
      <YotpoReviews
        productId={68415324184}
        productTitle="Water Lilies"
        productUrl="https://www.fragrantjewels.com/ws30/products/water-lilies-jewel-candle"
        productImageUrl="https://cdn.shopify.com/s/files/1/0548/5721/products/1199626307319709-Gravitybrands-1200x960-ZC-1.01.png?v=1609870978"
      />
    )
    const yotpoElement = container.querySelector('.yotpo')

    expect(yotpoElement).toHaveAttribute('data-product-id', '68415324184')
    expect(yotpoElement).toHaveAttribute('data-name', 'Water Lilies')
    expect(yotpoElement).toHaveAttribute(
      'data-url',
      'https://www.fragrantjewels.com/ws30/products/water-lilies-jewel-candle'
    )
    expect(yotpoElement).toHaveAttribute(
      'data-image-url',
      'https://cdn.shopify.com/s/files/1/0548/5721/products/1199626307319709-Gravitybrands-1200x960-ZC-1.01.png?v=1609870978'
    )
  })
})
