import React, { useRef } from 'react'

import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Slider from '../../lib/slider'
import useScreenSize from '../../lib/use-screen-size'
import Image from '../../lib/image'
import Carousel from 'react-multi-carousel'

export interface ReviewsSectionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  quote: string
  author: string
}

const SReviewSection = styled.section`
  background-color: #fdfbf9;
  font: 16px/1.3 'Montserrat', sans-serif;
  padding: 52px 0 45px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 44px 0;
  }
`

const SContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 992px) {
    padding: 0 30px;
    max-width: 910px;
  }
`

const SStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px;
  height: 14px;
`

const SStar = styled.span`
  margin: 0 1px;
  width: 14px;
  height: 14px;
  @media (min-width: 767px) {
    width: 16px;
    height: 16px;
  }
`

const SReviewAmount = styled.strong`
  text-transform: uppercase;
  display: block;
  font: 600 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.12em;
  margin: 0 0 32px;
  @media (min-width: 768px) {
    margin: 0 0 25px;
  }
  @media (min-width: 992px) {
    margin: 0 0 32px;
  }
`

const STitle = styled.h3`
  text-align: center;
  font: 700 40px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const SQuote = styled.figure`
  margin: 0;
  max-width: 900px;

  @media (min-width: 768px) {
    margin: 0 auto 32px;
  }
`

const SBlockQuote = styled.blockquote`
  font: 500 20px/1.4 'Cormorant Garamond', serif;
  white-space: break-spaces;
  padding: 0;
  margin: 0 0 32px;
`

const SFigcaption = styled.figcaption`
  font: 600 16px/1.25 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`

const SliderWrapper = styled.div`
  position: relative;
  margin: 32px auto 0;

  figure {
    @media (min-width: 768px) {
      width: auto;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      margin: 0 10px;

      img {
        max-width: 100%;
        width: auto;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 26px auto 0;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .react-multi-carousel-list {
    margin: 0 auto;
    position: relative;

    @media (min-width: 768px) {
      max-width: 600px;
    }

    @media (min-width: 992px) {
      max-width: 990px;
    }
  }
`

const SCompanyImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 7px;

  img {
    display: block;
    margin-bottom: 0;
    border-style: none;
    max-width: 100%;
  }

  svg {
    width: 100%;
    display: block;
  }
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
`

const SPrevArrow = styled(SArrow)`
  left: -20px;

  @media (min-width: 768px) {
    left: -18px;
  }

  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -20px;

  @media (min-width: 768px) {
    right: -18px;
  }

  button {
    transform: translateX(-5px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  border: none;
  font-size: 0;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  border: 0;
  background: transparent;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`

const SliderHolder = styled.div`
  position: relative;
  padding: 0 12px;
  max-width: 386px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`

const TEST_IMAGES = [
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeedlogo.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitanlogo.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29logo.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allurelogo.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beautyinsiderlogo-1.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/vector.png',
]

export function ReviewsSection({ quote, author, className }: ReviewsSectionProps): React.ReactElement {
  const useScreen = useScreenSize()
  const reviewsSliderRef = useRef<Carousel | null>(null)

  const sliderSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  }

  return (
    <SReviewSection className={cn('ReviewsSection', className)}>
      <SContainer>
        <SStars>
          {[...Array(5)].map((_el, i) => (
            <SStar key={i}>
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.44175 0.813919C8.62107 0.262019 9.40186 0.262019 9.58119 0.813918L11.2978 6.09722C11.378 6.34404 11.608 6.51115 11.8676 6.51115H17.4228C18.0031 6.51115 18.2443 7.25373 17.7749 7.59482L13.2806 10.8601C13.0707 11.0126 12.9828 11.283 13.063 11.5298L14.7796 16.8131C14.959 17.365 14.3273 17.824 13.8578 17.4829L9.36357 14.2176C9.15362 14.0651 8.86932 14.0651 8.65936 14.2176L4.16512 17.4829C3.69564 17.824 3.06397 17.365 3.24329 16.8131L4.95994 11.5298C5.04014 11.283 4.95228 11.0126 4.74233 10.8601L0.24808 7.59482C-0.221393 7.25372 0.0198838 6.51115 0.600185 6.51115H6.15538C6.4149 6.51115 6.6449 6.34404 6.7251 6.09722L8.44175 0.813919Z"
                  fill={'#9059C8'}
                />
              </svg>
            </SStar>
          ))}
        </SStars>
        <SReviewAmount>100,600+ 5 STAR REVIEWS</SReviewAmount>
        <STitle>
          <span>You didn’t hear it </span>
          <span>from us...</span>
        </STitle>
        <SQuote>
          <SBlockQuote>
            <q>{quote}</q>
          </SBlockQuote>
          <SFigcaption>{`- ${author}`}</SFigcaption>
        </SQuote>
        <SliderWrapper>
          {useScreen.greaterThanMedium ? (
            TEST_IMAGES.map((media, index) => <Image src={media} alt="company" key={`revImage${index}`} />)
          ) : (
            <SliderHolder>
              <SPrevArrow>
                <SArrowButton
                  onClick={() => {
                    reviewsSliderRef.current && reviewsSliderRef.current.previous(1)
                  }}
                />
              </SPrevArrow>
              <SNextArrow>
                <SArrowButton
                  onClick={() => {
                    reviewsSliderRef.current && reviewsSliderRef.current.next(1)
                  }}
                />
              </SNextArrow>
              <Slider
                partiallyVisible={false}
                arrows={false}
                carouselRef={reviewsSliderRef}
                infinite
                responsive={sliderSettings}
                customLeftArrow={
                  <SPrevArrow>
                    <SArrowButton />
                  </SPrevArrow>
                }
                customRightArrow={
                  <SNextArrow>
                    <SArrowButton />
                  </SNextArrow>
                }
              >
                {/*{images*/}
                {/*  ? images.map((media, index) => <img src={media} alt="company" key={`revImage${index}`} />)*/}
                {/*  : TEST_IMAGES.map((media, index) => <img src={media} alt="company" key={`revImage${index}`} />)}*/}

                {TEST_IMAGES.map((media, index) => (
                  <SCompanyImageContainer key={`${media}${index}`}>
                    <img src={media} alt="company" />
                  </SCompanyImageContainer>
                ))}
              </Slider>
            </SliderHolder>
          )}
        </SliderWrapper>
      </SContainer>
    </SReviewSection>
  )
}
// function SArrow(SArrow: any) {
//   throw new Error('Function not implemented.')
// }
