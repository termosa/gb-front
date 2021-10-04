import React from 'react'
import { render } from '@testing-library/react'
import HeroBanner from '.'

describe('<HeroBanner>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(
      <HeroBanner
        properties={{
          desktop:
            'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/home-ww-banner-mon-dt.jpg',
          mobile:
            'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/home-ww-banner-mon-mb.jpg',
          link: '/collections/jewel-candles/?d=scary',
        }}
      />
    )
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
