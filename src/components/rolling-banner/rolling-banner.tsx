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
  padding: 9px 0;
  position: relative;

  @media (min-width: 768px) {
    font: 500 11px/1.2 'Montserrat', sans-serif;
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
  width: 10px;
  height: 10px;
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
  width: 10px;
  height: 10px;
  border: none;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const SPromoSlide = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PinkSpan = styled.span`
  color: #ee67a0;
`

export function RollingBanner(): React.ReactElement {
  return (
    <PromoWrapper>
      <Container>
        <PromoSlider>
          <CarouselSlider customLeftArrow={<PrevArrow />} customRightArrow={<NextArrow />} infinite>
            <span>
              <SPromoSlide>
                PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN
              </SPromoSlide>
            </span>
            <SPromoSlide>
              <span>
                <PinkSpan>FREE SHIPPING</PinkSpan> ON ORDERS $75+
              </span>
            </SPromoSlide>
            <SPromoSlide>
              <span>
                COVID-19 SHIPPING UPDATE{' '}
                <a
                  href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
                  target="_blank"
                >
                  LEARN MORE
                </a>
              </span>
            </SPromoSlide>
          </CarouselSlider>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
