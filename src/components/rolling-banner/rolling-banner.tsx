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

const SPromoSlide = styled.div`
  width: 100%;
  display: block;
`

const PinkSpan = styled.span`
  color: #ee67a0;
`

export function RollingBanner(): React.ReactElement {
  return (
    <PromoWrapper>
      <Container>
        <PromoSlider>
          <CarouselSlider arrows={true}>
            <SPromoSlide>
              PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN
            </SPromoSlide>
            <SPromoSlide>
              <PinkSpan>FREE SHIPPING</PinkSpan> ON ORDERS $75+
            </SPromoSlide>
            <SPromoSlide>
              COVID-19 SHIPPING UPDATE{' '}
              <a
                href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
                target="_blank"
              >
                LEARN MORE
              </a>
            </SPromoSlide>
          </CarouselSlider>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
