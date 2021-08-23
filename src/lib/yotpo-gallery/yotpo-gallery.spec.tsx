import React from 'react'
import { render } from '@testing-library/react'
import YotpoGallery from '.'

describe('<YotpoGallery>', () => {
  it('should render with the data-gallery-id attribute', () => {
    const { container } = render(<YotpoGallery galleryId="5dd5da2416fa290bf56b2085" />)
    const yotpoElement = container.querySelector('.yotpo')
    expect(yotpoElement).toHaveAttribute('data-gallery-id', '5dd5da2416fa290bf56b2085')
  })
})
