import { render, waitFor } from '@testing-library/react'
import PromotionBanner from '../promotion-banner'
import React from 'react'
jest.mock('../../modules/api')

describe('<PromotionBanner />', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<PromotionBanner promo={'blackcat'} />)
    const title = waitFor(() => getByText("You've found a Midnight Collector's Item."))
    const requirements = waitFor(() =>
      getByText("Your collector's item will be added to your cart at checkout with any purchase! While supplies last.")
    )
    expect(title).toBeTruthy()
    expect(requirements).toBeTruthy()
  })
})
