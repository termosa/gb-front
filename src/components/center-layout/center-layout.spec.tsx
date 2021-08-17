import React from 'react'
import { render } from '@testing-library/react'
import { BasicCenterLayout } from './center-layout.composition'

describe('CenterLayout', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCenterLayout />)
    const rendered = getByText('Content')
    expect(rendered).toBeTruthy()
  })
})
