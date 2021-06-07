import React from 'react'
import { render } from '@testing-library/react'
import { BasicRingSize } from './signin-signup.composition'

describe('RingSize', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicRingSize />)
    const rendered = getByText('Sign in')
    expect(rendered).toBeTruthy()
  })
})
