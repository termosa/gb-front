import React from 'react'
import { render } from '@testing-library/react'
import DropAHint from '.'

describe('<DropAHint>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<DropAHint>Component content</DropAHint>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
