import React from 'react'
import {
  ShopByProductCard,
  ShopByProductCardProps,
} from '@fragrantjewels/gravity-brands.components.shop-by-product-card'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'

export type ShopByProductsOverviewProps = {
  /**
   * cards to be rendered inside component
   */
  products: Array<ShopByProductCardProps>
}

const SSection = styled.section`
  font: 12px/1.3 'Montserrat', sans-serif;
  padding: 40px 0 30px;
  @media (min-width: 768px) {
    padding: 72px 0 90px;
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

const STitle = styled.h2`
  font: 700 30px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 10px;

  @media (min-width: 375px) {
    font-size: 32px;
  }
`

const PrevArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(45deg);
  left: 1px;
  font-size: 0;
  z-index: 13;
  top: 47%;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`

const NextArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(-135deg);
  right: 1px;
  font-size: 0;
  z-index: 13;
  top: 47%;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
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
    padding: 10px 0;
    margin: 0 auto;
    max-width: 414px;
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;

    @media (min-width: 768px) {
      max-width: 100%;
      padding: 10px 0;
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

  .slick-slider .slick-track {
    padding: 5px 0 20px;
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
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track: after {
    clear: both;
  }

  .slick-slide {
    outline: none;
    position: relative;
    margin: 0 0 50px;
    height: 100%;
    min-height: 1px;
    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .slick-slider .slick-slide {
    margin: 0 25px;
    @media (min-width: 768px) {
      margin: 0 16px;
    }
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-style: none;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`

export function ShopByProductsOverview({ products }: ShopByProductsOverviewProps) {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        },
      },
    ],
  }
  return (
    <SSection>
      <SContainer>
        <STitle>Shop by Product</STitle>
        <SliderWrapper>
          <Slider {...settings}>
            {products.map((product) => (
              <ShopByProductCard image={product.image} className={'slick-slide'} />
            ))}
          </Slider>
        </SliderWrapper>
      </SContainer>
    </SSection>
  )
}