import React from 'react'
import { render } from '@testing-library/react'
import { BasicRingSize } from './ring-size.composition'

describe('RingSize', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicRingSize />)
    const rendered = getByText('RingSize content')
    expect(rendered).toBeTruthy()
  })
})
