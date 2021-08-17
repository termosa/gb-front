import React from 'react'
import { render } from '@testing-library/react'
import MainPageLayout from '.'

jest.setMock('../../modules/load-customer', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 42),
  }
})
jest.setMock('../../modules/load-products-chunk', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 42),
  }
})

describe('<MainPageLayout>', () => {
  // beforeEach(() => loadCustomer.mockResolvedValue(null))
  // beforeEach(() => loadProductsChunk.mockResolvedValue(null))
  it('should render with the correct text', () => {
    const { getByText } = render(<MainPageLayout>Component content</MainPageLayout>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
