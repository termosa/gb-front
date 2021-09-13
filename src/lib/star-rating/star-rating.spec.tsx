import React from 'react'
import { render, waitFor } from '@testing-library/react'
import StarRating from '.'

describe('<StarRating>', () => {
  it('should render with the reviewsCount attribute', () => {
    const { container } = render(<StarRating reviewsCount={23} />)
    const element = container.querySelector('.text-m')
    expect(element).toHaveAttribute('aria-label', '23 reviews')
  })

  it('should render with the reviewsCount attribute', () => {
    const { getByText } = render(<StarRating reviewsCount={4.8} />)
    waitFor(() => expect(getByText('4.8 star rating')).toBeTruthy())
  })
})
