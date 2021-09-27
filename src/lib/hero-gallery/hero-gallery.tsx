import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '../../lib/button'
import Slider from '../slider'

const DEFAULT_BACKGROUND_IMAGE = 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg'

const SliderWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: hand;
  }

  .slick-slider .slick-track,
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

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    bottom: 18px;
  }
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media (min-width: 992px) {
    margin-bottom: 76px;
  }
`

const Slide = styled.div<{ backgroundImg: string }>`
  display: block !important;
  position: relative;
  overflow-y: hidden;
  background: ${(props) => `url(${props.backgroundImg}) no-repeat`};
  background-position: center center;
  background-size: cover;
  font: 12px/1.3 'Montserrat', sans-serif;

  @media (min-width: 768px) {
    height: 450px;
    background-image: ${(props) => `url(${props.backgroundImg}) no-repeat`};
  }

  @media (max-aspect-ratio: 4/3) and (max-width: 767px) {
    height: 490px;
  }
`

const SlideContent = styled.div`
  background: rgba(255, 255, 255, 0.85);
  max-width: 480px;
  width: 90%;
  position: absolute;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 25px;
  text-align: center;

  @media (min-width: 768px) {
    bottom: -102px;
    padding: 32px;
    transform: translate(-50%, -50%);
  }
`

const SlidePreTitle = styled.div`
  font: 600 14px/17px 'Montserrat', sans-serif;
  text-transform: uppercase;
  display: block;
  letter-spacing: 0.16em;
  margin: 0 0 8px;
`

const SlideTitle = styled.div`
  font: 700 48px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  font-style: normal;
  margin: 0 0 12px;

  & > span {
    font-style: italic;
  }
`

const SlideText = styled.div`
  p {
    font: 400 16px/1.5 'Montserrat', serif;
    margin: 0 0 20px;
  }
`

const SlideLinkInner = styled.a`
  text-decoration: none;
  color: inherit;
`

export type GalleryItem = {
  topText: string
  centerFirstText: string
  centerSecondText: string
  bottomText: string
  buttonText: string
  buttonLink: string
  backgroundImg: string
}

export type HeroGalleryProps = {
  className?: ClassName
  style?: React.CSSProperties
  slides: Array<GalleryItem>
}

export function HeroGallery({ className, style, slides }: HeroGalleryProps): React.ReactElement {
  return (
    <SliderWrapper className={cn(className)} style={style}>
      <Slider partiallyVisible={false} dotsPresent arrows={false} itemClass={'slider-full-width-item'}>
        {slides.map((slide: GalleryItem) => (
          <Slide
            key={`${slide.buttonLink}${slide.backgroundImg}${slide.buttonText}`}
            backgroundImg={slide.backgroundImg || DEFAULT_BACKGROUND_IMAGE}
          >
            <SlideContent>
              <SlidePreTitle>{slide.topText}</SlidePreTitle>
              <SlideTitle>
                {slide.centerFirstText}
                <br />
                {slide.centerSecondText}
              </SlideTitle>
              <SlideText>
                <p>{slide.bottomText}</p>
              </SlideText>
              <Button backColor={'#000'} frontColor={'#fff'} padding={'0 25px'} width={'auto'}>
                <SlideLinkInner href={slide.buttonLink}>{slide.buttonText}</SlideLinkInner>
              </Button>
            </SlideContent>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  )
}
