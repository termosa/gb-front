import React from 'react'
import { render } from '@testing-library/react'
import PromotionBanner from '.'

describe('<PromotionBanner>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<PromotionBanner>Component content</PromotionBanner>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
