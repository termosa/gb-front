import React from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'

const PromoWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  position: relative;
  z-index: 2;
  display: block;
  color: #fff;
  background-color: #000;
  font-size: 9px;
  text-transform: uppercase;
  @media (min-width: 375px) {
    font-size: 11px;
  }
`

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 0 15px;
`

const PromoSlider = styled(Slider)`
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  position: relative;
  font-weight: 500;
  @media (min-width: 375px) {
    padding: 9px 0;
  }

  .slick-slider {
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
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
  .slick-slide {
    float: left;

    height: 100%;
    min-height: 1px;
  }
  a {
    color: #ee67a0;
    text-decoration: none;
    transition: all linear 0.2s;
  }

  a:hover {
    @media (min-width: 1200px) {
      color: #f53e88;
    }
  }
`
const PrevArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(45deg);
  left: 0;
  width: 7px;
  height: 7px;
  z-index: 13;
  font-size: 0;
  top: 50%;
  line-height: 1;
  position: absolute;
  border: none;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  @media (min-width: 375px) {
    width: 9px;
    height: 9px;
  }
`

const NextArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(-135deg);
  right: 1px;
  font-size: 0;
  z-index: 13;
  top: 50%;
  line-height: 1;
  position: absolute;
  width: 7px;
  height: 7px;
  border: none;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  @media (min-width: 375px) {
    width: 9px;
    height: 9px;
  }
`

const PinkSpan = styled.span`
  color: #ee67a0;
`

export function RollingBanner() {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  }
  return (
    <PromoWrapper>
      <Container>
        <PromoSlider {...settings}>
          <div>PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN</div>
          <div>
            <PinkSpan>FREE SHIPPING</PinkSpan> ON ORDERS $75+
          </div>
          <div>
            COVID-19 SHIPPING UPDATE{' '}
            <a
              href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
              target="_blank"
            >
              LEARN MORE
            </a>
          </div>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
