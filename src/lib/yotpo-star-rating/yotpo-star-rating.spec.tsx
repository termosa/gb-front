import React from 'react'
import { render } from '@testing-library/react'
import YotpoStarRating from '.'

describe('<YotpoStarRating>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<YotpoStarRating>Component content</YotpoStarRating>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
