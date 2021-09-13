import React from 'react'
import { render, waitFor } from '@testing-library/react'
import StarRating from '.'

describe('<StarRating>', () => {
  it('should render with the data-product-id attribute', () => {
    const { container } = render(<StarRating productId={235232553} />)
    const element = container.querySelector('.yotpo')
    expect(element).toHaveAttribute('data-product-id', '235232553')
  })

  it('should render with the reviewCount attribute', () => {
    const { container } = render(<StarRating reviewCount={23} />)
    const element = container.querySelector('.text-m')
    expect(element).toHaveAttribute('aria-label', '23 reviews')
  })

  it('should render with the reviewCount attribute', () => {
    const { getByText } = render(<StarRating reviewCount={4.8} />)
    waitFor(() => expect(getByText('4.8 star rating')).toBeTruthy())
  })
})
