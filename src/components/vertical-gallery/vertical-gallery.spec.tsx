import React from 'react'
import { render } from '@testing-library/react'
import VerticalGallery from './index'

describe('<VerticalGallery>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<VerticalGallery>Component content</VerticalGallery>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
