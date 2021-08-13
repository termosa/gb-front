import React from 'react'
import { render } from '@testing-library/react'
import { BasicVerticalProductCard } from './vertical-product-card.composition'

describe('VerticalProductCard', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicVerticalProductCard />)
    const rendered = getByText('Test Name')
    expect(rendered).toBeTruthy()
  })
})
