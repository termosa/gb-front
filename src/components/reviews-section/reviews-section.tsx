import React from 'react'
import Slider, { Settings } from 'react-slick'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface ReviewsSectionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  images: Array<string>
  quote: string
  author: string
}

const SReviewSection = styled.section`
  background-color: #fdfbf9;
  font: 16px/1.3 'Montserrat', sans-serif;
  padding: 52px 0 56px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 44px 0;
  }
`

const SContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const SStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 12px;
  height: 14px;
`

const SStar = styled.span`
  margin: 0 2px;
  width: 14px;
  height: 14px;
  @media (min-width: 767px) {
    width: 18px;
    height: 18px;
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
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    max-width: 100%;
    width: 100%;
  }

  .slick-slider {
    user-select: none;
    box-sizing: border-box;
    touch-action: pan-y;
    text-align: center;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-slider .slick-track {
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      transform: translate3d(0, 0, 0);
      justify-content: center;
      width: 100%;
    }
  }

  .slick-slider .slick-slide {
    margin: 0 1%;
    @media (min-width: 991px) {
      margin: 0 1.2vw;
    }
  }

  .slick-slide {
    outline: none;
    display: none;
    float: left;
    min-height: 1px;
    @media (min-width: 991px) {
      width: initial !important;
    }
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-slider .slick-slide img {
    height: auto;
    width: auto !important;
    max-width: 100%;
    max-height: 33px;
    margin: 0 auto;
    display: block;
  }

  img {
    border-style: none;
    margin: 0 5px 10px;
  }
`

const PrevArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(45deg);
  left: 0;
  width: 13px;
  height: 13px;
  z-index: 13;
  font-size: 0;
  top: 50%;
  line-height: 1;
  position: absolute;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`

const NextArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(-135deg);
  right: 1px;
  font-size: 0;
  z-index: 13;
  top: 47%;
  line-height: 1;
  position: absolute;
  width: 13px;
  height: 13px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`

const TEST_IMAGES = [
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeed.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitan.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allure.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beauty-insider.png',
  'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/popsugar.png',
]

export function ReviewsSection({ quote, author, className }: ReviewsSectionProps): React.ReactElement {
  const settings: Settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        },
      },
    ],
  }

  return (
    <SReviewSection className={cn('ReviewsSection', className)}>
      <SContainer>
        <SStars>
          {[...Array(5)].map((_) => (
            <SStar>
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
          <Slider {...settings}>
            {/*{images*/}
            {/*  ? images.map((media, index) => <img src={media} alt="company" key={`revImage${index}`} />)*/}
            {/*  : TEST_IMAGES.map((media, index) => <img src={media} alt="company" key={`revImage${index}`} />)}*/}
            {TEST_IMAGES.map((media, index) => (
              <img src={media} alt="company" key={`revImage${index}`} />
            ))}
          </Slider>
        </SliderWrapper>
      </SContainer>
    </SReviewSection>
  )
}
