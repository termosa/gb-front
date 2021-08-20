import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Slider, { Settings } from 'react-slick'
import { parse } from 'node-html-parser'
import formatPrice from '../modules/format-price'
import getLabel from '../modules/get-label'
import { Product as ProductType, ProductImage, ProductVariant } from '../modules/normalize-product'
import removeNewLineCharacters from '../modules/remove-new-line-characters'
import ProductContext from '../modules/product-context'
import addItemToCart from '../lib/add-item-to-cart'
import window from '../lib/window'
import navigate from '../lib/navigate'
import YotpoStarRating from '../lib/yotpo-star-rating'
import { ScreenSize, useScreenSize } from '../lib/use-screen-size'

type ProductDescription = {
  title: string
  content: string
}

const Product = (): null | React.ReactElement => {
  const product = useContext<ProductType | undefined>(ProductContext)
  const screenSize = useScreenSize()

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

  const galleryImageHeight = 474

  const handlePosition = () => {
    const position = addToCartRef.current?.getBoundingClientRect()
    if (!position) {
      return
    }
    localStorage.setItem('isFloatingCtaVisible', JSON.stringify(position.top <= 150))
  }

  const handleGalleryScrolling = (
    myRef: MutableRefObject<HTMLDivElement | null> | null,
    images: Array<ProductImage>,
    setActiveGalleryItem: Dispatch<SetStateAction<number | null>>,
    screenSize: ScreenSize
  ): void => {
    const dimension = screenSize.greaterThenExtraLarge ? 473 : screenSize.greaterThenLarge ? 450 : 270
    const initialDistance = 160
    let distanceFromTop = 0

    const listOfCheckpoints = images
      ?.reduce((arr: Array<number>, curr: ProductImage) => {
        const ratio = (Math.round(curr.height / 10) * 10) / (Math.round(curr.width / 10) * 10)
        const galleryImageHeight = ratio === 1 ? dimension : Math.round(dimension * ratio)
        arr.push(initialDistance - distanceFromTop)
        distanceFromTop = distanceFromTop + galleryImageHeight
        return arr
      }, [])
      .filter((el: number) => myRef?.current && el >= myRef.current.getBoundingClientRect().top - 149)
    setActiveGalleryItem(listOfCheckpoints.length - 1)
  }

  const handleScrollDirection = useCallback(
    (e) => {
      const productInfoPosition = productInfoRef.current?.getBoundingClientRect()
      if (!productInfoPosition) {
        return
      }
      const window = e.currentTarget
      const isUpScroll = yPosition > window.scrollY && infoDistanceFromTop < 183
      const isDownScroll = yPosition < window.scrollY && productInfoPosition.bottom >= window.innerHeight
      setYPosition(window.scrollY)
      if (!isUpScroll && !isDownScroll) {
        return
      }
      const distance = isDownScroll ? infoDistanceFromTop - 53 : infoDistanceFromTop + 53
      setInfoDistanceFromTop(distance)
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
    window?.addEventListener('scroll', () => {
      product && product.images && handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem, screenSize)
    })
    return () => {
      window?.removeEventListener('scroll', () => {
        product &&
          product.images &&
          handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem, screenSize)
      })
    }
  }, [product])

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

  const sliderSettings: Settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.images && product.images[i]?.src} alt={product.images && product.images[i]?.alt} />
        </a>
      )
    },
    arrows: false,
    dots: true,
    dotsClass: 'pdp-carousel-icons__list slick-tdhumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="app-h-container">
        <div className="app-h-breadcrumbs">
          Home / All / Bundles / <span>{product.title.split('-')[0]}</span>
        </div>
      </div>
      <div className="app-h-container">
        <div className="pdp-row-wrapper">
          <div className="pdp-row">
            <div className="pdp-col pdp-col-61">
              <div className="pdp-s-carousel-wrapper">
                <div className="pdp-s-row-wrapper">
                  {screenSize.greaterThenMedium ? (
                    <div className="pdp-s-row">
                      <div className="pdp-s-col pdp-s-col-sm pdp-carousel-icons">
                        <ul className="pdp-carousel-icons__list" id="pdp-carousel-icons__list">
                          {product.images?.map((image: ProductImage, i: number) => (
                            <li
                              key={image.src}
                              className={activeGalleryItem === i ? 'active' : ''}
                              onClick={() => {
                                if (!product.images) {
                                  return
                                }
                                galleryRef.current &&
                                  window?.scrollTo({
                                    top: 51 + galleryImageHeight * i,
                                    behavior: 'smooth',
                                  })
                              }}
                            >
                              <img src={image.src} alt={image.alt} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pdp-s-col pdp-s-col-lg" ref={galleryRef}>
                        {product.images?.map((image: ProductImage) => (
                          <div className="pdp-carousel-item">
                            <img src={image?.src} alt={image?.alt} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Slider {...sliderSettings}>
                        {product.images?.map((image) => (
                          <div className="pdp-carousel-item-mobile" key={image?.src}>
                            <img src={image?.src} alt={image?.alt} />
                          </div>
                        ))}
                      </Slider>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="pdp-col pdp-col-35">
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
                      <div className="pdp__chooser__item__part pdp__chooser__item__part-bottom">
                        <div className="pdp__chooser__item__part-bottom__inner">
                          <ul className="pdp__chooser__ic-list">
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="25"
                                  height="23"
                                  viewBox="0 0 25 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.41284 7.65035C3.31095 6.66733 3.66864 5.65084 3.63776 4.74759"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M7.87079 12.7837L16.0078 19.5156C16.1227 19.6106 16.2551 19.6821 16.3976 19.7259C16.5401 19.7696 16.6899 19.7849 16.8383 19.7708C16.9867 19.7567 17.1308 19.7135 17.2625 19.6437C17.3942 19.5739 17.5109 19.4788 17.6058 19.3638L20.9512 15.3211L24.2966 11.2783C24.3917 11.1636 24.4633 11.0312 24.5073 10.8888C24.5513 10.7464 24.5668 10.5968 24.553 10.4484C24.5391 10.3 24.4961 10.1558 24.4265 10.024C24.3569 9.89218 24.2621 9.77538 24.1473 9.68025L13.5322 0.902503C13.4083 0.797564 13.2633 0.720301 13.1071 0.67592C12.9509 0.63154 12.787 0.621065 12.6264 0.645167L5.74262 1.762C5.46794 1.80467 5.21846 1.9467 5.04153 2.1611C4.8646 2.37551 4.77252 2.64737 4.78275 2.92517L4.87539 6.22936"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M9.19091 3.87208C8.98834 3.7053 8.7409 3.60224 8.47983 3.57598C8.21876 3.54971 7.95577 3.60139 7.72404 3.72447C7.49231 3.84755 7.30223 4.03652 7.17782 4.26754C7.0534 4.49855 7.00021 4.76124 7.02497 5.02246C7.04973 5.28368 7.15132 5.53173 7.31692 5.73525C7.48253 5.93878 7.70471 6.08867 7.95544 6.16602C8.20617 6.24338 8.4742 6.2447 8.72568 6.16986C8.97717 6.09501 9.20084 5.94733 9.36847 5.74546C9.48017 5.61095 9.5642 5.4557 9.61575 5.28862C9.66729 5.12155 9.68533 4.94594 9.66883 4.77188C9.65234 4.59781 9.60162 4.42874 9.51961 4.27432C9.43759 4.11991 9.32589 3.98321 9.19091 3.87208V3.87208Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M15.4366 14.6143L14.6492 6.26367"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M11.96 11.8938C12.6024 11.8938 13.1232 11.3731 13.1232 10.7307C13.1232 10.0883 12.6024 9.56754 11.96 9.56754C11.3176 9.56754 10.7969 10.0883 10.7969 10.7307C10.7969 11.3731 11.3176 11.8938 11.96 11.8938Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M18.8668 9.25045C19.0442 9.39706 19.1741 9.59299 19.2401 9.81344C19.3061 10.0339 19.3052 10.2689 19.2376 10.4889C19.17 10.7088 19.0386 10.9038 18.8601 11.0491C18.6817 11.1944 18.4642 11.2834 18.2351 11.305C18.006 11.3266 17.7756 11.2798 17.5731 11.1705C17.3706 11.0611 17.2052 10.8942 17.0976 10.6908C16.99 10.4874 16.9452 10.2566 16.9688 10.0277C16.9924 9.79881 17.0834 9.58207 17.2302 9.40488C17.4269 9.16754 17.7097 9.01795 18.0166 8.989C18.3234 8.96005 18.6293 9.05408 18.8668 9.25045V9.25045Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M14.0289 19.9087L11.3552 21.6663C11.2414 21.7433 11.1133 21.7966 10.9785 21.8233C10.8437 21.8499 10.705 21.8493 10.5704 21.8215C10.4359 21.7937 10.3083 21.7392 10.1951 21.6613C10.0819 21.5834 9.98551 21.4836 9.91152 21.3678L5.47247 14.6128L2.16071 9.28486C1.9783 9.04535 1.78451 8.37475 2.46865 7.60852"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M7.87093 4.42526C5.5549 3.03564 0.984601 -0.664856 0.570289 1.8905C0.36442 3.17718 2.75508 3.64298 4.85752 3.61467"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">
                                Save up to 30% off new collections, delivered monthly!
                              </span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="21"
                                  height="26"
                                  viewBox="0 0 21 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.8623 9.58526V5.93293C5.8623 4.68767 6.35698 3.49341 7.23751 2.61288C8.11805 1.73235 9.31233 1.23767 10.5576 1.23767V1.23767C11.8028 1.23767 12.9971 1.73235 13.8776 2.61288C14.7582 3.49341 15.2528 4.68767 15.2528 5.93293V9.58526"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.9732 25.2377H4.14223C3.70224 25.2374 3.26725 25.1444 2.86559 24.9648C2.46393 24.7852 2.10459 24.523 1.81099 24.1953C1.5174 23.8676 1.29611 23.4818 1.16156 23.0629C1.027 22.6439 0.982211 22.2014 1.03006 21.764L2.72948 6.45663H18.3859L20.0853 21.764C20.1339 22.2015 20.0895 22.6443 19.9552 23.0635C19.8209 23.4827 19.5997 23.8689 19.3059 24.1967C19.0122 24.5246 18.6526 24.7867 18.2506 24.9661C17.8486 25.1455 17.4134 25.238 16.9732 25.2377Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.00023 14.068L7.22223 18.093L5.45823 14.068H4.70223L6.85823 18.968H7.55123L9.70023 14.068H9.00023ZM10.3251 18.968H11.0251V14.068H10.3251V18.968ZM14.4031 14.068H12.4921V18.968H13.1921V17.484H14.4031C15.6771 17.484 16.4471 16.84 16.4471 15.776C16.4471 14.712 15.6771 14.068 14.4031 14.068ZM14.3821 16.875H13.1921V14.677H14.3821C15.2781 14.677 15.7471 15.076 15.7471 15.776C15.7471 16.476 15.2781 16.875 14.3821 16.875Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">Access to members only products</span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M24.0241 10.4725H8.73952C8.50449 10.4725 8.31396 10.6712 8.31396 10.9162V21.0038C8.31396 21.2489 8.50449 21.4476 8.73952 21.4476H24.0241C24.2592 21.4476 24.4497 21.2489 24.4497 21.0038V10.9162C24.4497 10.6712 24.2592 10.4725 24.0241 10.4725Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.3819 12.7156L17.4366 14.8523L19.7951 15.1927L18.087 16.8583L18.4913 19.2077L16.3819 18.0983L14.2726 19.2077L14.6738 16.8583L12.9688 15.1927L15.3273 14.8523L16.3819 12.7156Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.9668 6.65044L2.47464 18.7943C2.30837 18.9559 2.31207 19.2294 2.4829 19.4051L4.59933 21.5822C4.77016 21.758 5.04342 21.7694 5.20969 21.6078L17.7018 9.46393C17.8681 9.3023 17.8644 9.02881 17.6936 8.85308L15.5771 6.67595C15.4063 6.50022 15.133 6.4888 14.9668 6.65044Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.96053 10.5935C7.96053 10.5935 7.30705 4.51483 11.1214 4.92818C11.1214 4.92818 14.1608 5.07103 13.1183 8.43864L9.51972 11.9339L8.33132 10.7182L7.96053 10.5935Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.24339 11.873C6.24339 11.873 0.164673 11.2195 0.578026 15.0339C0.578026 15.0339 0.72089 18.0733 4.0885 17.0308L7.85425 13.4078L6.52909 12.0797L6.24339 11.873Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M18.0029 2.57492V5.36201"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M22.3146 4.35638L20.2839 6.36765"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M24.5578 8.4202L21.5159 8.4202"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.49901 10.7063L6.70355 11.4795C6.47005 11.7065 6.46477 12.0798 6.69176 12.3133L10.2086 15.931C10.4356 16.1645 10.8089 16.1698 11.0424 15.9428L11.8378 15.1695C12.0713 14.9425 12.0766 14.5692 11.8496 14.3357L8.33279 10.718C8.10581 10.4845 7.73251 10.4793 7.49901 10.7063Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">Exclusive member pricing &amp; deals</span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="27"
                                  height="25"
                                  viewBox="0 0 27 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.33463 15.0737V7.76117C2.33463 7.60472 2.39776 7.45469 2.51014 7.34406C2.62252 7.23344 2.77493 7.1713 2.93385 7.1713H18.8193C18.9773 7.17512 19.1278 7.2384 19.2399 7.34812C19.3519 7.45784 19.4169 7.60566 19.4216 7.76117V19.9904C19.4169 20.1459 19.3519 20.2937 19.2399 20.4034C19.1278 20.5131 18.9773 20.5764 18.8193 20.5802H10.0776M5.55569 20.5802H2.93076C2.77184 20.5802 2.61942 20.5181 2.50705 20.4075C2.39467 20.2968 2.33154 20.1468 2.33154 19.9904V18.689"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M26.5579 16.2566V19.8475C26.558 20.0057 26.4964 20.1577 26.3863 20.2712C26.2762 20.3847 26.1261 20.4509 25.968 20.4556H24.7062C24.5895 19.9651 24.3109 19.5283 23.9153 19.2158C23.5197 18.9032 23.0303 18.7332 22.5261 18.7332C22.0219 18.7332 21.5325 18.9032 21.1369 19.2158C20.7413 19.5283 20.4627 19.9651 20.346 20.4556H19.4338V13.8758H24.2045C24.8319 13.8806 25.4319 14.1339 25.873 14.5801C26.314 15.0263 26.5603 15.6292 26.5579 16.2566V16.2566Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M24.5996 13.8764H19.4307V10.623H23.353C23.6996 10.6716 23.7757 11.3071 24.1162 12.2892L24.5996 13.8764Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M19.4216 8.65488H23.3044C23.5649 8.65488 23.8147 8.75835 23.9989 8.94253C24.1831 9.12671 24.2866 9.37651 24.2866 9.63698V10.4214C24.2866 10.4474 24.2814 10.4731 24.2715 10.4971C24.2616 10.5211 24.247 10.5429 24.2287 10.5612C24.2103 10.5796 24.1885 10.5941 24.1646 10.604C24.1406 10.614 24.1149 10.6191 24.0889 10.6191H19.4216V8.65488Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M0.557861 18.6643H4.93933"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M1.34229 16.8645H7.48121"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M11.2637 18.6643H17.8192"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M24.5784 16.1049H26.5365V18.0569H25.5574C25.2978 18.0569 25.0487 17.9538 24.8651 17.7701C24.6815 17.5865 24.5784 17.3375 24.5784 17.0778V16.1049Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M10.0142 20.5804C9.92707 20.0571 9.65712 19.5816 9.25234 19.2386C8.84756 18.8957 8.33423 18.7074 7.80368 18.7074C7.27314 18.7074 6.7598 18.8957 6.35502 19.2386C5.95024 19.5816 5.68029 20.0571 5.59319 20.5804C5.57225 20.6999 5.56207 20.821 5.56278 20.9423C5.56278 21.2365 5.62074 21.5279 5.73336 21.7998C5.84597 22.0717 6.01104 22.3187 6.21913 22.5268C6.42721 22.7349 6.67425 22.9 6.94612 23.0126C7.218 23.1252 7.5094 23.1832 7.80368 23.1832C8.09796 23.1832 8.38936 23.1252 8.66124 23.0126C8.93311 22.9 9.18015 22.7349 9.38823 22.5268C9.59632 22.3187 9.76139 22.0717 9.874 21.7998C9.98662 21.5279 10.0446 21.2365 10.0446 20.9423C10.0453 20.821 10.0351 20.6999 10.0142 20.5804ZM7.80368 21.6142C7.62546 21.6142 7.45454 21.5434 7.32853 21.4174C7.20251 21.2914 7.13172 21.1205 7.13172 20.9423C7.13104 20.8134 7.16917 20.6873 7.24117 20.5804C7.30124 20.4856 7.38432 20.4075 7.48266 20.3534C7.581 20.2993 7.69143 20.2709 7.80368 20.2709C7.91593 20.2709 8.02636 20.2993 8.1247 20.3534C8.22304 20.4075 8.30612 20.4856 8.36619 20.5804C8.43819 20.6873 8.47633 20.8134 8.47564 20.9423C8.47564 21.0305 8.45827 21.1179 8.4245 21.1994C8.39073 21.2809 8.34123 21.355 8.27883 21.4174C8.21644 21.4798 8.14236 21.5293 8.06083 21.5631C7.9793 21.5969 7.89192 21.6142 7.80368 21.6142Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M24.7062 20.4246C24.5895 19.9341 24.3109 19.4973 23.9153 19.1847C23.5197 18.8722 23.0302 18.7022 22.5261 18.7022C22.0219 18.7022 21.5325 18.8722 21.1369 19.1847C20.7413 19.4973 20.4626 19.9341 20.346 20.4246C20.3054 20.5939 20.285 20.7674 20.2852 20.9415C20.2852 21.5358 20.5213 22.1058 20.9415 22.526C21.3618 22.9463 21.9317 23.1824 22.5261 23.1824C23.1204 23.1824 23.6904 22.9463 24.1106 22.526C24.5309 22.1058 24.767 21.5358 24.767 20.9415C24.7671 20.7674 24.7467 20.5939 24.7062 20.4246V20.4246ZM22.5321 21.6134C22.3539 21.6134 22.183 21.5426 22.057 21.4166C21.931 21.2906 21.8602 21.1197 21.8602 20.9415C21.8602 20.7633 21.931 20.5923 22.057 20.4663C22.183 20.3403 22.3539 20.2695 22.5321 20.2695C22.7104 20.2695 22.8813 20.3403 23.0073 20.4663C23.1333 20.5923 23.2041 20.7633 23.2041 20.9415C23.2041 21.1197 23.1333 21.2906 23.0073 21.4166C22.8813 21.5426 22.7104 21.6134 22.5321 21.6134Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M8.47553 20.9418C8.47553 21.12 8.40474 21.2909 8.27872 21.417C8.1527 21.543 7.98178 21.6138 7.80357 21.6138C7.62535 21.6138 7.45443 21.543 7.32841 21.417C7.20239 21.2909 7.1316 21.12 7.1316 20.9418C7.13092 20.8129 7.16906 20.6869 7.24106 20.58C7.30113 20.4852 7.3842 20.4071 7.48255 20.3529C7.58089 20.2988 7.69132 20.2704 7.80357 20.2704C7.91582 20.2704 8.02624 20.2988 8.12459 20.3529C8.22293 20.4071 8.306 20.4852 8.36607 20.58C8.43807 20.6869 8.47621 20.8129 8.47553 20.9418V20.9418Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M23.1979 20.9419C23.1979 21.1201 23.1272 21.291 23.0011 21.417C22.8751 21.5431 22.7042 21.6139 22.526 21.6139C22.3478 21.6139 22.1768 21.5431 22.0508 21.417C21.9248 21.291 21.854 21.1201 21.854 20.9419C21.854 20.7637 21.9248 20.5928 22.0508 20.4667C22.1768 20.3407 22.3478 20.2699 22.526 20.2699C22.7042 20.2699 22.8751 20.3407 23.0011 20.4667C23.1272 20.5928 23.1979 20.7637 23.1979 20.9419V20.9419Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.64825 3.90262C6.40217 3.57342 6.28929 3.16354 6.33215 2.75478C6.375 2.34602 6.57044 1.96845 6.87944 1.69746C7.18844 1.42646 7.58827 1.28196 7.99913 1.29281C8.40998 1.30365 8.80164 1.46904 9.09591 1.75597C9.09591 1.75597 10.0476 2.55868 11.1057 7.06177C9.42926 6.30746 7.91536 5.23452 6.64825 3.90262V3.90262Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M11.1723 7.17148L5.42261 4.8728"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M15.6939 3.90262C15.94 3.57342 16.0528 3.16354 16.01 2.75478C15.9671 2.34602 15.7717 1.96845 15.4627 1.69746C15.1537 1.42646 14.7538 1.28196 14.343 1.29281C13.9321 1.30365 13.5405 1.46904 13.2462 1.75597C13.2462 1.75597 12.2428 2.60429 11.1877 7.10434C12.8792 6.33253 14.4085 5.24597 15.6939 3.90262V3.90262Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M11.1724 7.17148L16.919 4.8728"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.33426 10.9696V10.5134H3.74373V14.1841H4.26813V12.7001H6.10877V12.2491H4.26813V10.9696H6.33426ZM10.0982 14.1841L9.22772 12.9518C9.74163 12.7683 10.0353 12.3592 10.0353 11.7929C10.0353 10.9958 9.45845 10.5134 8.50405 10.5134H7.07244V14.1841H7.59684V13.0672H8.50405C8.5827 13.0672 8.66136 13.0619 8.73478 13.0567L9.52662 14.1841H10.0982ZM8.48831 12.6214H7.59684V10.9696H8.48831C9.15954 10.9696 9.51089 11.2685 9.51089 11.7929C9.51089 12.3173 9.15954 12.6214 8.48831 12.6214ZM11.4069 13.7279V12.5428H13.2476V12.097H11.4069V10.9696H13.4731V10.5134H10.8825V14.1841H13.5465V13.7279H11.4069ZM14.92 13.7279V12.5428H16.7606V12.097H14.92V10.9696H16.9861V10.5134H14.3956V14.1841H17.0595V13.7279H14.92Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">Free Shipping</span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="19"
                                  height="29"
                                  viewBox="0 0 19 29"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.4038 10.8601C15.2522 11.7338 16.7481 13.2107 17.6452 15.0479C18.5423 16.8851 18.7871 18.9729 18.3394 20.9678C17.8917 22.9626 16.7782 24.7456 15.182 26.0232C13.5859 27.3009 11.6023 27.997 9.55785 27.997C7.51336 27.997 5.5298 27.3009 3.93367 26.0232C2.33755 24.7456 1.224 22.9626 0.776304 20.9678C0.328607 18.9729 0.57345 16.8851 1.47054 15.0479C2.36764 13.2107 3.8635 11.7338 5.71191 10.8601"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.53725 12.2842C10.832 12.2834 12.098 12.6666 13.1749 13.3855C14.2518 14.1043 15.0912 15.1264 15.5871 16.3225C16.083 17.5185 16.2129 18.8348 15.9605 20.1047C15.7081 21.3746 15.0847 22.5412 14.1692 23.4567C13.2536 24.3722 12.0871 24.9957 10.8172 25.248C9.54725 25.5004 8.23099 25.3705 7.03493 24.8746C5.83888 24.3788 4.81677 23.5393 4.09794 22.4624C3.37912 21.3855 2.99588 20.1195 2.99669 18.8248C2.99888 17.0908 3.68867 15.4284 4.91479 14.2023C6.14091 12.9762 7.80326 12.2864 9.53725 12.2842ZM9.53725 11.8716C8.16349 11.8716 6.82058 12.279 5.67839 13.0423C4.53621 13.8056 3.64606 14.8905 3.12054 16.1598C2.59501 17.429 2.45773 18.8256 2.72604 20.1729C2.99435 21.5202 3.65618 22.7577 4.62787 23.7288C5.59955 24.6999 6.83743 25.3611 8.18489 25.6286C9.53236 25.8961 10.9289 25.7579 12.1978 25.2317C13.4668 24.7054 14.5512 23.8146 15.3138 22.6719C16.0764 21.5293 16.483 20.1862 16.4822 18.8124C16.4822 17.9006 16.3026 16.9977 15.9535 16.1553C15.6044 15.3129 15.0928 14.5476 14.4478 13.903C13.8029 13.2584 13.0373 12.7473 12.1947 12.3987C11.3521 12.0501 10.4491 11.871 9.53725 11.8716Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M11.2498 10.0643H7.86601L5.46436 5.7644H13.6514L11.2498 10.0643Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.6514 5.76501H5.46436L6.44234 3.78427H12.6734L13.6514 5.76501Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.2842 10.1713L11.2993 5.86319L10.6308 3.70914"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.83176 10.1713L7.81665 5.86319L8.48928 3.70914"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.70239 2.12877V0.478149"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.2388 2.90037L14.0847 2.05029"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.9924 5.7644H15.6568"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.88107 2.90037L5.03101 2.05029"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4.08187 5.7644H3.42163"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">
                                Chance to win a $10,000 Ring in every product
                              </span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width="21"
                                  height="26"
                                  viewBox="0 0 21 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.3521 5.63562C20.3492 5.55402 20.3188 5.47584 20.266 5.41384C20.2131 5.35185 20.1409 5.30971 20.0612 5.29432C20.05 5.29432 18.8363 5.06028 17.1033 4.39864C15.4901 3.78381 13.0889 2.66384 10.7895 0.816902L10.7682 0.800324L10.7551 0.79106L10.7507 0.788135L10.741 0.782284L10.6848 0.754492H10.6789L10.6673 0.750104H10.6629L10.6465 0.745228L10.6334 0.742303H10.6275H10.6174L10.5592 0.737427L10.516 0.739865H10.5053L10.4874 0.743278H10.483L10.4719 0.745716H10.4661L10.4539 0.749129H10.4491L10.4389 0.752542L10.3841 0.777408L10.3788 0.780821L10.3686 0.78716H10.3647L10.3521 0.795936L10.3395 0.805687L10.3303 0.813001C8.03578 2.65702 5.64185 3.77503 4.03879 4.3884C2.29074 5.05736 1.06687 5.29139 1.05475 5.29334C0.975038 5.30882 0.902892 5.35098 0.850061 5.41296C0.79723 5.47493 0.766828 5.55307 0.763809 5.63465C0.763809 5.65074 0.715319 7.26656 0.771567 9.36217C0.846726 12.1594 1.0625 14.4013 1.41357 16.0239C1.65941 17.3755 2.28977 18.7232 3.2872 20.0396C4.0771 21.0801 5.09877 22.1016 6.3241 23.0762C8.37811 24.7101 10.2959 25.6511 10.4021 25.7023L10.4181 25.7096L10.4321 25.7155L10.4399 25.7184C10.4545 25.7236 10.4694 25.7279 10.4845 25.7311V25.7311L10.5053 25.7345L10.5291 25.7374H10.5558H10.5781H10.5878H10.6038L10.6251 25.734H10.6319C10.647 25.7308 10.6619 25.7266 10.6765 25.7213H10.6818L10.6979 25.7145L10.7105 25.7092C10.8186 25.657 13.3716 24.4093 15.7568 22.2654C16.7571 21.3668 17.5872 20.4336 18.2239 19.493C18.9929 18.357 19.49 17.1936 19.7004 16.0351C20.052 14.4076 20.2677 12.1662 20.3429 9.36948C20.4006 7.26852 20.3526 5.65122 20.3521 5.63562Z"
                                    stroke="#333132"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.60254 13.0424L10.2732 16.314L17.1063 8.60202"
                                    stroke="#333132"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.2695 7.42748C13.0408 6.59337 11.57 6.19647 10.0912 6.29993C8.6123 6.40339 7.21035 7.00128 6.10843 7.99843C5.00651 8.99558 4.26795 10.3347 4.01029 11.8026C3.75264 13.2706 3.9907 14.783 4.68658 16.0992C5.38246 17.4154 6.49618 18.4598 7.85048 19.066C9.20478 19.6723 10.7218 19.8056 12.1602 19.4448C13.5985 19.084 14.8756 18.2498 15.788 17.0749C16.7004 15.9001 17.1958 14.4521 17.1953 12.9615C17.1953 12.6129 17.1684 12.2649 17.1148 11.9205"
                                    stroke="#333132"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">
                                Cancel any time. No commitment necessary.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
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
                <div className="pdp-modal-btns">
                  <button type="button" className="pdp-modal-btns__item">
                    <svg
                      className="pdp-modal-btns__icon"
                      width={27}
                      height={24}
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.9244 7.93567L1 6.07062H3.9244V7.93567Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5606 6.07062V17.0297L17.6362 15.1646L11.9664 11.5539L17.6362 7.93567L20.5606 6.07062Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5608 6.07062L17.6364 7.93567V6.07062H20.5608Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.60163 11.5539L3.9244 15.1646L1 17.0297V6.07062L3.9244 7.93567L9.60163 11.5539Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.92444 0.445648V7.90587L9.60166 11.5166L10.7804 12.2626L11.9591 11.5166L17.6363 7.90587V0.445648H3.92444Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.9244 6.07062V7.93567L1 6.07062H3.9244Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5608 6.07062L17.6364 7.93567V6.07062H20.5608Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5607 17.0297H1L3.9244 15.1646L9.60163 11.5539L10.7803 12.2999L11.9665 11.5539L17.6363 15.1646L20.5607 17.0297Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 6.07064L3.9244 4.21304V6.07064H1Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5608 6.07064H17.6364V4.21304L20.5608 6.07064Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.2045 5.47383C14.1745 5.67272 14.1695 5.87702 14.115 6.07065C13.4212 8.49522 10.7728 10.032 10.7728 10.032C8.41541 8.43554 7.66192 6.89127 7.41574 6.07065C7.35742 5.87878 7.3199 5.68119 7.30383 5.48129C7.30465 5.07469 7.44158 4.68006 7.69278 4.36034C7.94399 4.04062 8.29501 3.8142 8.68987 3.7172C9.08474 3.6202 9.50071 3.6582 9.87147 3.82514C10.2422 3.99208 10.5464 4.27834 10.7355 4.63829V4.72781C10.9047 4.34765 11.1996 4.03728 11.5705 3.84879C11.9415 3.6603 12.3661 3.60517 12.7729 3.69265C13.1797 3.78014 13.544 4.00492 13.8047 4.32925C14.0654 4.65358 14.2066 5.05772 14.2045 5.47383Z"
                        fill="#9952BD"
                      />
                    </svg>
                    <span>Drop a Hint</span>
                  </button>
                  <button type="button" className="pdp-modal-btns__item">
                    <svg
                      className="pdp-modal-btns__icon"
                      width={34}
                      height={20}
                      viewBox="0 0 34 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8175 17.3464H11.6963M11.6963 17.3464C5.55542 17.3464 0.577698 15.8242 0.577698 13.9487V4.12913M11.6963 17.3464C17.7738 17.3464 23.3846 19.8325 33.6685 18.7055V9.13574C23.3846 10.2627 17.7738 7.77663 11.6963 7.77663M22.816 4.75496V9.04972M4.0706 16.42V13.4272M9.00414 17.2456V12.7855M13.9377 17.2377V14.4404M18.8701 18.1143V13.6542M23.8037 18.7712V15.9603M28.7372 19V14.5399M15.5358 4.27426C15.5358 4.85301 13.5866 5.32077 11.6963 5.32077C9.806 5.32077 7.85795 4.85301 7.85795 4.27426C7.85795 3.69551 9.80826 3.22888 11.6963 3.22888C13.5843 3.22888 15.5358 3.69664 15.5358 4.27426ZM22.8161 4.39776C22.8161 6.27559 17.8383 7.79552 11.6963 7.79552C5.5543 7.79552 0.577717 6.27559 0.577717 4.39776C0.577717 2.51993 5.5611 1 11.6963 1C17.8315 1 22.8161 2.51993 22.8161 4.39776Z"
                        stroke="#313131"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Size Guide</span>
                  </button>
                  <button type="button" className="pdp-modal-btns__item">
                    <svg
                      className="pdp-modal-btns__icon"
                      width={21}
                      height={26}
                      viewBox="0 0 21 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6648 15.6791C10.6905 15.6791 10.6423 15.6791 10.6648 15.6791ZM10.6648 15.6791L17.8648 7.87194L14.8399 4.00657H6.43343L3.42781 7.88787M10.6648 15.6791L3.42781 7.88787M10.6648 15.6791L7.72339 7.84166M10.6648 15.6791L13.6061 7.84166M3.42781 7.88787L17.8648 7.87353M9.41495 4.00657L7.72339 7.8576M13.6061 7.8576L11.9146 4.00657M4.09767 18.0086H17.1949M4.09767 19.997H12.2455M4.09767 21.9855H15.0904M0.648682 1V25H20.6487V1H0.648682Z"
                        stroke="#414042"
                        strokeWidth="0.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Care Guide</span>
                  </button>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
