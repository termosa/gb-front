import React from 'react'
import { render, waitFor } from '@testing-library/react'
import PromotionBanner from '../../lib/promotion-banner'
jest.mock('http')

describe('<PromotionBanner >', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<PromotionBanner promo="blackcat"></PromotionBanner>)
    waitFor(() => expect(getByText("You've found a Midnight Collector's Item.")).toBeTruthy())
  })
})
