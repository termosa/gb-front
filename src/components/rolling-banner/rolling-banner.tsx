import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Slider from '../../lib/slider'

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
  padding: 0 8px;

  @media (min-width: 375px) {
    padding: 0 18px;
  }

  @media (min-width: 1033px) {
    padding: 0;
  }
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
    display: flex;
    align-items: center;
  }

  a {
    color: #9059c8;
    text-decoration: none;
    transition: all linear 0.2s;
  }

  a:hover {
    @media (min-width: 1200px) {
      color: #4dbeba;
    }
  }
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  z-index: 5;
  cursor: pointer;

  @media (max-width: 767px) {
    height: 10px;
  }
`

const SPrevArrow = styled(SArrow)`
  left: -7px;
  button {
    cursor: pointer;
    transform: rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -7px;
  button {
    cursor: pointer;
    transform: rotate(-135deg);
  }
`

const SSlider = styled(Slider)`
  width: 100%;
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

const SSeparatedLine = styled.span`
  padding: 0 8px;

  @media (min-width: 768px) {
    padding: 0 1em;
  }

  & + & {
    position: relative;
    :before {
      position: absolute;
      left: -2px;
      color: #fff;
      content: '|';
    }
  }
`

const PurpleSpan = styled.span`
  color: #9059c8;
`

export function RollingBanner(): React.ReactElement {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <PromoWrapper>
      <Container>
        <PromoSlider>
          <SPrevArrow onClick={() => setSelectedItem(selectedItem - 1)}>
            <SArrowButton />
          </SPrevArrow>
          <SNextArrow onClick={() => setSelectedItem(selectedItem + 1)}>
            <SArrowButton />
          </SNextArrow>
          <SSlider
            infinite
            autoPlay
            selectedItem={selectedItem}
            arrows={false}
            onChange={(i) => {
              selectedItem !== i && setSelectedItem(i)
            }}
          >
            <span>
              <SPromoSlide>
                <SSeparatedLine>PARABEN FREE</SSeparatedLine>
                <SSeparatedLine>HANDMADE IN USA</SSeparatedLine>
                <SSeparatedLine>100% VEGAN</SSeparatedLine>
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
                <Link
                  passHref
                  href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
                >
                  <a target="_blank">LEARN MORE</a>
                </Link>
              </span>
            </SPromoSlide>
          </SSlider>
        </PromoSlider>
      </Container>
    </PromoWrapper>
  )
}
