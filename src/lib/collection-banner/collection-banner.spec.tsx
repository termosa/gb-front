import React from 'react'
import { render } from '@testing-library/react'
import CollectionBanner from '.'

describe('<CollectionBanner />', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<CollectionBanner id="body-scrubs" />)
    expect(getByText('Body Scrubs')).toBeTruthy()
  })
  it('should render with the correct text', () => {
    const { getByText } = render(<CollectionBanner id="all-products" />)
    expect(getByText('Shop Everything')).toBeTruthy()
  })
  it('should render with class', async () => {
    const { container } = render(<CollectionBanner className={'test-collection'} id="all-products" />)
    const element = container.querySelector('.test-collection')
    expect(element).toHaveAttribute('class')
  })
  it('should render with style', async () => {
    const { container } = render(<CollectionBanner style={{ opacity: 0.4 }} id="all-products" />)
    const element = container.querySelector('div')
    expect(element).toHaveStyle('opacity: 0.4')
  })
})
