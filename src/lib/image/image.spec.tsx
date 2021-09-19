import React from 'react'
import { getByAltText, render } from '@testing-library/react'
import Image from '.'

describe('<Image>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Image
        src={'https://cdn.shopify.com/s/files/1/0548/5721/products/under_the_sea_scrub_comp.png?v=1618003149'}
        alt={'1613415430'}
        draggable={false}
        shopifySize={'medium'}
      />
    )
    const rendered = getByAltText(container as HTMLElement, '1613415430')
    expect(rendered).toBeTruthy()
  })
})
