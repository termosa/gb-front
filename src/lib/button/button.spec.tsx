import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './button'

describe('<Button>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Button>Basic Button</Button>)
    const rendered = getByText('Basic Button')
    expect(rendered).toBeTruthy()
  })
})
