import React from 'react'
import { render } from '@testing-library/react'
import { BasicPresentationCanvas } from './presentation-canvas.composition'

describe('PresentationCanvas', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicPresentationCanvas />)
    const rendered = getByText('PresentationCanvas content')
    expect(rendered).toBeTruthy()
  })
})
