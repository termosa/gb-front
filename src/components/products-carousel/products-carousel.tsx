import React, { useContext, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import Carousel from 'react-multi-carousel'
import { Product as ProductType, Product } from '../../modules/normalize-product'
import Slider from '../../lib/slider'
import ProductCard from '../product-card'
import ProductContext from '../../modules/product-context'
import SwipeableViews from 'react-swipeable-views'
import { useScreenSize } from '../../lib/use-screen-size'
import AddToCartModal from '../add-to-cart-modal'
import { ProductVariant } from '../../modules/normalize-product-variant'
import trackAddedToCart from 'src/lib/track-added-to-cart'
import addCartItem from 'src/lib/add-cart-item'

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

const STitleUnderline = styled.span`
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 8px;
    background: rgba(77, 190, 186, 0.3);
    position: absolute;
    bottom: 6px;
    left: 0;
    z-index: -1;
  }
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

const ProductModalHeading = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0 0 10px;
`

const SPdpPiSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 0 12px;
`

const SPdpPiRsSelector = styled.div`
  text-align: center;
  color: #9059c8;
  margin: 0 0 12px;
`

const SPdpPiSelectorBtnHolder = styled.div`
  margin: 0 2px;
  position: relative;
  width: 100%;
  max-width: 50px;

  @media (min-width: 768px) {
    width: 45px;
    margin: 0 5px;
  }

  @media (min-width: 850px) {
    width: 48px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const SPdpPiSelectorBtn = styled.button<{
  isActive: boolean
}>`
  background: ${(props) => (props.isActive ? '#9059C8' : '#fff')};
  border: ${(props) => (props.isActive ? '0.5px solid #9059C8' : '0.5px solid #000')};
  padding: 10px 5px;
  font-size: 15px;
  min-width: 35px;
  margin: 0;
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  transition: all linear 0.3s;
  outline: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    @media (min-width: 1200px) {
      color: #fff;
      background: #9059c8;
      border-color: #9059c8;
    }
  }

  &:disabled {
    color: #dadada;
    border: 1px solid #dadada;
    pointer-events: none;
  }
`

const SPdpBtn = styled.button<{ disabled?: boolean }>`
  display: block;
  padding: 19px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0.5px solid #000;
  border-radius: 0;
  font: 600 16px/1 'Montserrat', sans-serif;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  width: 100%;
  margin: 0;
  height: 55px;

  ${(p) =>
    p.disabled
      ? css`
          background-color: #333;
          color: #ffffff;
          cursor: default;
        `
      : css`
          &:not(.pdp-btn_disabled):hover {
            @media (min-width: 1200px) {
              color: #000;
              background: #fff;
            }
          }

          &:focus {
            outline: 0;
          }
        `}
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
  const [choosedProduct, setChoosedProduct] = useState(useContext<ProductType>)
  const titleParts = title.split(' ')
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
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)

  const onChooseProduct = (product: Product) => {
    setChoosedProduct(product)
    setModalVisible(true)
  }

  const addToCartHandler = (selectedVariant: ProductVariant | null, isContinueFlag?: boolean) => {
    if (!selectedVariant) {
      localStorage.setItem('selectRingError', JSON.stringify(true))
      setSelectRingError(true)
      return
    }

    const addingRequest: Promise<unknown> = addCartItem(selectedVariant.variant_id)

    addingRequest
      .then(() => trackAddedToCart(choosedProduct))
      .then(() => {
        if (!isContinueFlag) {
          router.push('/cart')
        }
      })
      .catch((err: unknown) => alert(err))
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
            {/* <span>{title}</span> */}
            <span>{` ${titleParts.slice(0, 1).join(' ')}`}&nbsp;</span>
            <span>
              <STitleUnderline>{titleParts.slice(1, 3).join(' ')}</STitleUnderline>
            </span>
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
                      onProductButtonClick={() => {
                        onChooseProduct(product)
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
                        onProductButtonClick={() => {
                          onChooseProduct(product)
                        }}
                      />
                    )
                  })}
              </SSwipeableViews>
            </>
          )}
        </SliderHolder>
      </Container>
      <AddToCartModal isModalShow={isModalVisible} setModal={setModalVisible}>
        {choosedProduct && choosedProduct.product_id && (
          <div>
            <ProductModalHeading>
              Select {choosedProduct.type} a{' '}
              {choosedProduct.type && choosedProduct.type.toLowerCase() === 'ring' ? 'ring size' : 'jewelry type'} to
              add this item to your cart:
            </ProductModalHeading>
            <React.Fragment>
              <SPdpPiSelector>
                {choosedProduct.variants.map(
                  (variant: ProductVariant) =>
                    variant.size && (
                      <SPdpPiSelectorBtnHolder key={variant.size}>
                        <SPdpPiSelectorBtn
                          isActive={variant.variant_id === selectedVariant?.variant_id}
                          type="button"
                          value={variant.size}
                          onClick={() => {
                            setSelectRingError(false)
                            localStorage.setItem('selectRingError', JSON.stringify(false))
                            localStorage.setItem('currentRingSize', JSON.stringify(variant.variant_id))
                            setSelectedVariant(variant)
                          }}
                          disabled={!variant.available}
                        >
                          {variant.title}
                        </SPdpPiSelectorBtn>
                      </SPdpPiSelectorBtnHolder>
                    )
                )}
              </SPdpPiSelector>
              {isSelectRingError ? <SPdpPiRsSelector>Please select ring size</SPdpPiRsSelector> : null}
              <SPdpBtn type="button" onClick={() => addToCartHandler(selectedVariant)}>
                Add to Cart
              </SPdpBtn>
              <SPdpBtn type="button" onClick={() => addToCartHandler(selectedVariant, true)}>
                Add to Cart and continue
              </SPdpBtn>
            </React.Fragment>
          </div>
        )}
      </AddToCartModal>
    </Section>
  )
}
