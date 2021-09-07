import React from 'react'
import { render } from '@testing-library/react'
import PromotionSite from '.'

describe('<SitePromotion>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<PromotionSite></PromotionSite>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
