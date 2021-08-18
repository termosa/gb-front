import React from 'react'
import { render } from '@testing-library/react'
import CategoryShopCard from '.'

describe('<CategoryShopCard>', () => {
  it('should render with the correct text', () => {
    const { container } = render(
      <CategoryShopCard
        title="Forrest Collection"
        subTitle="Lorem ipsum bla bla lba"
        image="https://i.ibb.co/QFSL0Xd/Background.jpg"
        link="https://www.fragrantjewels.com/pages/inner-circle#how-it-works"
      />
    )
    expect(container).toHaveTextContent('Forrest Collection')
    expect(container).toHaveTextContent('Lorem ipsum bla bla lba')
  })
})
