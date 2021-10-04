import React, { useContext, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import Carousel from 'react-multi-carousel'
import { Product as ProductType, Product } from '../../modules/normalize-product'
import Slider from '../../lib/slider'
import ProductCard from '../product-card'
import ProductContext from '../../modules/product-context'
import SwipeableViews from 'react-swipeable-views'
import { useScreenSize } from '../../lib/use-screen-size'

const Section = styled.section`
  margin: 0 0 43px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin: 30px 0 60px;
  }

  @media (min-width: 992px) {
    margin: 30px 0 85px;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  position: relative;
  max-width: 990px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
  }

  @media (min-width: 992px) {
    padding: 0 15px;
  }
`
const SectionTitleProduct = styled.h2`
  font: 600 16px/1.5 'Montserrat', serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 12px;

  @media (min-width: 768px) {
    font: 700 40px/1 'Cormorant Garamond', serif;
    text-transform: initial;
    margin: 0 0 28px;
  }

  & > span {
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 9px;
      background: rgba(77, 190, 186, 0.3);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;

      @media (min-width: 768px) {
        height: 10px;
        bottom: 6px;
      }
    }
  }
`

const SectionTitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 0 12px;
`

const SectionText = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;

  p {
    margin: 0 0 24px;
    @media (min-width: 768px) {
      margin: 0 0 30px;
    }
    @media (min-width: 992px) {
      margin: 0 0 22px;
    }
  }

  &_narrow {
    max-width: 400px;
    margin: 0 auto;
  }
`

const SArrow = styled.div`
  display: none;

  @media (min-width: 768px) {
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
  }
`

const SPrevArrow = styled(SArrow)`
  left: -30px;

  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -30px;

  button {
    transform: translateX(-5px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  border: 0;
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

const SliderHolder = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 100%;
    margin: 0;
    padding: 40px 0 40px;
    margin-top: -40px;
    overflow: inherit;
  }

  @media (min-width: 992px) {
    padding: 45px 0 45px;
    margin-top: -45px;
  }

  .react-multi-carousel-list {
    position: relative;
  }
`

const SSwipeableViews = styled(SwipeableViews)`
  padding: 0 20px;
`

export type ProductsCarouselProps = {
  products: Array<Product>
  className?: ClassName
  title?: string
  titleHighlighted?: string
  subTitle?: string
  onSelectProduct: (product: Product) => void
}

export const ProductsCarousel = ({
  products,
  className,
  onSelectProduct,
  title,
  subTitle,
}: ProductsCarouselProps): React.ReactElement => {
  const router = useRouter()
  const carouselRef = useRef<Carousel>(null)
  const screenSize = useScreenSize()
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentProduct = useContext<ProductType | undefined>(ProductContext)
  const sliderSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  }

  return (
    <Section className={cn('ProductsCarousel', className)}>
      <Container>
        {router.pathname.startsWith('/products/') ? (
          <SectionTitleProduct>
            <span>{title}</span>
          </SectionTitleProduct>
        ) : (
          <SectionTitle>
            <span>{title}</span>
          </SectionTitle>
        )}
        <SectionText>
          <p>{subTitle}</p>
        </SectionText>
        <SliderHolder>
          <SPrevArrow>
            <SArrowButton
              onClick={() => {
                carouselRef.current && carouselRef.current.previous(products.length >= 4 ? 2 : 1)
              }}
            />
          </SPrevArrow>
          <SNextArrow>
            <SArrowButton
              onClick={() => {
                carouselRef.current && carouselRef.current.next(products.length >= 4 ? 2 : 1)
              }}
            />
          </SNextArrow>
          {screenSize.greaterThanMedium ? (
            <Slider
              responsive={sliderSettings}
              scrollbarPresent={true}
              arrows={false}
              slidesToSlide={2}
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
              carouselRef={carouselRef}
              partiallyVisible={true}
              infinite={true}
            >
              {products
                .filter((product) => product.image && product.product_id !== currentProduct?.product_id)
                .map((product) => {
                  return (
                    <ProductCard
                      key={product.product_id}
                      product={product}
                      imagesVisibleByDefault
                      onClick={() => {
                        onSelectProduct(product)
                      }}
                    />
                  )
                })}
            </Slider>
          ) : (
            <>
              <SSwipeableViews
                enableMouseEvents
                resistance
                index={currentSlide}
                slideStyle={screenSize.greaterThanSmall ? { width: '38%' } : { width: '50%' }}
                onChangeIndex={(slideNumber) => {
                  if (products.length / 2 > slideNumber) {
                    setCurrentSlide(slideNumber)
                  } else {
                    setCurrentSlide(0)
                  }
                }}
              >
                {products
                  .filter((product) => product.image && product.product_id !== currentProduct?.product_id)
                  .map((product) => {
                    return (
                      <ProductCard
                        key={product.product_id}
                        product={product}
                        imagesVisibleByDefault
                        onClick={() => {
                          onSelectProduct(product)
                        }}
                      />
                    )
                  })}
              </SSwipeableViews>
            </>
          )}
        </SliderHolder>
      </Container>
    </Section>
  )
}
