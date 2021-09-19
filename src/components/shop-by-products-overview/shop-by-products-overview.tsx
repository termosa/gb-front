import React from 'react'
import styled from 'styled-components'
import ShopByProductCard, { ShopByProductCardProps } from '../shop-by-product-card'
import Slider from '../../lib/slider'
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
    padding: 82px 0 28px;
    margin: 0 0 97px;
  }
`

const SContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }

  .react-multi-carousel-item {
    margin-bottom: 24px;
  }
`

const SCardsBlockTitle = styled.h2`
  font: 700 40px/1.2 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 20px;
`

const SliderWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    margin: 0 -16px;
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
`

const SPrevArrow = styled(SArrow)`
  left: 7px;

  @media (min-width: 481px) {
    left: 75px;
  }

  @media (min-width: 600px) {
    left: 125px;
  }

  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: 7px;

  @media (min-width: 481px) {
    right: 75px;
  }

  @media (min-width: 600px) {
    right: 125px;
  }

  button {
    transform: translateX(-5px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export function ShopByProductsOverview({ products, title }: ShopByProductsOverviewProps): React.ReactElement {
  const screenSize = useScreenSize()
  return (
    <SSection>
      <SContainer>
        <SCardsBlockTitle>{title}</SCardsBlockTitle>
        <SliderWrapper>
          {screenSize.greaterThanLarge ? (
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
            <Slider
              arrows
              infinite
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
            >
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
            </Slider>
          )}
        </SliderWrapper>
      </SContainer>
    </SSection>
  )
}
