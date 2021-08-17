import React from 'react'
import { render } from '@testing-library/react'
import HeroGallery from '.'

describe('<HeroGallery>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<HeroGallery />)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
