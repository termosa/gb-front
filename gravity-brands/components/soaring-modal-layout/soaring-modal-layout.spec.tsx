import React from 'react'
import { render } from '@testing-library/react'
import { BasicSoaringModalLayout } from './soaring-modal-layout.composition'

describe('SoaringModalLayout', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSoaringModalLayout />)
    const rendered = getByText('SoaringModalLayout content')
    expect(rendered).toBeTruthy()
  })
})
