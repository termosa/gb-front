import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Link from 'next/link'
import Slider from '../slider'
import { useScreenSize } from '../use-screen-size'

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
  .react-multi-carousel-dot button {
    background: #fff;
  }
  .react-multi-carousel-dot-list {
    bottom: 15px;
  }
  .react-multi-carousel-list {
    position: relative;
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

const SlideTransparentContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  color: #fff;
`

const SliderTransparentWrapper = styled.div`
  position: absolute;
  @media (min-width: 1200px) {
    top: 50%;
    transform: translateY(-50%);
    button {
      margin: 0;
    }
  }
  @media (max-width: 1199px) {
    width: 90%;
    bottom: 46px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
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
  padding: 15px;
  text-align: center;
  @media (min-width: 375px) {
    padding: 25px;
  }
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
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 0 auto 12px;
  }
  @media (min-width: 1200px) {
    margin: 0 0 12px;
  }
  & > span {
    font-style: italic;
  }
`

const SlideText = styled.div`
  p {
    font: 400 16px/1.5 'Montserrat', serif;
    margin: 0 0 20px;
    @media (min-width: 768px) {
      margin: 0 auto 20px;
      max-width: 500px;
    }
    @media (min-width: 1200px) {
      margin: 0 auto 20px;
      max-width: 410px;
    }
  }
`

const SlideLinkInner = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  min-width: 250px;
  margin: 0 auto;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 0;
  font: 700 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  padding: 16.5px;
  text-align: center;
  @media (min-width: 1200px) {
    margin: 0;
    &:hover {
      font-weight: 500;
      background: #fff;
      color: #000;
    }
  }
`

export type GalleryItem = {
  topText: string
  centerFirstText: string
  centerSecondText: string
  bottomText: string
  buttonText: string
  buttonLink: string
  backgroundImg: string
  backgroundImgMobile: string
  transparentPlaceholder: boolean
}

export type HeroGalleryProps = {
  className?: ClassName
  style?: React.CSSProperties
  slides: Array<GalleryItem>
}

export function HeroGallery({ className, style, slides }: HeroGalleryProps): React.ReactElement {
  const screenSize = useScreenSize()
  return (
    <SliderWrapper className={cn(className)} style={style}>
      <Slider
        partiallyVisible={false}
        showDots={true}
        infinite={true}
        arrows={false}
        itemClass={'slider-full-width-item'}
      >
        {slides.map((slide: GalleryItem) => (
          <Slide
            key={`${slide.buttonLink}${slide.backgroundImg}${slide.buttonText}`}
            backgroundImg={
              screenSize.greaterThanExtraLarge
                ? slide.backgroundImg
                : slide.backgroundImgMobile || DEFAULT_BACKGROUND_IMAGE
            }
          >
            {slide.transparentPlaceholder ? (
              <SlideTransparentContent>
                <SliderTransparentWrapper>
                  <SlidePreTitle>{slide.topText}</SlidePreTitle>
                  <SlideTitle>
                    {slide.centerFirstText}
                    <br />
                    {slide.centerSecondText}
                  </SlideTitle>
                  <SlideText>
                    <p>{slide.bottomText}</p>
                  </SlideText>
                  {slide.buttonLink && (
                    <Link passHref href={slide.buttonLink}>
                      <SlideLinkInner>{slide.buttonText}</SlideLinkInner>
                    </Link>
                  )}
                </SliderTransparentWrapper>
              </SlideTransparentContent>
            ) : (
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
                <Link passHref href={slide.buttonLink}>
                  <SlideLinkInner>{slide.buttonText}</SlideLinkInner>
                </Link>
              </SlideContent>
            )}
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  )
}
