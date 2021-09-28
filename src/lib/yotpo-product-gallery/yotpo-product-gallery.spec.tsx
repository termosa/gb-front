import React from 'react'
import { render } from '@testing-library/react'
import YotpoProductGallery from '.'

describe('<YotpoProductGallery>', () => {
  it('should render with the data-gallery-id attribute', () => {
    const { container } = render(<YotpoProductGallery galleryId="5d12193001f0950007b69682" productId={4940643500110} />)
    const yotpoElement = container.querySelector('.yotpo')
    expect(yotpoElement).toHaveAttribute('data-gallery-id', '5d12193001f0950007b69682')
  })
})
