import React from 'react'
import { getByAltText, render } from '@testing-library/react'
import VerticalGallery from './index'

describe('<VerticalGallery>', () => {
  it('should render with the correct text', () => {
    const { container } = render(<VerticalGallery />)
    const rendered = getByAltText(
      container as HTMLElement,
      'https://cdn.shopify.com/s/files/1/0548/5721/products/Moulin_Rouge_bb_ring_bundle_ac2074d8-a7d0-4d2f-8fd2-271471840a28.png?v=1613415430'
    )
    console.log('L12', rendered)
    expect(rendered).toBeTruthy()
  })
})
