import React from 'react'
import { render } from '@testing-library/react'
import DiamondIcon from '.'

describe('<DiamondIcon>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<DiamondIcon>Component content</DiamondIcon>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
