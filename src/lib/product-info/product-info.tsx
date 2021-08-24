import React, { MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import YotpoStarRating from '../yotpo-star-rating'
import formatPrice from '../../modules/format-price'
import { ProductVariant } from '../../modules/normalize-product-variant'
import { SubscriptionHint } from '../../components/subscription-hint'
import addItemToCart from '../add-item-to-cart'
import navigate from '../navigate'
import { ProductModalButtons } from '../../components/product-modal-button'
import { parse } from 'node-html-parser'
import removeNewLineCharacters from '../../modules/remove-new-line-characters'
import getLabel from '../../modules/get-label'
import { Product as ProductType } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'
import window from '../window/window'

const SProductInfo = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 992px) {
    width: 35%;
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

const SPdpChooserItem = styled.label`
  padding: 14px 16px;
  display: block;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 8px;
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
  const product = useContext<ProductType | undefined>(ProductContext)

  const [infoDistanceFromTop, setInfoDistanceFromTop] = useState<number>(183)
  const [yPosition, setYPosition] = useState<number>(0)
  const [comparePrice, setComparePrice] = useState<number | null>(0)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const [currentRingSize, setCurrentRingSize] = useState<number | null>(null)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [actualPrice, setActualPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<Array<ProductDescription>>()
  const [isDiscountApplied, setDiscountApplied] = useState<boolean>(true)
  const [isSubscriptionHintOpened, setSubscriptionHintOpened] = useState<boolean>(false)

  const productHeadingRef = useRef<HTMLDivElement>(null)
  const productInfoRef = useRef<HTMLDivElement>(null)

  if (!product) {
    return null
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
      return <span className="pdp-product-details__silver-tag"> | 925 Sterling Silver</span>
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
      <div className="pdp-product-info" ref={productInfoRef} style={{ top: infoDistanceFromTop }}>
        <h3 className="pdp-product-info__ic-title" ref={productHeadingRef}>
          INNER CIRCLE EXCLUSIVE
        </h3>
        <h2 className="pdp-product-info__title">{product.title}</h2>
        <YotpoStarRating productId={product.product_id} />
        <div className="pdp-product-details">
          {isDiscountApplied ? (
            <>
              <span className="pdp-product-details__discount-price">
                {actualPrice ? (comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)) : null}
              </span>
              <span className="pdp-product-details__price">&nbsp;${(actualPrice - actualPrice * 0.2).toFixed(2)}</span>
            </>
          ) : (
            <>
              {comparePrice ? (
                <>
                  <span className="pdp-product-details__discount-price">
                    {actualPrice ? (comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)) : null}
                  </span>
                  &nbsp;
                </>
              ) : null}
              <span className="pdp-product-details__price">{formatPrice(actualPrice)}</span>
            </>
          )}
          {checkForLabel()}
        </div>
        <div className="pdp-pi-selector-wrapper">
          <div className="pdp-pi-rs-text">Select a ring size to reserve this box:</div>
          <div id="pdp-pi-selector" className="pdp-pi-selector">
            {product.variants.slice(0).map((variant: ProductVariant) => (
              <div className="pdp-pi-selector__btn-holder" key={variant.title}>
                <button
                  className={`pdp-pi-selector__btn ${
                    variant.variant_id === currentRingSize && 'pdp-pi-selector__btn_active'
                  }`}
                  type="button"
                  value={Number(variant.title)}
                  onClick={() => {
                    setSelectRingError(false)
                    localStorage.setItem('selectRingError', JSON.stringify(false))
                    localStorage.setItem('currentRingSize', JSON.stringify(variant.variant_id))
                    setCurrentRingSize(variant.variant_id)
                    setActualPrice(variant.actual_price)
                  }}
                >
                  {variant.title}
                </button>
              </div>
            ))}
          </div>
          {isSelectRingError ? <div className="pdp-pi-rs-error">Please select ring size</div> : null}
        </div>
        <div className="pdp__chooser-container" id="pdp-ic-chooser-container">
          <div className="pdp__chooser" id="pdp-ic-chooser">
            <SPdpChooserItem htmlFor="pdp-ic-radio-1">
              <div className="pdp__chooser__item__part pdp__chooser__item__part-top">
                <div>
                  <input
                    type="radio"
                    id="pdp-ic-radio-1"
                    className="pdp-radio-group"
                    name="pdp-radio-group"
                    defaultChecked
                    onClick={() => {
                      setDiscountApplied(false)
                    }}
                  />
                  <span />
                </div>
                <div className="pdp__chooser__item__part pdp__chooser__item__part-top__content">
                  <SPdpChooserItemContentText isHighlighted={!isDiscountApplied}>
                    Regular Price
                  </SPdpChooserItemContentText>
                  <SPdpChooserItemContentText isHighlighted={!isDiscountApplied}>
                    ${actualPrice}
                  </SPdpChooserItemContentText>
                </div>
              </div>
            </SPdpChooserItem>
            <SPdpChooserItem htmlFor="pdp-ic-radio-2">
              <div className="pdp__chooser__item__part pdp__chooser__item__part-top">
                <div>
                  <input
                    type="radio"
                    id="pdp-ic-radio-2"
                    className="pdp-radio-group pdp-radio-group-discount"
                    name="pdp-radio-group"
                    defaultValue="discount"
                    defaultChecked
                    onClick={() => setDiscountApplied(true)}
                  />
                  <span />
                </div>
                <div className="pdp__chooser__item__part pdp__chooser__item__part-top__content">
                  <div className="pdp__chooser__btn-holder">
                    <SPdpChooserItemContentText isHighlighted={isDiscountApplied}>
                      Join &amp; Save 20%
                    </SPdpChooserItemContentText>
                    <button
                      type="button"
                      id="pdp__chooser__info-btn"
                      className="pdp__chooser__btn"
                      onClick={() => setSubscriptionHintOpened(!isSubscriptionHintOpened)}
                    >
                      {isSubscriptionHintOpened ? (
                        <img
                          className="pdp__chooser__info-icon"
                          src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-close-icon.png"
                          alt="close-icon"
                        />
                      ) : (
                        <img
                          className="pdp__chooser__info-icon"
                          src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-info-icon.png"
                          alt="info-icon"
                        />
                      )}
                    </button>
                  </div>
                  <SPdpChooserItemContentText isHighlighted={isDiscountApplied}>
                    ${(actualPrice - actualPrice * 0.2).toFixed(2)}
                  </SPdpChooserItemContentText>
                </div>
              </div>
              {isSubscriptionHintOpened && <SubscriptionHint />}
            </SPdpChooserItem>
          </div>
        </div>
        <div className="pdp-ring-message">Please select your ring size</div>
        <button
          id="add-to-cart-btn"
          type="button"
          className="pdp-btn"
          ref={addToCartRef}
          onClick={() => {
            if (!currentRingSize) {
              executeScroll()
              localStorage.setItem('selectRingError', JSON.stringify(true))
              setSelectRingError(true)
            } else {
              addItemToCart(currentRingSize)
                .then(() => navigate('/cart'))
                .catch((err) => alert(err))
            }
          }}
        >
          Add to Cart
        </button>
        <div className="pdp__additional-text">
          Join the Inner Circle today, then automatically receive a monthly set for $32.95 plus tax. No commitment,
          cancel anytime.{' '}
          <a href="/account/login?return_url=/products/lemon-drop-jewel-candle" id="pdp__already-a-member-link">
            Already a member?
          </a>
        </div>
        <ProductModalButtons />
        <div className="pdp-fragrance">
          <div className="pdp-fragrance__item">
            <img
              className="pdp-fragrance__img"
              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/black-currant.png"
              alt=""
            />
            <span>Black Currant</span>
          </div>
          <div className="pdp-fragrance__item">
            <img
              className="pdp-fragrance__img"
              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/tart-rhubarb.png"
              alt=""
            />
            <span>Tart Rhubarb</span>
          </div>
          <div className="pdp-fragrance__item">
            <img
              className="pdp-fragrance__img"
              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/refreshing-mint.png"
              alt=""
            />
            <span>Refreshing Mint</span>
          </div>
          <div className="pdp-fragrance__item">
            <img
              className="pdp-fragrance__img"
              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/fragrances/spice-anise.png"
              alt=""
            />
            <span>Spicy Anise</span>
          </div>
        </div>
        <div className="pdp-accordion" id="pdp-description">
          {productDescription?.map((el: ProductDescription, i: number) => (
            <div className="pdp-a-item" key={el.title}>
              <div
                className={`pdp-a-item__title ${i === activeAccordion ? 'pdp-a-item__title_active' : ''}`}
                onClick={() => (activeAccordion === i ? setActiveAccordion(null) : setActiveAccordion(i))}
              >
                <span className="acc__icon-wrapper">
                  <svg
                    className="acc__icon-plus"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                  <svg
                    className="acc__icon-minus"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5152 8.73767H1"
                      stroke="black"
                      strokeWidth="0.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p>
                  {el.title}
                  <br />
                </p>
              </div>
              <div className="pdp-a-item__description" style={activeAccordion === i ? { display: 'block' } : {}}>
                <span>{el.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SProductInfo>
  )
}
