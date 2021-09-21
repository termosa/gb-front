import React from 'react'

import styled, { css } from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import { Product } from '../../modules/normalize-product'
import Slider from '../../lib/slider'
import Image from '../../lib/image'
import useScreenSize from '../../lib/use-screen-size'

export type { Product } from '../../modules/normalize-product'

export type TrendingSectionProps = {
  products: Array<Product>
  className?: ClassName
  onSelectProduct: (productId: number) => void
}

const Section = styled.section`
  margin: 0 0 20px;
  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const SectionTitle = styled.div`
  font: 700 30px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 10px;
  @media (min-width: 375px) {
    font-size: 32px;
  }
  & > span {
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
  }
`

const SectionText = styled.div`
  text-align: center;
  padding-bottom: 5px;
  p {
    margin: 0 0 10px;
  }
  &_narrow {
    max-width: 400px;
    margin: 0 auto;
  }
`

const ProductCards = styled.div`
  max-width: 450px;
  margin: 10px auto 15px;
  position: relative;
  @media (min-width: 768px) {
    max-width: 100%;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`

const StyledSlider = styled.div`
  margin: 0 -15px;
  padding-left: 10px;
  @media (min-width: 500px) {
    margin: 0;
    padding-left: 0;
  }
  .slick-list {
    padding: 0 7% 0 0;
    @media (min-width: 500px) {
      padding: 0;
    }
  }
  .slick-track {
    display: flex;
  }
  .app-h-product-card {
    float: none;
    height: auto;
    display: flex;
  }
`

const SProductCard = styled.div`
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 13px 10px;
  text-align: center;
  font: 400 12px/1.3 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* margin: 5px; */
  @media (min-width: 768px) {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    padding: 12px 10px 24px;
  }
  ${(props: { newProduct?: boolean }) =>
    props.newProduct &&
    css`
      &:before {
        content: 'New';
        width: 40px;
        height: 40px;
        font-size: 10px;
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: purple;
        border-radius: 50%;
        color: white;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        z-index: 2;
        @media (min-width: 768px) {
          width: 50px;
          height: 50px;
          top: 12px;
          left: 12px;
          font-size: 12px;
        }
      }
    `}
  img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: contain;
    object-fit: contain;
  }
`

const ProductCardImgWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const ProductCardImgWrapperInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  display: flex;
  transform: translate(-50%, -50%);
`

const ProductCardTag = styled.div`
  text-transform: uppercase;
  padding: 6px 0;
  color: #878787;
  font-size: 8px;
  font-weight: 500;
  margin: 0 0 10px;
  background: linear-gradient(269.97deg, white 0.02%, #efefef 13.98%, #efefef 45.51%, #efefef 76.52%, white 99.26%);
  @media (min-width: 768px) {
    margin: 0 0 18px;
  }
`

const ProductCardMembers = styled.div`
  color: #9059c8;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  margin: 0 0 7px;
  @media (min-width: 768px) {
    margin: 0 0 15px;
  }
`

const ProductCardTitle = styled.h4`
  font-weight: 400;
  margin: 0 0 10px;
  padding: 0 5px;
  height: 45px;
  @media (min-width: 768px) {
    height: 30px;
    margin: 0 0 18px;
  }
`

const ProductCardStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 7px;
  @media (min-width: 768px) {
    margin: 0 0 15px;
  }
`

const ProductCardStar = styled.div`
  margin: 0 1px;
  max-width: 15px;
  svg {
    width: 100%;
    height: auto;
  }
  @media (max-width: 767px) {
    max-width: 12px;
  }
`

const ProductCardRatingLink = styled.div`
  font-size: 9px;
  margin: 0 0 1px 4px;
  text-decoration: none;
  color: black;
`

const ProductCardPrices = styled.div`
  margin: 0 0 17px;
`

const ProductCardPrice = styled.div`
  margin: 0 1px;
  vertical-align: middle;
  display: inline-block;
`

const ProductCardWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  @media (min-width: 500px) {
    padding: 5px 8px;
  }
`

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const screenSize = useScreenSize()
  if (!product.image) return null
  return (
    <ProductCardWrapper onClick={onClick}>
      <SProductCard>
        <div>
          <ProductCardImgWrapper>
            <ProductCardImgWrapperInner>
              {product.image && (
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  draggable={false}
                  shopifySize={screenSize.greaterThanMedium ? 'medium' : 'compact'}
                />
              )}
            </ProductCardImgWrapperInner>
          </ProductCardImgWrapper>
          <ProductCardTag>925 Sterling Silver</ProductCardTag>
          <ProductCardMembers>Members Only</ProductCardMembers>
          <ProductCardTitle>{product.title}</ProductCardTitle>
        </div>
        <div>
          <ProductCardStars>
            <ProductCardStar>
              <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                  fill="#9059C8"
                />
              </svg>
            </ProductCardStar>
            <ProductCardStar>
              <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                  fill="#9059C8"
                />
              </svg>
            </ProductCardStar>
            <ProductCardStar>
              <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                  fill="#9059C8"
                />
              </svg>
            </ProductCardStar>
            <ProductCardStar>
              <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                  fill="#9059C8"
                />
              </svg>
            </ProductCardStar>
            <ProductCardStar>
              <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0.388889"
                    y1="6.11111"
                    x2="14.6111"
                    y2="6.11111"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#9059C8" />
                    <stop offset="0.5001" stopColor="#DADADA" />
                    <stop offset={1} stopColor="#DADADA" />
                  </linearGradient>
                </defs>
              </svg>
            </ProductCardStar>
            <ProductCardRatingLink>102</ProductCardRatingLink>
          </ProductCardStars>
          <ProductCardPrices>
            <ProductCardPrice>${product.variants[0].actual_price}</ProductCardPrice>
          </ProductCardPrices>
        </div>
      </SProductCard>
    </ProductCardWrapper>
  )
}

export const TrendingSection = ({ products, className, onSelectProduct }: TrendingSectionProps): React.ReactElement => {
  return (
    <Section className={cn('TrendingSection', className)}>
      <Container>
        <SectionTitle>What’s trending</SectionTitle>
        <SectionText>
          <p>Shop our newest and best selling collections.</p>
        </SectionText>
        <ProductCards>
          <StyledSlider>
            <Slider partiallyVisible={true} arrows={true}>
              {products.map((product) => (
                <ProductCard
                  key={product.product_id}
                  product={product}
                  onClick={() => onSelectProduct(product.product_id)}
                />
              ))}
            </Slider>
          </StyledSlider>
          {/*          <ProgressWrapper>
            <Progress progress={progress}>
              <ProgressLabel>{`${progress}% completed`}</ProgressLabel>
            </Progress>
          </ProgressWrapper>*/}
        </ProductCards>
      </Container>
    </Section>
  )
}
