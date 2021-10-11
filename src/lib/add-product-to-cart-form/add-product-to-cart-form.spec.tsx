import React from 'react'
import { render } from '@testing-library/react'
import AddProductToCartForm from '.'

describe('<AddProductToCartForm>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<AddProductToCartForm>Component content</AddProductToCartForm>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
