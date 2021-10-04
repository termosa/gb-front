import React from 'react'
import { render } from '@testing-library/react'
import HeroBanner from '.'

describe('<HeroBanner>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<HeroBanner>Component content</HeroBanner>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
