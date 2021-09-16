import React from 'react'
import { render, waitFor } from '@testing-library/react'
import BannerDiscount from '.'

describe('<BannerDiscount>', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<BannerDiscount discountCode="happyday20" />)
    const title = waitFor(() => getByText('Our Gift to You: 20% Off'))
    const requirements = waitFor(() =>
      getByText('We hope your birthday is as fabulous as you are! Treat yourself with 20% off your purchase.')
    )
    expect(title).toBeTruthy()
    expect(requirements).toBeTruthy()
  })
})
