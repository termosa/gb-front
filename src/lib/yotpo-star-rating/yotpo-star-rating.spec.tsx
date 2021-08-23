import React from 'react'
import { render } from '@testing-library/react'
import YotpoStarRating from '.'

describe('<YotpoStarRating>', () => {
  it('should render with the data-product-id attribute', () => {
    const { container } = render(<YotpoStarRating productId={235232553} />)
    const yotpoElement = container.querySelector('.yotpo')
    expect(yotpoElement).toHaveAttribute('data-product-id', '235232553')
  })
})
