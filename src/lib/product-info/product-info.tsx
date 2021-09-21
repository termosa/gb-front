import React, { MutableRefObject, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
import StarRating from '../../lib/star-rating'
import formatPrice from '../../modules/format-price'
import { ProductVariant } from '../../modules/normalize-product-variant'
import SubscriptionHint from '../../components/subscription-hint'
import addCartItem from '../add-cart-item'
import navigate from '../navigate'
import ProductModalButtons from '../../components/product-modal-button'
import { parse } from 'node-html-parser'
import removeNewLineCharacters from '../../modules/remove-new-line-characters'
import getLabel from '../../modules/get-label'
import { Product as ProductType } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'
import window from '../window/window'
import useCart, { Status } from '../use-cart'
import addCartItemWithSubscription from '../add-cart-item-with-subscription'
import SizeSelectorModal from '../size-selector-modal'
import trackAddedToCart from '../track-added-to-cart'

const goToYotpoReviews = () => {
  const yOffset = -200
  const element = window?.document.querySelector('.yotpo-nav-wrapper')
  if (element) {
    const y = element?.getBoundingClientRect().top + (window?.pageYOffset || 0) + yOffset
    window?.scrollTo({ top: y })
  }
}

const SProductInfo = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 992px) {
    width: 35%;
  }
`

const SPdpProductInfo = styled.div<{
  top: string
}>`
  position: sticky;
  transition: top linear 0.4s;
  top: ${(props) => props.top || 183};
  height: fit-content;
  max-width: 350px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 33px;
  }
`

const SPdpChooserItemPartTopContent = styled.div`
  width: 100%;
  padding-left: 5px;
  justify-content: space-between;
`

const SPdpChooserBtnHolder = styled.div`
  display: flex;

  & > button {
    margin: 0 6px;

    &:focus {
      outline: 0;
    }
  }

  & > span,
  & > button {
    display: inline-flex;
    align-items: center;
  }
`

const SPdpChooserItemContentText = styled.span<{
  isHighlighted?: boolean
}>`
  font: 600 16px/1.25 'Montserrat', sans-serif;
  padding-top: 2px;
  font-weight: ${(props) => (props.isHighlighted ? '600' : '400')};
  color: ${(props) => (props.isHighlighted ? '#9059c8' : '#000')};
`

const SPdpChooserBtn = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: transparent;
  border-radius: 0;
  border: 0;

  & > img {
    width: 18px;
    height: 18px;
    display: inline-block;
  }
`

const SPdpChooserContainer = styled.div`
  max-width: 400px;
  @media (min-width: 768px) {
    max-width: 340px;
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

const SPdpAdditionalText = styled.div`
  font: 12px/1.4 'Montserrat', sans-serif;
  max-width: 370px;
  padding: 16px 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
  }

  a {
    color: #000;

    &:hover {
      text-decoration: none;
    }
  }
`

const SPdpChooser = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.2;
  padding-bottom: 12px;
`

const SPdpChooserItem = styled.label`
  font-weight: 400;
  display: block;
  background-color: #f5f5f5;
  padding: 14px 16px;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 8px;
  }
`

const SPdpChooserItemPart = styled.div`
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`

const SPdpRadioGroup = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + span,
  &:not(:checked) + span {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    height: 25px;
  }

  &:checked + span:before,
  &:not(:checked) + span:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
    box-sizing: border-box;
  }

  &:checked + span:after,
  &:not(:checked) + span:after {
    content: '';
    width: 17px;
    height: 17px;
    background: #9059c8;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  &:not(:checked) + span:after {
    opacity: 0;
    transform: scale(0);
    box-sizing: border-box;
  }

  &:checked + span:after {
    opacity: 1;
    transform: scale(1);
    box-sizing: border-box;
  }
`

const SPdpProductInfoIcTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9059c8;
  margin: 0 0 12px;
`

const SPdpProductInfoTitle = styled.h2`
  font: 700 32px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
`

const SPdpProductDetails = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  margin: 10px 0 9px;
`

const SPdpPiSelectorWrapper = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
`

const SPdpProductDetailsDiscountPrice = styled.span`
  text-decoration: line-through;
`

const SPdpProductDetailsSilverTag = styled.span`
  background: linear-gradient(45deg, #9f9f9f, #555555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SPdpPiRsText = styled.div`
  margin: 0 0 7px;
`

const SPdpPiSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 0 12px;
`

const SPdpPiRsSelector = styled.div`
  text-align: center;
  color: #ee67a0;
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
    opacity: 0.4;
    pointer-events: none;
  }
`

/*const SPdpFragrance = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  overflow-x: auto;
  width: 100%;
`

const SPdpFragranceItem = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  max-width: 62px;

  &:last-child {
    margin-right: 0;
  }
`

const SPdpFragranceImg = styled.img`
  width: 54px;
  height: 39px;
  object-fit: contain;
  display: block;
  margin: 0 auto 5px;

  @media (min-width: 768px) {
    width: 62px;
    height: 45px;
  }
`*/

const SPdpAItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
`

const SPdpAItemTitle = styled.div`
  font-size: 16px;
  padding: 16px 0;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.08em;

  & > p {
    margin: 0;
    font: 500 16px/1.25 'Montserrat', sans-serif;
    letter-spacing: 0.08em;
  }
`

const SAccIconWrapper = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
`

const SPdpAItemDescription = styled.div<{
  isActive: boolean
}>`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  white-space: pre-line;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  padding: 0 0 15px 0;

  & > span {
    margin: 0 0 10px;
  }
`

type ProductDescription = {
  title: string
  content: string
}

export type ProductInfoProps = {
  className?: ClassName
  style?: React.CSSProperties
  addToCartRef: MutableRefObject<HTMLButtonElement | null>
}

export function ProductInfo({ className, style, addToCartRef }: ProductInfoProps): React.ReactElement | null {
  const cart = useCart(true)
  const isDiscountAvailable = !cart.hasSubscriptionProduct && cart.status === Status.SUCCESS
  const product = useContext<ProductType | undefined>(ProductContext)
  const isOneVariantProduct = product && product.variants.length === 1 && !product.variants[0].size
  const isProductAvailable = useMemo(() => product?.variants.some((v) => v.available), [product])

  const [infoDistanceFromTop, setInfoDistanceFromTop] = useState<number>(183)
  const [yPosition, setYPosition] = useState<number>(0)
  const [comparePrice, setComparePrice] = useState<number | null>(0)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [actualPrice, setActualPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<Array<ProductDescription>>()
  const [isDiscountApplied, setDiscountApplied] = useState<boolean>(true)
  const [isSubscriptionHintOpened, setSubscriptionHintOpened] = useState<boolean>(false)
  const [isRingSizeModalOpened, setIsRingSizeModalOpened] = useState(false)

  const productHeadingRef = useRef<HTMLDivElement>(null)
  const productInfoRef = useRef<HTMLDivElement>(null)

  if (!product) {
    return null
  }

  const addToCartHandler = (selectedVariant: ProductVariant | null) => {
    if (!selectedVariant) {
      if (isOneVariantProduct && isDiscountApplied) {
        setIsRingSizeModalOpened(true)
        return
      }

      executeScroll()
      localStorage.setItem('selectRingError', JSON.stringify(true))
      setSelectRingError(true)
      return
    }

    const addingRequest: Promise<unknown> =
      isDiscountApplied && !cart.hasSubscriptionProduct
        ? addCartItemWithSubscription(selectedVariant.variant_id, selectedVariant.size || undefined)
        : addCartItem(selectedVariant.variant_id)

    addingRequest
      .then(() => trackAddedToCart(product))
      .then(() => navigate('/cart'))
      .catch((err: unknown) => alert(err))
  }

  const executeScroll = () => {
    if (productHeadingRef.current !== null) {
      productHeadingRef.current.scrollIntoView()
    }
  }

  const label = getLabel(product)

  const checkForLabel = (): React.ReactElement | null => {
    /*if (label.members) {
      return <span className="pdp-product-details__members-tag"> | Members Only</span>
    }*/

    if (label.silver) {
      return <SPdpProductDetailsSilverTag> | 925 Sterling Silver</SPdpProductDetailsSilverTag>
    } else {
      return null
    }
  }

  const handleScrollDirection = useCallback(
    (e) => {
      let currentTop = infoDistanceFromTop
      const element = productInfoRef.current
      const window = e.currentTarget
      if (!element) {
        return
      }
      const initialTopOffset = 183
      const productPosition = element?.getBoundingClientRect()

      const maxTop = productPosition.top + window.scrollY - element?.offsetTop + initialTopOffset
      const minTop = element.clientHeight - window.innerHeight

      if (window.scrollY < yPosition) {
        currentTop -= window.scrollY - yPosition
      } else {
        currentTop += yPosition - window.scrollY
      }

      currentTop = Math.min(Math.max(currentTop, -minTop), maxTop, initialTopOffset)
      setInfoDistanceFromTop(currentTop)
      setYPosition(window.scrollY)
    },
    [yPosition]
  )

  useEffect(() => {
    if (!window) return

    setYPosition(window.scrollY)
    window.addEventListener('scroll', handleScrollDirection)
    return () => {
      window?.removeEventListener('scroll', handleScrollDirection)
    }
  }, [handleScrollDirection])

  useEffect(() => {
    setActualPrice(product?.variants[0].actual_price || 0)
    setComparePrice(product?.variants[0].compare_at_price || null)
    if (product && product.body_html) {
      const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))
      setProductDescription(
        trArr
          .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
          .map((el: HTMLElement) => ({
            title: el.querySelectorAll('td')[0].innerText.trim(),
            content: removeNewLineCharacters(el.querySelectorAll('td')[1].innerText),
          }))
      )
    }
  }, [product])

  return (
    <SProductInfo className={cn(className, 'ProductInfo')} style={style}>
      {isRingSizeModalOpened && (
        <SizeSelectorModal
          onSelect={(selectedSize) => addToCartHandler({ ...product.variants[0], size: selectedSize })}
          onClose={() => setIsRingSizeModalOpened(false)}
          title="Select ring size for subscription"
        />
      )}
      <SPdpProductInfo top={infoDistanceFromTop + 'px'} ref={productInfoRef}>
        <SPdpProductInfoIcTitle ref={productHeadingRef}>INNER CIRCLE EXCLUSIVE</SPdpProductInfoIcTitle>
        <SPdpProductInfoTitle>{product.title}</SPdpProductInfoTitle>
        <StarRating
          reviewsAverage={product.reviewsAverage}
          reviewsCount={product.reviewsCount}
          onClick={goToYotpoReviews}
        />
        <SPdpProductDetails>
          {isDiscountApplied && isDiscountAvailable ? (
            <>
              <SPdpProductDetailsDiscountPrice>
                {actualPrice ? (comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)) : null}
              </SPdpProductDetailsDiscountPrice>
              <span>&nbsp;${(actualPrice - actualPrice * 0.2).toFixed(2)}</span>
            </>
          ) : (
            <>
              {comparePrice ? (
                <>
                  <SPdpProductDetailsDiscountPrice>
                    {actualPrice ? (comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)) : null}
                  </SPdpProductDetailsDiscountPrice>
                  &nbsp;
                </>
              ) : null}
              <span>{formatPrice(actualPrice)}</span>
            </>
          )}
          {checkForLabel()}
        </SPdpProductDetails>
        {isProductAvailable ? (
          <React.Fragment>
            <SPdpPiSelectorWrapper>
              {isOneVariantProduct ? (
                <SPdpPiRsText>Item comes in one size.</SPdpPiRsText>
              ) : (
                <React.Fragment>
                  <SPdpPiRsText>Select a ring size to reserve this box:</SPdpPiRsText>
                  <SPdpPiSelector>
                    {product.variants.map(
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
                                setActualPrice(variant.actual_price)
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
                </React.Fragment>
              )}
            </SPdpPiSelectorWrapper>
            <SPdpChooserContainer>
              {isDiscountAvailable && (
                <SPdpChooser>
                  <SPdpChooserItem htmlFor="pdp-ic-radio-1" onClick={() => setDiscountApplied(false)}>
                    <SPdpChooserItemPart>
                      <div>
                        <SPdpRadioGroup type="radio" name="pdp-radio-group" checked={!isDiscountApplied} readOnly />
                        <span />
                      </div>
                      <SPdpChooserItemPartTopContent>
                        <SPdpChooserItemContentText isHighlighted={!isDiscountApplied}>
                          Regular Price
                        </SPdpChooserItemContentText>
                        <SPdpChooserItemContentText isHighlighted={!isDiscountApplied}>
                          ${actualPrice}
                        </SPdpChooserItemContentText>
                      </SPdpChooserItemPartTopContent>
                    </SPdpChooserItemPart>
                  </SPdpChooserItem>
                  <SPdpChooserItem htmlFor="pdp-ic-radio-2" onClick={() => setDiscountApplied(true)}>
                    <SPdpChooserItemPart>
                      <div>
                        <SPdpRadioGroup type="radio" name="pdp-radio-group" checked={isDiscountApplied} readOnly />
                        <span />
                      </div>
                      <SPdpChooserItemPartTopContent>
                        <SPdpChooserBtnHolder>
                          <SPdpChooserItemContentText isHighlighted={isDiscountApplied}>
                            Join &amp; Save 20%
                          </SPdpChooserItemContentText>
                          <SPdpChooserBtn
                            type="button"
                            onClick={() => setSubscriptionHintOpened(!isSubscriptionHintOpened)}
                          >
                            {isSubscriptionHintOpened ? (
                              <img
                                src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-close-icon.png"
                                alt="close-icon"
                              />
                            ) : (
                              <img
                                src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-info-icon.png"
                                alt="info-icon"
                              />
                            )}
                          </SPdpChooserBtn>
                        </SPdpChooserBtnHolder>
                        <SPdpChooserItemContentText isHighlighted={isDiscountApplied}>
                          ${(actualPrice - actualPrice * 0.2).toFixed(2)}
                        </SPdpChooserItemContentText>
                      </SPdpChooserItemPartTopContent>
                    </SPdpChooserItemPart>
                    {isSubscriptionHintOpened && <SubscriptionHint />}
                  </SPdpChooserItem>
                </SPdpChooser>
              )}
            </SPdpChooserContainer>
            <SPdpBtn
              type="button"
              ref={addToCartRef}
              onClick={() =>
                addToCartHandler(isOneVariantProduct && !isDiscountApplied ? product.variants[0] : selectedVariant)
              }
            >
              Add to Cart
            </SPdpBtn>
            {isDiscountAvailable && isDiscountApplied && (
              <SPdpAdditionalText>
                Join the Inner Circle today, then automatically receive a monthly set for $32.95 plus tax. No
                commitment, cancel anytime.{' '}
                <a href="/account/login?return_url=/products/lemon-drop-jewel-candle" id="pdp__already-a-member-link">
                  Already a member?
                </a>
              </SPdpAdditionalText>
            )}
          </React.Fragment>
        ) : (
          <SPdpPiSelectorWrapper>
            <SPdpPiRsText>Sorry, that product is currently unavailable.</SPdpPiRsText>
            <SPdpBtn type="button" disabled>
              Sold Out
            </SPdpBtn>
          </SPdpPiSelectorWrapper>
        )}
        <ProductModalButtons product={product} />
        {/*<SPdpFragrance>
          <SPdpFragranceItem>
            <SPdpFragranceImg
              src={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/black-currant.png'}
              alt=""
            />
            <span>Black Currant</span>
          </SPdpFragranceItem>
          <SPdpFragranceItem>
            <SPdpFragranceImg
              src={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/tart-rhubarb.png'}
              alt=""
            />
            <span>Tart Rhubarb</span>
          </SPdpFragranceItem>
          <SPdpFragranceItem>
            <SPdpFragranceImg
              src={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/refreshing-mint.png'}
              alt=""
            />
            <span>Refreshing Mint</span>
          </SPdpFragranceItem>
          <SPdpFragranceItem>
            <SPdpFragranceImg
              src={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/spice-anise.png'}
              alt=""
            />
            <span>Spicy Anise</span>
          </SPdpFragranceItem>
        </SPdpFragrance>*/}
        <div>
          {productDescription?.map((el: ProductDescription, i: number) => (
            <SPdpAItem key={el.title}>
              <SPdpAItemTitle
                onClick={() => (activeAccordion === i ? setActiveAccordion(null) : setActiveAccordion(i))}
              >
                <SAccIconWrapper>
                  {activeAccordion === i ? (
                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.5152 8.73767H1"
                        stroke="black"
                        strokeWidth="0.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.5152 8.73767H1"
                        stroke="black"
                        strokeWidth="0.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 0.737671V16.2528"
                        stroke="black"
                        strokeWidth="0.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </SAccIconWrapper>
                <p>
                  {el.title}
                  <br />
                </p>
              </SPdpAItemTitle>
              <SPdpAItemDescription isActive={activeAccordion === i}>
                <span>{el.content}</span>
              </SPdpAItemDescription>
            </SPdpAItem>
          ))}
        </div>
      </SPdpProductInfo>
    </SProductInfo>
  )
}
