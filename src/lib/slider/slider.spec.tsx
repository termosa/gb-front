import React from 'react'
import { render } from '@testing-library/react'
import CarouselSlider from '.'
import Image from '../image'

describe('<Slider>', () => {
  it('should render with the correct image', async () => {
    const imgSrc = 'https://source.unsplash.com/random/800x800/?img='
    const { container } = render(
      <CarouselSlider scrollbarPresent dotsPresent>
        {[...new Array(5).fill(1)].map((_, i) => {
          return <Image src={imgSrc + i} alt="" style={{ width: '300px' }} key={imgSrc + i} />
        })}
      </CarouselSlider>
    )
    const displayedImage = container.querySelector('.react-multi-carousel-track ')
    expect(displayedImage).toBeVisible()
  })
})
