import React, { useState } from 'react'
import styled from 'styled-components'
import ShopByProductCard, { ShopByProductCardProps } from '../shop-by-product-card'
import SwipeableViews from 'react-swipeable-views'
import useScreenSize from '../../lib/use-screen-size'

export type ProductDetails = ShopByProductCardProps
export type ShopByProductsOverviewProps = {
  /**
   * cards to be rendered inside component
   */
  products: ProductDetails[]
  title: string
}

const SSection = styled.section`
  font: 12px/1.3 'Montserrat', sans-serif;
  padding: 52px 0 0;
  margin: 0 0 66px;
  @media (min-width: 768px) {
    padding: 40px 0 0px;
    margin: 0 0 92px;
  }
  @media (min-width: 992px) {
    padding: 82px 0 28px;
    margin: 0 0 97px;
  }
`

const SContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  overflow: inherit;
  max-width: 960px;

  .react-multi-carousel-list {
    margin: 0 auto;
    padding-bottom: 24px;
    padding-top: 24px;
    position: relative;

    @media (min-width: 768px) {
      max-width: 990px;
    }
  }
`

const SCardsBlockTitle = styled.h2`
  font: 700 40px/1.2 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 19px;

  @media (min-width: 992px) {
    margin: 0 auto 25px;
  }
`

const SliderWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    // gap: 16px;
  }

  @media (min-width: 992px) {
    // gap: 32px;
  }
`

const SliderHolder = styled.div`
  position: relative;
  padding: 0 0 24px;
  max-width: 414px;
  margin: 0 auto;
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 100%;
    padding: 0 29px 24px;
  }
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
`

const SPrevArrow = styled(SArrow)`
  left: -14px;

  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -14px;

  button {
    transform: translateX(-5px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  cursor: pointer;
  padding: 25px;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 17px;
    height: 17px;
    border-bottom: 1px solid #9059c8;
    border-left: 1px solid #9059c8;
    background-color: transparent;
  }
`

export function ShopByProductsOverview({ products, title }: ShopByProductsOverviewProps): React.ReactElement {
  const screenSize = useScreenSize()
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <SSection>
      <SContainer>
        <SCardsBlockTitle>{title}</SCardsBlockTitle>
        <SliderWrapper>
          {screenSize.greaterThanMedium ? (
            products &&
            products.map((product) => (
              <ShopByProductCard
                key={product.image + product.id}
                image={product.image}
                buttonLink={product.buttonLink}
                buttonText={product.buttonText}
                title={product.title}
              />
            ))
          ) : (
            <SliderHolder>
              <SPrevArrow>
                <SArrowButton
                  onClick={() => {
                    currentSlide > 1 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(products.length)
                  }}
                />
              </SPrevArrow>
              <SNextArrow>
                <SArrowButton
                  onClick={() => {
                    products.length > currentSlide ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(1)
                  }}
                />
              </SNextArrow>
              <SwipeableViews
                enableMouseEvents
                resistance
                index={currentSlide}
                onChangeIndex={(slideNumber: number) => {
                  if (slideNumber < 1) {
                    setCurrentSlide(products.length)
                    return
                  }
                  products.length >= slideNumber ? setCurrentSlide(slideNumber) : setCurrentSlide(1)
                }}
                style={{ overflow: 'visible' }}
                slideStyle={{ overflow: 'visible' }}
              >
                <div />
                {products &&
                  products.map((product) => (
                    <ShopByProductCard
                      key={product.image + product.id}
                      image={product.image}
                      buttonLink={product.buttonLink}
                      buttonText={product.buttonText}
                      title={product.title}
                    />
                  ))}
                <div />
              </SwipeableViews>
            </SliderHolder>
          )}
        </SliderWrapper>
      </SContainer>
    </SSection>
  )
}
