import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Product } from '../../modules/normalize-product'
import formatPrice from '../../modules/format-price'
import getLabel from '../../modules/get-label'
import StarRating from '../../lib/star-rating'
import Image from '../../lib/image'
import useScreenSize from '../../lib/use-screen-size'

export type ProductCardProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
  onClick: () => void
}

const ProductCardWrapper = styled.div`
  padding: 4px;
  cursor: pointer;
  flex-flow: column;
  height: 100%;

  @media (min-width: 768px) {
    padding: 4px 8px;
  }
`

const SProductCard = styled.div`
  width: auto;
  height: 100%;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 4px;
  text-align: center;
  font: 400 12px/1.3 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    padding: 12px 10px 0;
    height: 100%;
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

  &:after {
    content: '';
    display: block;
  }
`

const ProductCardImgWrapperInner = styled.div`
  width: 100%;
  position: relative;
  left: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, 0);

  img {
    width: 100%;
    max-height: 178px;
    cursor: pointer;
  }
`

const ProductCardTag = styled.div<{
  isVisible?: boolean
  color?: string
}>`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  text-transform: uppercase;
  padding: 6px 0;
  color: ${(props) => props.color || '#878787'};
  font: 500 10px/1.2 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  margin: 0 0 14px;
  background: linear-gradient(269.97deg, white 0.02%, #efefef 13.98%, #efefef 45.51%, #efefef 76.52%, white 99.26%);

  @media (min-width: 768px) {
    margin: 0 0 17px;
  }
`

/*const ProductCardMembers = styled.div`
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
`*/

const ProductCardTitle = styled.h4`
  font: 400 16px/1.3 'Montserrat', sans-serif;
  margin: 0 0 8px;
  padding: 0 5px;
  height: 40px;
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
  height: 17px;

  @media (min-width: 768px) {
    margin: 0 0 8px;
  }

  .text-m {
    display: none;
  }
`

/*const ProductCardStar = styled.div`
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
`*/

const SPriceLabel = styled.span`
  text-transform: uppercase;
  margin: 0 0 18px;
`

const SDiscountPriceLabel = styled(SPriceLabel)`
  text-decoration: line-through;
`

/*const ProductCardRatingLink = styled.div`
  font: 500 11px/13px 'Montserrat', sans-serif;
  margin: 0 0 1px 4px;
  text-decoration: none;
  color: black;
`*/

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
  const screenSize = useScreenSize()
  const [isMouseMoved, setMouseMoved] = useState<boolean>(false)

  const productTitle = product.title.split('-')[0].split(':')[0]
  const productType = product.type.split('(')[0]

  const label = getLabel(product)

  const checkForLabel = (): React.ReactElement => {
    /*if (label.members) {
      return <ProductCardMembers>Members Only</ProductCardMembers>
    }*/

    if (label.silver) {
      return (
        <ProductCardTag isVisible={true} color={'#878787'}>
          925 Sterling Silver
        </ProductCardTag>
      )
    } else {
      return <ProductCardTag isVisible={false}>-</ProductCardTag>
    }
  }

  const actualPrice = product.variants[0].actual_price
  const comparePrice = product.variants[0].compare_at_price

  return (
    <ProductCardWrapper
      className={cn('ProductCard', className)}
      style={style}
      onMouseDown={() => setMouseMoved(false)}
      onMouseMove={() => setMouseMoved(true)}
      onClick={(e) => (!isMouseMoved && e.type === 'click' ? onClick() : null)}
    >
      <SProductCard>
        {/*<SCircle backgroundColor={'#9059c8'}>
          <span>New</span>
        </SCircle>*/}
        <ProductCardImgWrapper>
          <ProductCardImgWrapperInner>
            {product.image && (
              <Image
                src={product.image.src}
                alt={product.image?.alt}
                draggable={false}
                shopifySize={screenSize.greaterThanSmall ? 'large' : 'medium'}
              />
            )}
          </ProductCardImgWrapperInner>
        </ProductCardImgWrapper>
        <div>
          {checkForLabel()}
          <ProductCardStars>
            <StarRating reviewsAverage={product.reviewsAverage} reviewsCount={product.reviewsCount} />
          </ProductCardStars>
          <ProductCardTitle title={productTitle}>{productTitle}</ProductCardTitle>
          <ProductCardType>{productType}</ProductCardType>
          <ProductCardPrices>
            <ProductCardPrice>
              {comparePrice ? (
                <>
                  <SDiscountPriceLabel>{formatPrice(comparePrice)}</SDiscountPriceLabel>{' '}
                  <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
                </>
              ) : (
                <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
              )}
            </ProductCardPrice>
          </ProductCardPrices>
        </div>
      </SProductCard>
    </ProductCardWrapper>
  )
}
