import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Product } from '@fragrantjewels/gravity-brands.modules.normalize-product'
import formatPrice from '@fragrantjewels/gravity-brands.modules.format-price'

export type { Product } from '@fragrantjewels/gravity-brands.modules.normalize-product'

export type ProductCardProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
  onClick: () => void
}

const ProductCardWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  flex-flow: column;
  height: 100%;

  @media (min-width: 500px) {
    padding: 5px 8px;
  }
`

const SProductCard = styled.div`
  height: 100%;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 13px 10px;
  text-align: center;
  font: 400 12px/1.3 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    padding: 12px 10px 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`

/*const SCircle = styled.div<{
  backgroundColor?: string
}>`
  font: 600 12px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  background-color: ${(props) => props.backgroundColor || '#9059c8'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  top: 4px;
  left: 4px;
  width: 42px;
  height: 42px;
  @media (min-width: 768px) {
    font: 600 14px/17px 'Montserrat', sans-serif;
    top: 10px;
    left: 10px;
    width: 55px;
    height: 55px;
  }

  & > span {
    color: #ffffff;
    text-transform: uppercase;
  }
`*/

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
  font: 500 10px/1.2 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  margin: 0 0 14px;
  background: linear-gradient(269.97deg, white 0.02%, #efefef 13.98%, #efefef 45.51%, #efefef 76.52%, white 99.26%);

  @media (min-width: 768px) {
    margin: 0 0 18px;
  }
`

const ProductCardMembers = styled.div`
  color: #9059c8;
  padding: 6px 0;
  text-transform: uppercase;
  font: 600 10px/1.2 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  margin: 0 0 12px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(269.97deg, white 0.02%, #efefef 13.98%, #efefef 45.51%, #efefef 76.52%, white 99.26%) 0
    0 100% 0;

  @media (min-width: 768px) {
    margin: 0 0 16px;
  }
`

const ProductCardTitle = styled.h4`
  font: 400 16px/1.3 'Montserrat', sans-serif;
  margin: 0 0 8px;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ProductCardType = styled.div`
  font: 500 10px/1.2 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #878787;
  margin: auto 0 14px;

  @media (min-width: 768px) {
    margin: auto 0 11px;
  }
`

const ProductCardStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;

  @media (min-width: 768px) {
    margin: 0 0 8px;
  }
`

const ProductCardStar = styled.div`
  margin: 0 1px;

  svg {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 767px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const SPriceLabel = styled.span`
  text-transform: uppercase;
  margin: 0 0 18px;
`

const SDiscountPriceLabel = styled(SPriceLabel)`
  text-decoration: line-through;
`

const ProductCardRatingLink = styled.div`
  font: 500 11px/13px 'Montserrat', sans-serif;
  margin: 0 0 1px 4px;
  text-decoration: none;
  color: black;
`

const ProductCardPrices = styled.div`
  font: 400 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  margin: 0 0 8px;

  @media (min-width: 768px) {
    margin: 0 0 16px;
  }
`

const ProductCardPrice = styled.div`
  margin: 0 1px;
  vertical-align: middle;
  display: inline-block;
`

export function ProductCard({ className, style, product, onClick }: ProductCardProps): React.ReactElement {
  const productTitle = product.title.split('-')[0].split(':')[0]
  const productType = product.product_type.split('(')[0]

  const label = {
    members: product.tags && product.tags.includes('Member Only'),
    silver: product.tags && product.tags.includes('925 Silver Sterling'),
  }

  const actualPrice = product.variants[0].actual_price
  const comparePrice = product.variants[0].compare_at_price

  return (
    <ProductCardWrapper className={cn('ProductCard', className)} style={style} onClick={onClick}>
      <SProductCard>
        {/*<SCircle backgroundColor={'#9059c8'}>
          <span>New</span>
        </SCircle>*/}
        <ProductCardImgWrapper>
          <ProductCardImgWrapperInner>
            <img src={product.image?.src} alt={product.image?.alt} />
          </ProductCardImgWrapperInner>
        </ProductCardImgWrapper>
        {label.silver ? (
          <ProductCardTag>925 Sterling Silver</ProductCardTag>
        ) : (
          label.members && <ProductCardMembers>Members Only</ProductCardMembers>
        )}
        <ProductCardStars>
          <ProductCardStar>
            <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                fill="#9059C8"
              />
            </svg>
          </ProductCardStar>
          <ProductCardStar>
            <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                fill="#9059C8"
              />
            </svg>
          </ProductCardStar>
          <ProductCardStar>
            <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                fill="#9059C8"
              />
            </svg>
          </ProductCardStar>
          <ProductCardStar>
            <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                fill="#9059C8"
              />
            </svg>
          </ProductCardStar>
          <ProductCardStar>
            <svg
              height="14px"
              width="14px"
              version="1.1"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#9059C8" />
                  <stop offset="50%" stopColor="#9059C8" />
                  <stop offset="50%" stopColor="#DADADA" />
                  <stop offset="50%" stopColor="#DADADA" />
                </linearGradient>
              </defs>
              <path
                d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                fill="url(#grad1)"
              />
            </svg>
          </ProductCardStar>
          <ProductCardRatingLink>102</ProductCardRatingLink>
        </ProductCardStars>
        <ProductCardTitle title={productTitle}>{productTitle}</ProductCardTitle>
        <ProductCardType>{productType}</ProductCardType>
        <ProductCardPrices>
          <ProductCardPrice>
            {comparePrice ? (
              <>
                <SDiscountPriceLabel>{formatPrice(actualPrice)}</SDiscountPriceLabel>{' '}
                <SPriceLabel>{formatPrice(comparePrice)}</SPriceLabel>
              </>
            ) : (
              <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
            )}
          </ProductCardPrice>
        </ProductCardPrices>
      </SProductCard>
    </ProductCardWrapper>
  )
}
