import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '@fragrantjewels/gravity-brands.components.button'
import RingSize from '@fragrantjewels/gravity-brands.components.ring-size'
import formatPrice from '@fragrantjewels/gravity-brands.modules.format-price'

export type Variant = {
  title: string
  variant_id: number
  position: number
  actual_price: number
  compare_at_price: number
  inventory_quantity: number
}

export type Product = {
  title: string
  front_image: {
    src: string
  }
  side_images: [
    {
      id: number
      src: string
    }
  ]
  variants: Array<Variant>
}

export type InnerCircleExclusiveProps = {
  className?: ClassName
  product: Product
  onReserve: (variant: Variant) => void
}

const SWrapper = styled.div``

const STitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 100%;
  }
`

const STitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 16px;
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
  }
`

const SSubTitle = styled.div`
  box-sizing: border-box;
  text-align: center;
  font: 16px/1.5 'Montserrat', sans-serif;
  white-space: break-spaces;
  padding-bottom: 22px;
  max-width: 400px;
  margin: 0 auto;
`

const SButtonWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`

const SContentWrapper = styled.div`
  margin: 0 0 10px 0;
  padding: 29px 0 25px;
  box-sizing: border-box;
  font: 12px/ 1.3 'Montserrat', sans-serif;
  background-color: #fdfbf9;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fdfbf9),
    color-stop(83%, #fdfbf9),
    color-stop(83%, white),
    to(white)
  );
  background: linear-gradient(0deg, #fdfbf9 0%, #fdfbf9 83%, white 83%, white 100%);

  @media (min-width: 992px) {
    padding: 29px 0 45px;
    margin: 0 0 32px 0;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#fdfbf9),
      color-stop(86%, #fdfbf9),
      color-stop(86%, white),
      to(white)
    );
    background: linear-gradient(0deg, #fdfbf9 0%, #fdfbf9 86%, white 86%, white 100%);
  }
`

const SContentContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const SContent = styled.div`
  margin: 0 auto;
  @media (min-width: 992px) {
    margin: 0 -20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
`

const SImagesWrapper = styled.div`
  @media (min-width: 768px) {
    margin: 0 2% 35px;
  }

  @media (min-width: 992px) {
    width: 100%;
    margin: 0 20px;
  }
`

const SImagesContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto 25px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;

  @media (min-width: 992px) {
    max-width: 100%;
    margin: 0;
  }
`

const SLeftSliderPart = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 43%;

  @media (min-width: 992px) {
    max-width: 248px;
  }
`

const SLeftImageContainer = styled.div`
  margin: 0 0 10px;
  padding: 5px;
  box-sizing: border-box;
  background: #fff;

  & > img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const SSliderButton = styled.button`
  opacity: 0.8;
  border: 0.5px solid #9059c8;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  background: transparent;
  font-size: 0;
  line-height: 1;
  margin: 0 5px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  @media (min-width: 992px) {
    width: 46px;
    height: 46px;
  }
  & > span {
    position: absolute;
    left: 50%;
    top: 31%;
    display: block;
    width: 13px;
    height: 13px;
    border-top: 1px solid #9059c8;
    border-left: 1px solid #9059c8;
  }
  @media (min-width: 992px) {
    & > span {
      top: 30%;
      width: 17px;
      height: 17px;
    }
  }
`

const SPrevButton = styled(SSliderButton)`
  & > span {
    left: 41%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media (min-width: 992px) {
    & > span {
      left: 42%;
    }
  }
`

const SNextButton = styled(SSliderButton)`
  & > span {
    left: 23%;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  @media (min-width: 992px) {
    & > span {
      left: 24%;
    }
  }
`

const SRightSliderPart = styled.div`
  max-width: 62%;

  & > img {
    margin-right: 0;
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 768px) {
    max-width: 310px;
  }

  @media (min-width: 992px) {
    max-width: 400px;
  }
`

const SDetailsWrapper = styled.div`
  @media (min-width: 992px) {
    margin: 0 20px;
  }
`

const SDetailsContainer = styled.div`
  text-align: center;
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: 992px) {
    text-align: left;
    width: 300px;
  }
`

const SInnerCircleLabel = styled.strong`
  font-size: 16px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9059c8;
  font-weight: 600;
  margin: 0 0 3px;
  display: block;
`

const SProductTitle = styled.h3`
  font-size: 32px;
  margin: 0 0 12px;
  font-family: 'Cormorant Garamond', serif;
`

const SPricesContainer = styled.div`
  font: 16px/ 1.3 'Montserrat', sans-serif;
`

const SPriceLabel = styled.span`
  text-transform: uppercase;
  margin: 0 0 18px;
`

const SDiscountPriceLabel = styled(SPriceLabel)`
  text-decoration: line-through;
`

const SSelectRingLabel = styled.strong`
  font-weight: 400;
  margin: 18px 0 16px;
  display: block;
`

const SRingSizeWrapper = styled.div``

const STaxInfo = styled.div`
  font-size: 12px;
  text-align: center;
  color: #878787;
`

export function InnerCircleExclusive({
  className,
  product,
  onReserve,
}: InnerCircleExclusiveProps): React.ReactElement | null {
  const [selectedVariant, setVariant] = useState<Variant | undefined>()

  const actualPrice = (selectedVariant || product.variants[0]).actual_price
  const comparePrice = (selectedVariant || product.variants[0]).compare_at_price

  return (
    <SWrapper className={cn('InnerCircleExclusive', className)}>
      <STitleWrapper>
        <STitle>
          <span>
            <STitleUnderline>Get addicted</STitleUnderline>
          </span>
          <span> to me-time</span>
        </STitle>
        <SSubTitle>
          Join the Inner Circle for exciting new collections every month, available exclusively to members
        </SSubTitle>
        <SButtonWrapper>
          <Button>GET STARTED</Button>
        </SButtonWrapper>
      </STitleWrapper>
      <SContentWrapper>
        <SContentContainer>
          <SContent>
            <SImagesWrapper>
              <SImagesContainer>
                <SLeftSliderPart>
                  <SLeftImageContainer>
                    <img src={product.side_images[0].src} alt={product.title} />
                  </SLeftImageContainer>
                  {product.side_images.length > 1 ? (
                    <React.Fragment>
                      <SPrevButton>
                        <span>Prev</span>
                      </SPrevButton>
                      <SNextButton>
                        <span>Next</span>
                      </SNextButton>
                    </React.Fragment>
                  ) : null}
                </SLeftSliderPart>
                <SRightSliderPart>
                  <img src={product.front_image.src} alt={product.title} />
                </SRightSliderPart>
              </SImagesContainer>
            </SImagesWrapper>
            <SDetailsWrapper>
              <SDetailsContainer>
                <SInnerCircleLabel>INNER CIRCLE EXCLUSIVE</SInnerCircleLabel>
                <SProductTitle>{product.title}</SProductTitle>
                <SPricesContainer>
                  {comparePrice ? (
                    <>
                      <SDiscountPriceLabel>{formatPrice(actualPrice)}</SDiscountPriceLabel>{' '}
                      <SPriceLabel>{formatPrice(comparePrice)}</SPriceLabel>
                    </>
                  ) : (
                    <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
                  )}{' '}
                  + FREE SHIPPING
                  <SSelectRingLabel>Select a ring size to reserve this box:</SSelectRingLabel>
                  <SRingSizeWrapper>
                    <RingSize variants={product.variants} onChange={setVariant} />
                  </SRingSizeWrapper>
                  <Button
                    compact={false}
                    frontColor={'#fff'}
                    backColor={'#000'}
                    style={{ width: '100%', marginBottom: 18 }}
                    disabled={!selectedVariant}
                    onClick={() => selectedVariant && onReserve(selectedVariant)}
                  >
                    RESERVE NOW
                  </Button>
                </SPricesContainer>
                <STaxInfo>
                  *Monthly membership price does not include tax.
                  <br />
                  Shipping is always free. Cancel anytime.
                </STaxInfo>
              </SDetailsContainer>
            </SDetailsWrapper>
          </SContent>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )
}
