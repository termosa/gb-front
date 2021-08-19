import React from 'react'
import { render } from '@testing-library/react'
import YotpoReviews from '.'

describe('<YotpoReviews>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<YotpoReviews>Component content</YotpoReviews>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
