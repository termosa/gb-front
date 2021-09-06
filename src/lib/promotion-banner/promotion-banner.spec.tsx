import React from 'react'
import { render } from '@testing-library/react'
import PromotionBanner from '../../lib/promotion-banner'
// import { http } from '../../modules/http'
jest.mock('http')

describe('< PromotionBanner >', () => {
  it('should render with the correct text', async () => {
    const { getByText } = render(<PromotionBanner promo="blackcat"></PromotionBanner>)
    expect(getByText).toBeTruthy()
  })
})
