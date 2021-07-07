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
`

const SStar = styled.span`
  margin: 0 1px;
  svg {
    width: 14px;
    height: 14px;
  }
  @media (min-width: 767px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const SStarIcon = (
  <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
      fill="#9059C8"
    ></path>
  </svg>
)

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
`

const SQuote = styled.figure`
  margin: 0 auto 32px;
  max-width: 900px;
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
  max-width: 416px;
  margin: 0 auto;
  padding: 0 10px;

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
    margin: 0 10px;
  }

  .slick-slide {
    outline: none;
    display: none;
    float: left;
    //height: 100%;
    min-height: 1px;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-slider .slick-slide img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  img {
    border-style: none;
    margin: 0 5px 10px;
    padding: 5px 0;
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

export function ReviewsSection({ images, quote, author, className }: ReviewsSectionProps): React.ReactElement {
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
        breakpoint: 768,
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
          <SStar>{SStarIcon}</SStar>
          <SStar>{SStarIcon}</SStar>
          <SStar>{SStarIcon}</SStar>
          <SStar>{SStarIcon}</SStar>
          <SStar>{SStarIcon}</SStar>
        </SStars>
        <SReviewAmount>100,600+ 5 STAR REVIEWS</SReviewAmount>
        <STitle>You didn’t hear it from us...</STitle>
        <SQuote>
          <SBlockQuote>
            <q>{quote}</q>
          </SBlockQuote>
          <SFigcaption>{`- ${author}`}</SFigcaption>
        </SQuote>
        <SliderWrapper>
          <Slider {...settings}>
            {images.map((media, index) => (
              <img src={media} alt="company" key={`revImage${index}`} />
            ))}
          </Slider>
        </SliderWrapper>
      </SContainer>
    </SReviewSection>
  )
}
