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
  padding: 0 15px;
  margin: 0 auto;
  overflow: inherit;

  .react-multi-carousel-list {
    max-width: 334px;
    margin: 0 auto;
    padding-bottom: 24px;
    position: relative;

    @media (min-width: 375px) {
      max-width: 346px;
    }

    @media (min-width: 768px) {
      max-width: 990px;
    }
  }
`

const SCardsBlockTitle = styled.h2`
  font: 700 32px/1.2 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const SliderWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
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
  left: -15px;

  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -15px;

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
