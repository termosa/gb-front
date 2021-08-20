import React from 'react'
import { render } from '@testing-library/react'
import YotpoGallery from '.'

describe('<YotpoGallery>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<YotpoGallery>Component content</YotpoGallery>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
