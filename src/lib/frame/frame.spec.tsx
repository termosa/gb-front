import React from 'react'
import { render } from '@testing-library/react'
import Frame from '.'

describe('<Frame>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Frame>Component content</Frame>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
