import React, { useRef, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '../../lib/button'
import RingSize from '../ring-size'
import formatPrice from '../../modules/format-price'
import { Product, ProductVariant } from '../../modules/normalize-product'
import Slider from '../../lib/slider'
import Carousel from 'react-multi-carousel'
import Image from '../../lib/image'
import useScreenSize from '../../lib/use-screen-size'

export type { Product, ProductVariant, ProductImage } from '../../modules/normalize-product'

const SWrapper = styled.div``

const STitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    margin-bottom: 30px;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

const STitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 16px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
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
  padding: 29px 0 32px;
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
  background: linear-gradient(0deg, #fdfbf9 0%, #fdfbf9 85%, white 85%, white 100%);

  @media (min-width: 768px) {
    background: #fdfbf9;
    padding: 27px 0 32px;
  }

  @media (min-width: 992px) {
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

  @media (max-width: 991px) {
    display: flex;
  }
`

const SContent = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    // margin: 0 -20px;
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
    width: 420px;
    margin: 0 20px 35px 0;
  }

  @media (min-width: 992px) {
    width: 100%;
    margin: 0 32px 0 0;
  }
`

const SImagesContainer = styled.div`
  position: relative;
  // max-width: 295px;
  width: 100%;
  margin: 0 auto 25px;
  max-width: 385px;

  @media (min-width: 768px) {
    max-width: 612px;
    margin: 0 0 25px auto;
    max-width: 430px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
    margin: 0;
  }
`

const SLeftSliderPart = styled.div<{
  isPresent: boolean
}>`
  border: 4px solid #ffffff;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 115px;
  height: 115px;
  // margin: ${(props) => (props.isPresent ? '0 0 15px' : '0 0 15px')};
  margin: 0;
  z-index: 2;

  figure {
    height: 100%;
  }

  @media (min-width: 375px) {
    // margin: ${(props) => (props.isPresent ? '0 0 50px' : '0 0 15px')};
    width: 135px;
    height: 135px;
  }

  @media (min-width: 414px) {
    // margin: ${(props) => (props.isPresent ? '0 0 50px' : '0 0 15px')};
    width: 142px;
    height: 142px;
  }

  @media (min-width: 768px) {
    // margin: ${(props) => (props.isPresent ? '0 0 76px' : '0 0 21px')};
    width: 169px;
    height: 169px;
    bottom: 65px;
  }

  @media (min-width: 992px) {
    width: 240px;
    height: 240px;
    bottom: 80px;
  }
`

const SLeftImageContainer = styled.div<{
  isPresent: boolean
}>`
  // margin: ${(props) => (props.isPresent ? '0 0 15px' : '0 0 33px')};
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 115px;
  margin: 0;

  @media (min-width: 375px) {
    // margin: ${(props) => (props.isPresent ? '0 0 15px' : '0 0 41px')};
    width: 135px;
    height: 135px;
  }

  @media (min-width: 414px) {
    // margin: ${(props) => (props.isPresent ? '0 0 15px' : '0 0 41px')};
    width: 142px;
    height: 142px;
  }

  @media (min-width: 768px) {
    // margin: ${(props) => (props.isPresent ? '0 0 21px' : '0 0 76px')};
    width: 169px;
    height: 169px;
  }

  @media (min-width: 992px) {
    width: 240px;
    height: 240px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const SRightSliderPart = styled.div`
  background: #fff;
  width: 189px;
  height: 189px;
  margin-left: auto;
  margin-right: 0;
  overflow: hidden;

  img {
    width: 189px;
    height: 189px;
  }

  @media (min-width: 375px) {
    width: 225px;
    height: 225px;

    img {
      width: 225px;
      height: 225px;
    }
  }

  @media (min-width: 414px) {
    width: 258px;
    height: 258px;

    img {
      width: 258px;
      height: 258px;
    }
  }

  @media (min-width: 768px) {
    width: 286px;
    height: 286px;

    img {
      width: 286px;
      height: 286px;
    }
  }

  @media (min-width: 992px) {
    width: 400px;
    height: 400px;

    img {
      width: 400px;
      height: 400px;
    }
  }

  img {
    object-fit: cover;
  }
`

const SDetailsWrapper = styled.div`
  @media (min-width: 992px) {
    // margin: 0 20px;
  }
`

const SDetailsContainer = styled.div`
  text-align: center;
  max-width: 356px;
  margin: 0 auto;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 290px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
    width: 340px;
  }
`

const SInnerCircleLabel = styled.strong`
  font: 600 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9059c8;
  margin: 0 0 10px;
  display: block;
`

const SProductTitle = styled.h3`
  font: 600 40px/1.1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
`

const SPriceShippingInfo = styled.div`
  font: 400 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
`

const SPriceLabel = styled.span`
  text-transform: uppercase;
  margin: 0 0 18px;
`

const SDiscountPriceLabel = styled(SPriceLabel)`
  text-decoration: line-through;
`

const SSelectRingLabel = styled.strong`
  font: 400 16px/1.3 'Montserrat', sans-serif;
  margin: 18px 0 16px;
  display: block;
`

const SRingSizeWrapper = styled.div``

const STaxInfo = styled.div`
  font: 400 12px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  text-align: center;
  color: #878787;
`

const SErrorLabel = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  margin-bottom: 15px;
  color: #ee67a0;
`

const SButtonContainer = styled.div`
  display: block;
  position: absolute;
  bottom: -54px;
  left: -8px;

  @media (min-width: 768px) {
    bottom: -69px;
  }

  @media (min-width: 992px) {
    bottom: -84px;
  }
`

const SSliderButton = styled.button<{
  transform?: string
}>`
  opacity: 0.8;
  border: 0.5px solid #9059c8;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  transform: ${(props) => props.transform || 'none'};
  background: transparent;
  font-size: 0;
  line-height: 1;
  margin: 0 4px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  & > svg {
    width: 10px;
    height: 20px;
    @media (min-width: 768px) {
      width: 12px;
      height: 25px;
    }
  }
`

const SImage = styled(Image)`
  margin: 0;
`

export type InnerCircleExclusiveProps = {
  className?: ClassName
  title: string
  subTitle: string
  topButtonText: string
  buttonLink: string
  product: Product
  slideImages: Array<string>
  membershipProductVariants: Array<ProductVariant>
  onReserve: (variant: ProductVariant) => void
}

export function InnerCircleExclusive({
  className,
  product,
  title,
  subTitle,
  topButtonText,
  buttonLink,
  slideImages,
  onReserve,
  membershipProductVariants,
}: InnerCircleExclusiveProps): React.ReactElement | null {
  const screenSize = useScreenSize()
  const [selectedVariant, setVariant] = useState<ProductVariant | undefined>()
  const [error, setError] = useState<boolean>(false)

  const smallSliderRef = useRef<Carousel | null>(null)
  const bigSliderRef = useRef<Carousel | null>(null)

  const productTitle = product.title.split('-')[0].split(':')[0]
  const actualPrice = (selectedVariant || product.variants[0]).actual_price
  const comparePrice = (selectedVariant || product.variants[0]).compare_at_price
  const titleParts = title.split(' ')
  const shiftedProductsArray: Array<string> = [...slideImages.slice(1), slideImages[0]]

  const handleToggle = (ref: React.RefObject<Carousel>, isPrevious: boolean) => {
    if (isPrevious) {
      ref.current && ref.current.previous(1)
    } else {
      ref.current && ref.current.next(1)
    }
  }

  const CustomButtons = () => {
    return (
      <SButtonContainer>
        <SSliderButton
          transform={'rotate(180deg)'}
          onClick={() => {
            handleToggle(smallSliderRef, true)
            handleToggle(bigSliderRef, true)
          }}
        >
          <svg viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.1499 0.799805L13.8501 13.5L1.1499 26.2002"
              stroke="#9059C8"
              strokeWidth="0.577281"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SSliderButton>
        <SSliderButton
          onClick={() => {
            handleToggle(smallSliderRef, false)
            handleToggle(bigSliderRef, false)
          }}
        >
          <svg viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.1499 0.799805L13.8501 13.5L1.1499 26.2002"
              stroke="#9059C8"
              strokeWidth="0.577281"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SSliderButton>
      </SButtonContainer>
    )
  }

  return (
    <SWrapper className={cn('InnerCircleExclusive', className)}>
      <STitleWrapper>
        <STitle>
          <span>
            <STitleUnderline>{titleParts.slice(0, 2).join(' ')}</STitleUnderline>
          </span>
          <span>{` ${titleParts.slice(2).join(' ')}`}</span>
        </STitle>
        <SSubTitle>{subTitle}</SSubTitle>
        <SButtonWrapper>
          <a href={buttonLink} style={{ textDecoration: 'none' }}>
            <Button width={'189px'}>{topButtonText}</Button>
          </a>
        </SButtonWrapper>
      </STitleWrapper>
      <SContentWrapper>
        <SContentContainer>
          <SContent>
            <SImagesWrapper>
              <SImagesContainer>
                <SLeftSliderPart isPresent={slideImages.length > 2}>
                  <Slider
                    infinite
                    arrows={false}
                    carouselRef={smallSliderRef}
                    customButtonGroup={<CustomButtons />}
                    swipeable={false}
                    autoPlay={false}
                  >
                    {slideImages.map((src, i) => (
                      <SLeftImageContainer isPresent={slideImages.length > 2} key={src + i}>
                        <SImage src={src} alt={productTitle} />
                      </SLeftImageContainer>
                    ))}
                  </Slider>
                </SLeftSliderPart>
                <SRightSliderPart>
                  <Slider infinite arrows={false} carouselRef={bigSliderRef} swipeable={false} autoPlay={false}>
                    {shiftedProductsArray.map((src, i) => (
                      <SImage
                        src={src}
                        alt={productTitle}
                        key={src + i}
                        width={screenSize.greaterThanMedium ? '400px' : '236px'}
                        height={screenSize.greaterThanMedium ? '400px' : '236px'}
                      />
                    ))}
                  </Slider>
                </SRightSliderPart>
              </SImagesContainer>
            </SImagesWrapper>
            <SDetailsWrapper>
              <SDetailsContainer>
                <SInnerCircleLabel>INNER CIRCLE EXCLUSIVE</SInnerCircleLabel>
                <SProductTitle>{productTitle}</SProductTitle>
                <div>
                  <SPriceShippingInfo>
                    {comparePrice ? (
                      <>
                        <SDiscountPriceLabel>{formatPrice(comparePrice)}</SDiscountPriceLabel>{' '}
                        <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
                      </>
                    ) : (
                      <SPriceLabel>{formatPrice(actualPrice)}</SPriceLabel>
                    )}{' '}
                    + FREE SHIPPING
                  </SPriceShippingInfo>
                  <SSelectRingLabel>Select a ring size to reserve this box:</SSelectRingLabel>
                  <SRingSizeWrapper>
                    <RingSize
                      variants={product.variants}
                      onChange={(variant) => {
                        setError(false)
                        setVariant(variant)
                      }}
                    />
                  </SRingSizeWrapper>
                  {error && (
                    <SErrorLabel>
                      <span>Please select ring size</span>
                    </SErrorLabel>
                  )}
                  <Button
                    compact={false}
                    frontColor={'#fff'}
                    backColor={'#000'}
                    style={{ width: '100%', marginBottom: 18 }}
                    onClick={() => {
                      const membershipVariant =
                        selectedVariant &&
                        membershipProductVariants.find((variant) => variant.size === selectedVariant.size)
                      if (!membershipVariant) {
                        setError(true)
                        return
                      }
                      onReserve(membershipVariant)
                    }}
                  >
                    RESERVE NOW
                  </Button>
                </div>
                <STaxInfo>
                  *Monthly membership price does not include tax. Shipping is always free. Cancel anytime.
                </STaxInfo>
              </SDetailsContainer>
            </SDetailsWrapper>
          </SContent>
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>
  )
}
