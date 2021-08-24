import React, { useRef } from 'react'
import { render } from '@testing-library/react'
import ProductInfo from '.'

describe('<ProductInfo>', () => {
  it('should render with the correct text', () => {
    const addToCartRef = useRef<HTMLButtonElement>(null)
    const { getByText } = render(<ProductInfo addToCartRef={addToCartRef} />)
    const rendered = getByText('INNER CIRCLE EXCLUSIVE')
    expect(rendered).toBeTruthy()
  })
})
