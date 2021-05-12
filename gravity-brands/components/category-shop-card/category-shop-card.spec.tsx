import React from 'react'
import { render } from '@testing-library/react'
import { BasicCategoryShopCard } from './category-shop-card.composition'

describe('CategoryShopCard', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCategoryShopCard />)
    const rendered = getByText('Shop card title')
    expect(rendered).toBeTruthy()
  })
})
