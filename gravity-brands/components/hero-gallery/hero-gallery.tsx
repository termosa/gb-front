import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'

export type HeroGalleryProps = {
  className?: ClassName
}

const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;

  @media (min-width: 768px) {
    bottom: 17px;
  }

  & > li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  & button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      border-radius: 50%;
      text-align: center;
      opacity: 0.6;
      background-color: #fff;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
    }
  }

  & .slick-active button:before {
    opacity: 1;
    background-color: #fff;
  }
`

const Slide = styled.div`
  * {
    box-sizing: border-box;
  }

  position: relative;
  overflow-y: hidden;
  background: url('https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  font: 12px/1.3 'Montserrat', sans-serif;
  height: 320px;

  @media (min-width: 768px) {
    height: 380px;
    background-image: url('https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg');
  }

  @media (min-width: 1600px) {
    height: 450px;
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
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 25px;
  text-align: center;

  @media (min-width: 768px) {
    top: 50%;
    bottom: auto;
    padding: 32px;
    transform: translate(-50%, -50%);
  }
`

const SlidePreTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  letter-spacing: 2px;
  margin: 0px 0 10px;
`

const SlideTitle = styled.div`
  font: 700 32px/1 'Cormorant Garamond', serif;
  margin: 0 0 15px;

  & > span {
    font-style: italic;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const SlideText = styled.div`
  padding: 0 0 6px;

  p {
    margin: 0 0 10px;
  }
`

const SlideLink = styled.div`
  display: inline-block;
  padding: 13px 15px;
  min-width: 142px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0.5px solid black;
  border-radius: 0;
  font: 500 12px/1 'Montserrat', sans-serif;
  text-decoration: none;
  transition: all linear 0.2s;
  cursor: pointer;
  background-color: black;
  color: white;
  min-width: 128px;

  &:hover {
    @media (min-width: 1200px) {
      background-color: white;
      color: black;
    }
  }
`

export function HeroGallery({ className }: HeroGalleryProps): React.ReactElement | null {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => <Dots>{dots}</Dots>,
  }

  return (
    <div className={cn('HeroGallery', className)}>
      <Slider {...settings}>
        <Slide>
          <SlideContent>
            <SlidePreTitle>MINISUBLINER</SlidePreTitle>
            <SlideTitle>
              SAVOR{' '}
              <span>
                the <br />
                quiet
              </span>{' '}
              MOMENTS
            </SlideTitle>
            <SlideText>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
            </SlideText>
            <SlideLink>Shop Now</SlideLink>
          </SlideContent>
        </Slide>
        <Slide>
          <SlideContent>
            <SlidePreTitle>MINISUBLINER</SlidePreTitle>
            <SlideTitle>
              SAVOR{' '}
              <span>
                the <br />
                quiet
              </span>{' '}
              MOMENTS
            </SlideTitle>
            <SlideText>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
            </SlideText>
            <SlideLink>Shop Now</SlideLink>
          </SlideContent>
        </Slide>
        <Slide>
          <SlideContent>
            <SlidePreTitle>MINISUBLINER</SlidePreTitle>
            <SlideTitle>
              SAVOR{' '}
              <span>
                the <br />
                quiet
              </span>{' '}
              MOMENTS
            </SlideTitle>
            <SlideText>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
            </SlideText>
            <SlideLink>Shop Now</SlideLink>
          </SlideContent>
        </Slide>
      </Slider>
    </div>
  )
}
