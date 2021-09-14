import React from 'react'
import { render } from '@testing-library/react'
import CollectionBanner from '.'

describe('<CollectionBanner>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<CollectionBanner>Component content</CollectionBanner>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
