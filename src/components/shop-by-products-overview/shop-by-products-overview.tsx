import React from 'react'
import styled from 'styled-components'
import { ShopByProductCard, ShopByProductCardProps } from '../shop-by-product-card'
import { Slider } from '../../lib/slider'
import { useScreenSize } from '../../lib/use-screen-size'

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
  padding: 52px 0 66px;
  @media (min-width: 768px) {
    padding: 82px 0 60px;
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
    margin-bottom: 17px;
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
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 0 -16px;
  }
`

const SPrevArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  transform: rotate(45deg);
  left: 125px;
`
const SNextArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  transform: rotate(-135deg);
  right: 125px;
`

export function ShopByProductsOverview({ products, title }: ShopByProductsOverviewProps): React.ReactElement {
  const screenSize = useScreenSize()
  return (
    <SSection>
      <SContainer>
        <SCardsBlockTitle>{title}</SCardsBlockTitle>
        <SliderWrapper>
          {screenSize.greaterThenMedium ? (
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
            <Slider arrows infinite customLeftArrow={<SPrevArrow />} customRightArrow={<SNextArrow />}>
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
