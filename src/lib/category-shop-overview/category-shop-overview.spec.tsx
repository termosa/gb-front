import React from 'react'
import { render } from '@testing-library/react'
import CategoryShopCardsOverview from '.'

describe('<CategoryShopCardsOverview>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(
      <CategoryShopCardsOverview
        leftCard={{
          image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          title: 'Left card title',
          subTitle: 'Left card subtitle',
          link: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
        }}
        rightCard={{
          image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          title: 'Right card title',
          subTitle: 'Right card subtitle',
          link: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
        }}
      />
    )
    expect(getByText('Left card title')).toBeTruthy()
    expect(getByText('Left card subtitle')).toBeTruthy()
    expect(getByText('Right card title')).toBeTruthy()
    expect(getByText('Right card subtitle')).toBeTruthy()
  })
})
