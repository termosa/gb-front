import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Product } from '../../modules/normalize-product'
import formatPrice from '../../modules/format-price'
import getLabel from '../../modules/get-label'
import Image from '../../lib/image'
import useScreenSize from '../../lib/use-screen-size'
// import YotpoStarRating from '../../lib/yotpo-star-rating'
import AddProductToCartForm from '../../lib/add-product-to-cart-form'
import ReactDOM from 'react-dom'
import window from '../../lib/window'
import StampedStarRating from '../../lib/stamped-star-rating'

export type ProductCardProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
  imagesVisibleByDefault?: boolean
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
  padding: 0;
  text-align: center;
  font: 400 12px/1.3 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    padding: 12px;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`

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

    @media (min-width: 768px) {
      max-height: 222px;
    }
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
  margin: 0 0 10px;
  padding: 0 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const ProductCardType = styled.div`
  font: 500 10px/1.2 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #878787;
  margin: auto 0 14px;

  @media (min-width: 768px) {
    margin: auto 0 13px;
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
`

/*const ProductCardStar = styled.div`
  margin: 0 1px;

  svg {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 768px) {
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
    margin: 0 0 10px;
  }
`

const ProductCardPrice = styled.div`
  margin: 0 1px;
  vertical-align: middle;
  display: inline-block;
`

const SImage = styled(Image)`
  min-height: 110px;
`

const ProductCardButton = styled.button`
  background: #fff;
  color: #000;
  padding: 17px 15px;
  width: 100%;
  border: 0;
  border-top: 1px solid #000;
  margin: 0;
  text-transform: uppercase;
  appearance: none;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all linear 0.2s;
  font: 400 13px/1 'Montserrat', sans-serif;

  @media (min-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    border: 1px solid #000;
  }

  @media (min-width: 1200px) {
    &:not([disabled]):hover {
      background-color: #000;
      color: #fff;
    }
  }

  [disabled] {
    cursor: auto;
    border-color: #ddd;
    background: #ddd;
  }
`

export function ProductCard({
  className,
  style,
  product,
  imagesVisibleByDefault,
  onClick,
}: ProductCardProps): React.ReactElement {
  const screenSize = useScreenSize()
  const [isMouseMoved, setMouseMoved] = useState<boolean>(false)
  const [clientXClick, setClientXClick] = useState<number>()

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

  const [isModalVisible, changeModalVisible] = useState(false)

  const openModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation()
    changeModalVisible(true)
  }

  return (
    <ProductCardWrapper
      className={cn('ProductCard', className)}
      style={style}
      onMouseDown={(e) => {
        setClientXClick(e.clientX)
        setMouseMoved(false)
      }}
      onMouseUp={(e) => {
        const movedDistance = clientXClick ? clientXClick - e.clientX : 0
        if (movedDistance < -15 || movedDistance > 15) {
          setMouseMoved(true)
        }
      }}
      onClick={(e) => (!isMouseMoved && e.type === 'click' ? onClick() : null)}
    >
      <SProductCard>
        <ProductCardImgWrapper>
          <ProductCardImgWrapperInner>
            {product.image && (
              <SImage
                src={product.image.src}
                alt={product.image?.alt}
                visibleByDefault={imagesVisibleByDefault}
                draggable={false}
                width={280}
                shopifySize={screenSize.greaterThanSmall ? 'large' : 'medium'}
              />
            )}
          </ProductCardImgWrapperInner>
        </ProductCardImgWrapper>
        <div>
          {checkForLabel()}
          <ProductCardStars>
            <StampedStarRating productId={product.product_id} />
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
        <ProductCardButton type="button" onClick={(e) => openModal(e)}>
          Add to Cart
        </ProductCardButton>
        {window && screenSize.width && (screenSize.lessThanLarge || screenSize.greaterThanExtraLarge) ? (
          ReactDOM.createPortal(
            <AddProductToCartForm
              isModalShow={isModalVisible}
              onClose={() => changeModalVisible(false)}
              product={product}
            />,
            document.body
          )
        ) : (
          <AddProductToCartForm
            isModalShow={isModalVisible}
            onClose={() => changeModalVisible(false)}
            product={product}
          />
        )}
      </SProductCard>
    </ProductCardWrapper>
  )
}
