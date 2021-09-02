import React from 'react'
import styled from 'styled-components'
import { CarouselSlider } from '../../lib/carousel-slider'

const PromoWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  position: relative;
  z-index: 2;
  display: block;
  color: #fff;
  background-color: #000;
  text-transform: uppercase;
`

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 0 15px;
`

const PromoSlider = styled.div`
  font: 500 9px/1.2 'Montserrat', sans-serif;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  position: relative;
  @media (min-width: 768px) {
    font: 500 11px/1.2 'Montserrat', sans-serif;
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

const PinkSpan = styled.span`
  color: #ee67a0;
`

export function RollingBanner(): React.ReactElement {
  return (
    <PromoWrapper>
      <Container>
        <PromoSlider>
          <CarouselSlider partiallyVisible={false} arrows={true}>
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
          </CarouselSlider>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
