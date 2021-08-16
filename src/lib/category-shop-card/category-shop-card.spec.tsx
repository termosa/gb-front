import React from 'react'
import { render } from '@testing-library/react'
import CategoryShopCard from '.'

describe('<CategoryShopCard>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<CategoryShopCard>Component content</CategoryShopCard>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
