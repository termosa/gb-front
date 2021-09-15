import React from 'react'
import { render } from '@testing-library/react'
import BannerDiscount from '.'

describe('<BannerDiscount>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BannerDiscount discountStatus="happyday20" />)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
