import React from 'react'
import { render } from '@testing-library/react'
import CategoryShopCard from '.'

describe('<CategoryShopCard>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(
      <CategoryShopCard
        title="Forrest Collection"
        subTitle="Lorem ipsum bla bla lba"
        image="https://i.ibb.co/QFSL0Xd/Background.jpg"
        link="https://www.fragrantjewels.com/pages/inner-circle#how-it-works"
      />
    )
    expect(getByText('Forrest Collection')).toBeTruthy()
    expect(getByText('Lorem ipsum bla bla lba')).toBeTruthy()
  })

  it('should render with the correct link href', () => {
    const { container } = render(
      <CategoryShopCard
        title="Forrest Collection"
        subTitle="Lorem ipsum bla bla lba"
        image="https://i.ibb.co/QFSL0Xd/Background.jpg"
        link="https://www.fragrantjewels.com/pages/inner-circle#how-it-works"
      />
    )

    expect(container.querySelector('a').getAttribute('href')).toBe(
      'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'
    )
  })

  it('should render an image', () => {
    const { container } = render(
      <CategoryShopCard
        title="Forrest Collection"
        subTitle="Lorem ipsum bla bla lba"
        image="https://i.ibb.co/QFSL0Xd/Background.jpg"
        link="https://www.fragrantjewels.com/pages/inner-circle#how-it-works"
      />
    )

    expect(container.querySelector('img').getAttribute('src')).toBe('https://i.ibb.co/QFSL0Xd/Background.jpg')
  })
})
