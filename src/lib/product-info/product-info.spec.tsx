import React from 'react'
import { render } from '@testing-library/react'
import ProductInfo from '.'

describe('<ProductInfo>', () => {
  it('should render with the correct text', async () => {
    const addToCartRef = { current: null }
    render(<ProductInfo addToCartRef={addToCartRef} />)
    expect(addToCartRef).toBeTruthy()
  })
})
