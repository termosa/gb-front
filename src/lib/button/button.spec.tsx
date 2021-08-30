import React from 'react'
import { render } from '@testing-library/react'
import { BasicButton } from './button.composition'

describe('Button', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicButton />)
    const rendered = getByText('Basic Button')
    expect(rendered).toBeTruthy()
  })
})
