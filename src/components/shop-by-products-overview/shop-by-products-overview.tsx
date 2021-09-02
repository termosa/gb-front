import React from 'react'
import styled from 'styled-components'
import { ShopByProductCard, ShopByProductCardProps } from '../shop-by-product-card'
import { CarouselSlider } from '../../lib/carousel-slider'

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
    margin: 0 -16px;
  }

  .slick-slider {
    opacity: 1;
    padding: 10px 0 0;
    margin: 0 auto;
    max-width: 414px;
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;

    @media (min-width: 768px) {
      max-width: 100%;
      padding: 8px 0 0;
    }
  }

  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      flex-wrap: wrap;
      width: 100% !important;
      justify-content: space-evenly;
    }
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';

    @media (min-width: 768px) {
      display: none;
    }
  }

  .slick-track:after {
    clear: both;
  }

  .slick-track > .slick-slide {
    margin: 0 0 20px;
    @media (min-width: 768px) {
      margin: 0 16px 55px;
    }
  }

  .slick-slide {
    outline: none;
    position: relative;
    margin: 0 0 10px;
    height: 100%;
    min-height: 1px;
    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      width: auto !important;
    }
  }

  .slick-prev {
    left: -2px;
    @media (min-width: 375px) {
      left: 9px;
    }
    @media (min-width: 500px) {
      left: -12px;
    }
  }

  .slick-next {
    right: -2px;
    @media (min-width: 375px) {
      right: 9px;
    }
    @media (min-width: 500px) {
      right: -12px;
    }
  }
`

export function ShopByProductsOverview({ products, title }: ShopByProductsOverviewProps): React.ReactElement {
  return (
    <SSection>
      <SContainer>
        <SCardsBlockTitle>{title}</SCardsBlockTitle>
        <SliderWrapper>
          <CarouselSlider arrows={false}>
            {products &&
              products.map((product) => (
                <ShopByProductCard
                  key={product.image + product.id}
                  image={product.image}
                  buttonLink={product.buttonLink}
                  buttonText={product.buttonText}
                  className={'slick-slide'}
                  title={product.title}
                />
              ))}
          </CarouselSlider>
        </SliderWrapper>
      </SContainer>
    </SSection>
  )
}
