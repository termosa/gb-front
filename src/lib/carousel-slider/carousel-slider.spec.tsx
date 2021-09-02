import React from 'react'
import { render } from '@testing-library/react'
import CarouselSlider from '.'

describe('<CarouselSlider>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<CarouselSlider>Component content</CarouselSlider>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
