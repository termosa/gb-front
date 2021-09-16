import React from 'react'
import styled from 'styled-components'
import { Slider } from '../../lib/slider'

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
  font: 600 9px/1.2 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  padding: 9px 0;
  position: relative;

  @media (min-width: 375px) {
    font-size: 10px;
    letter-spacing: 0.7px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  a {
    color: #9059c8;
    text-decoration: none;
    transition: all linear 0.2s;
  }

  a:hover {
    @media (min-width: 1200px) {
      color: #000;
      //#7a3cb9
    }
  }
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  cursor: pointer;
`

const SPrevArrow = styled(SArrow)`
  left: -7px;
  button {
    transform: rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -7px;
  button {
    transform: rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  width: 8px;
  height: 8px;
  border: none;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  padding: 0;
`

const SPromoSlide = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

/*const PinkSpan = styled.span`
  color: #ee67a0;
`*/

const PurpleSpan = styled.span`
  color: #9059c8;
`

export function RollingBanner(): React.ReactElement {
  return (
    <PromoWrapper>
      <Container>
        <PromoSlider>
          <Slider
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
            infinite
          >
            <span>
              <SPromoSlide>
                PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN
              </SPromoSlide>
            </span>
            <SPromoSlide>
              <span>
                <PurpleSpan>FREE SHIPPING</PurpleSpan> ON ORDERS $65+
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
          </Slider>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
