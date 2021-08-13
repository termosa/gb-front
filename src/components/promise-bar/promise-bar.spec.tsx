import React from 'react'
import { render } from '@testing-library/react'
import { BasicPromiseBar } from './promise-bar.composition'

describe('PromiseBar', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicPromiseBar />)
    const rendered = getByText('Our promise to you')
    expect(rendered).toBeTruthy()
  })
})
