import React from 'react'
import { render } from '@testing-library/react'
import HeroGallery from '.'

describe('<HeroGallery>', () => {
  it('should render with the correct slide', () => {
    const { getByText } = render(
      <HeroGallery
        slides={[
          {
            topText: 'MINISUBLINER',
            centerFirstText: 'SAVOR the',
            centerSecondText: 'MOMENTS',
            bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
            buttonText: 'SHOP NOW',
            buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
            backgroundImg: 'http://placehold.it/300x200',
          },
        ]}
      />
    )
    expect(
      getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.')
    ).toBeTruthy()
    expect(getByText('SHOP NOW')).toBeTruthy()
    expect(getByText('SHOP NOW')).toHaveAttribute(
      'href',
      'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'
    )
  })
})
