import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { parse } from 'node-html-parser'
import formatPrice from '../modules/format-price'
import getLabel from '../modules/get-label'
import { Product as ProductType, ProductVariant } from '../modules/normalize-product'
import removeNewLineCharacters from '../modules/remove-new-line-characters'
import ProductContext from '../modules/product-context'
import addItemToCart from '../lib/add-item-to-cart'
import window from '../lib/window'
import navigate from '../lib/navigate'
import YotpoStarRating from '../lib/yotpo-star-rating'
import { VerticalGallery } from '../components/vertical-gallery'
import styled from 'styled-components'
import { ProductModalButtons } from '../components/product-modal-button'
import { SubscriptionHint } from '../components/subscription-hint'

const SProductContainer = styled.div`
  padding: 0 15px;
  max-width: 1020px;
  margin: 0 auto;
`

const SPdpRowWrapper = styled.div`
  padding-top: 10px;

  .pdp-row {
    @media (min-width: 768px) {
      display: flex;
      width: 100%;
    }
  }
`

const SProductInfo = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 992px) {
    width: 35%;
  }
`

type ProductDescription = {
  title: string
  content: string
}

const Product = (): null | React.ReactElement => {
  const product = useContext<ProductType | undefined>(ProductContext)

  const [currentRingSize, setCurrentRingSize] = useState<number | null>(null)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [actualPrice, setActualPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<Array<ProductDescription>>()
  const [isDiscountApplied, setDiscountApplied] = useState<boolean>(true)
  const [activeGalleryItem, setActiveGalleryItem] = useState<number | null>(0)
  const [comparePrice, setComparePrice] = useState<number | null>(0)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const [infoDistanceFromTop, setInfoDistanceFromTop] = useState<number>(183)
  const [yPosition, setYPosition] = useState<number>(0)
  const addToCartRef = useRef<HTMLButtonElement>(null)
  const productInfoRef = useRef<HTMLDivElement>(null)
  const productHeadingRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const handlePosition = () => {
    const position = addToCartRef.current?.getBoundingClientRect()
    if (!position) {
      return
    }
    localStorage.setItem('isFloatingCtaVisible', JSON.stringify(position.top <= 150))
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
    window?.addEventListener('scroll', handlePosition)
    return () => {
      window?.removeEventListener('scroll', handlePosition)
    }
  }, [])

  useEffect(() => {
    if (!window) return

    setYPosition(window.scrollY)
    window.addEventListener('scroll', handleScrollDirection)
    return () => {
      window?.removeEventListener('scroll', handleScrollDirection)
    }
  }, [handleScrollDirection])

  useEffect(() => {
    handlePosition()
  }, [])

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

  return (
    <>
      <SProductContainer>
        <div className="app-h-breadcrumbs">
          Home / All / Bundles / <span>{product.title.split('-')[0]}</span>
        </div>
      </SProductContainer>
      <SProductContainer>
        <SPdpRowWrapper>
          <div className="pdp-row">
            <VerticalGallery
              activeGalleryItem={activeGalleryItem}
              setActiveGalleryItem={setActiveGalleryItem}
              galleryRef={galleryRef}
            />
            <SProductInfo>
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
                      <span className="pdp-product-details__price">
                        &nbsp;${(actualPrice - actualPrice * 0.2).toFixed(2)}
                      </span>
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
                    <label htmlFor="pdp-ic-radio-1" className="pdp__chooser__item">
                      <div className="pdp__chooser__item__part pdp__chooser__item__part-top">
                        <div>
                          <input
                            type="radio"
                            id="pdp-ic-radio-1"
                            className="pdp-radio-group"
                            name="pdp-radio-group"
                            defaultChecked
                            onClick={() => setDiscountApplied(false)}
                          />
                          <span />
                        </div>
                        <div className="pdp__chooser__item__part pdp__chooser__item__part-top__content">
                          <div className="pdp__chooser__item-content-text">Regular Price</div>
                          <span className="pdp__chooser__item-price">${actualPrice}</span>
                        </div>
                      </div>
                    </label>
                    <label
                      htmlFor="pdp-ic-radio-2"
                      className="pdp__chooser__item pdp__chooser__item__colored pdp__chooser__item__highlighted"
                    >
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
                            <span className="pdp__chooser__item-content-text">Join &amp; Save 20%</span>
                            <button type="button" id="pdp__chooser__info-btn" className="pdp__chooser__btn">
                              <img
                                className="pdp__chooser__info-icon pdp__chooser__info-icon-1"
                                src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-info-icon.png"
                                alt="info-icon"
                              />
                              <img
                                className="pdp__chooser__info-icon pdp__chooser__info-icon-2"
                                src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-close-icon.png"
                                alt="close-icon"
                              />
                            </button>
                          </div>
                          <span className="pdp__chooser__item-price">
                            ${(actualPrice - actualPrice * 0.2).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <SubscriptionHint />
                    </label>
                  </div>
                </div>
                <div className="pdp-ring-message">Please select your ring size</div>
                <div className="pdp__additional-text">
                  Join the Inner Circle today, then automatically receive a monthly set for $32.95 plus tax. No
                  commitment, cancel anytime.{' '}
                  <a href="/account/login?return_url=/products/lemon-drop-jewel-candle" id="pdp__already-a-member-link">
                    Already a member?
                  </a>
                </div>
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
                      <div
                        className="pdp-a-item__description"
                        style={activeAccordion === i ? { display: 'block' } : {}}
                      >
                        <span>{el.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SProductInfo>
          </div>
        </SPdpRowWrapper>
      </SProductContainer>
    </>
  )
}

export default Product
