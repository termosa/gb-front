import React, { useContext, useEffect, useRef, useState } from 'react'
import formatPrice from '@fragrantjewels/gravity-brands.modules.format-price'
import getLabel from '@fragrantjewels/gravity-brands.modules.get-label'
import { ProductImage, ProductVariant } from '@fragrantjewels/gravity-brands.modules.normalize-product'
import { parse } from 'node-html-parser'
import removeNewLineCharacters from '@fragrantjewels/gravity-brands.modules.remove-new-line-characters'
import handleGalleryScrolling from '@fragrantjewels/gravity-brands.modules.handle-gallery-scrolling'
import Slider, { Settings } from 'react-slick'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'

type ProductDescription = {
  title: string
  content: string
}

const Product = (): null | React.ReactElement => {
  const product = useContext(ProductContext)

  const [productDescription, setProductDescription] = useState<any>()
  const [isDiscountApplied, setDiscountApplied] = useState<boolean>(true)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [currentVariant, setCurrentVariant] = useState<number | null>(null)
  const [activeGalleryItem, setActiveGalleryItem] = useState<number | null>(0)
  const [isLargeScreen, setLargeScreen] = useState<boolean>()
  const [actualPrice, setActualPrice] = useState<number>(0)
  const [comparePrice, setComparePrice] = useState<number | null>(0)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const productHeadingRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const galleryImageHeight = 474

  useEffect(() => {
    window.addEventListener('scroll', () => {
      product &&
        product.images &&
        handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem, galleryImageHeight)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        product &&
          product.images &&
          handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem, galleryImageHeight)
      })
    }
  }, [product])

  useEffect(() => {
    if (!isLargeScreen) {
      setLargeScreen(window.innerWidth > 992)
    }
    return () => {}
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setLargeScreen(window.innerWidth > 992)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setLargeScreen(window.innerWidth > 992)
      })
    }
  }, [setLargeScreen])

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
          Home / All / Bundles / <span>{product.title}</span>
        </div>
      </div>
      <div className="app-h-container">
        <div className="pdp-row-wrapper">
          <div className="pdp-row">
            <div className="pdp-col pdp-col-61">
              <div className="pdp-s-carousel-wrapper">
                <div className="pdp-s-row-wrapper">
                  {isLargeScreen ? (
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
                                  window.scrollTo({
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
                    <Slider {...sliderSettings}>
                      {product.images?.map((image) => (
                        <div className="pdp-carousel-item-mobile" key={image?.src}>
                          <img src={image?.src} alt={image?.alt} />
                        </div>
                      ))}
                    </Slider>
                  )}
                  {/*<div className="pdp-s-row" style={isLargeScreen ? {display: "none"} : {display: "flex"}}>
                    <div className="pdp-s-col pdp-s-col-sm pdp-carousel-icons">
                      <ul className="pdp-carousel-icons__list" id="pdp-carousel-icons__list">
                        {product.images?.map((image) => (
                          <li key={image.src}>
                            <img src={image.src} alt={image.alt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pdp-s-col pdp-s-col-lg">
                      <div className="pdp-carousel" id="pdp-carousel">
                        {product.images?.map((image) => (
                          <div className="pdp-carousel__item" key={image?.src}>
                            <img src={image?.src} alt={image?.alt} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="pdp-col pdp-col-35">
              <div className="pdp-product-info">
                <h3 className="pdp-product-info__ic-title" ref={productHeadingRef}>
                  INNER CIRCLE EXCLUSIVE
                </h3>
                <h2 className="pdp-product-info__title">{product.title}</h2>
                <div className="pdp-pi-rating">
                  <div className="pdp-pi-rating__stars">
                    <svg
                      className="pdp-star-icon"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17315 0.463526C7.32283 0.0028708 7.97453 0.00286996 8.12421 0.463525L9.55705 4.87336C9.62399 5.07937 9.81597 5.21885 10.0326 5.21885H14.6693C15.1537 5.21885 15.3551 5.83865 14.9632 6.12336L11.212 8.84878C11.0368 8.9761 10.9634 9.20179 11.0304 9.4078L12.4632 13.8176C12.6129 14.2783 12.0857 14.6613 11.6938 14.3766L7.94257 11.6512C7.76733 11.5239 7.53003 11.5239 7.35479 11.6512L3.60356 14.3766C3.21171 14.6613 2.68447 14.2783 2.83414 13.8176L4.26698 9.4078C4.33392 9.20179 4.26059 8.9761 4.08535 8.84878L0.334123 6.12336C-0.057734 5.83866 0.143653 5.21885 0.628015 5.21885H5.26478C5.4814 5.21885 5.67338 5.07937 5.74031 4.87336L7.17315 0.463526Z"
                        fill="#9059C8"
                      />
                    </svg>
                    <svg
                      className="pdp-star-icon"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17315 0.463526C7.32283 0.0028708 7.97453 0.00286996 8.12421 0.463525L9.55705 4.87336C9.62399 5.07937 9.81597 5.21885 10.0326 5.21885H14.6693C15.1537 5.21885 15.3551 5.83865 14.9632 6.12336L11.212 8.84878C11.0368 8.9761 10.9634 9.20179 11.0304 9.4078L12.4632 13.8176C12.6129 14.2783 12.0857 14.6613 11.6938 14.3766L7.94257 11.6512C7.76733 11.5239 7.53003 11.5239 7.35479 11.6512L3.60356 14.3766C3.21171 14.6613 2.68447 14.2783 2.83414 13.8176L4.26698 9.4078C4.33392 9.20179 4.26059 8.9761 4.08535 8.84878L0.334123 6.12336C-0.057734 5.83866 0.143653 5.21885 0.628015 5.21885H5.26478C5.4814 5.21885 5.67338 5.07937 5.74031 4.87336L7.17315 0.463526Z"
                        fill="#9059C8"
                      />
                    </svg>
                    <svg
                      className="pdp-star-icon"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17315 0.463526C7.32283 0.0028708 7.97453 0.00286996 8.12421 0.463525L9.55705 4.87336C9.62399 5.07937 9.81597 5.21885 10.0326 5.21885H14.6693C15.1537 5.21885 15.3551 5.83865 14.9632 6.12336L11.212 8.84878C11.0368 8.9761 10.9634 9.20179 11.0304 9.4078L12.4632 13.8176C12.6129 14.2783 12.0857 14.6613 11.6938 14.3766L7.94257 11.6512C7.76733 11.5239 7.53003 11.5239 7.35479 11.6512L3.60356 14.3766C3.21171 14.6613 2.68447 14.2783 2.83414 13.8176L4.26698 9.4078C4.33392 9.20179 4.26059 8.9761 4.08535 8.84878L0.334123 6.12336C-0.057734 5.83866 0.143653 5.21885 0.628015 5.21885H5.26478C5.4814 5.21885 5.67338 5.07937 5.74031 4.87336L7.17315 0.463526Z"
                        fill="#9059C8"
                      />
                    </svg>
                    <svg
                      className="pdp-star-icon"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17315 0.463526C7.32283 0.0028708 7.97453 0.00286996 8.12421 0.463525L9.55705 4.87336C9.62399 5.07937 9.81597 5.21885 10.0326 5.21885H14.6693C15.1537 5.21885 15.3551 5.83865 14.9632 6.12336L11.212 8.84878C11.0368 8.9761 10.9634 9.20179 11.0304 9.4078L12.4632 13.8176C12.6129 14.2783 12.0857 14.6613 11.6938 14.3766L7.94257 11.6512C7.76733 11.5239 7.53003 11.5239 7.35479 11.6512L3.60356 14.3766C3.21171 14.6613 2.68447 14.2783 2.83414 13.8176L4.26698 9.4078C4.33392 9.20179 4.26059 8.9761 4.08535 8.84878L0.334123 6.12336C-0.057734 5.83866 0.143653 5.21885 0.628015 5.21885H5.26478C5.4814 5.21885 5.67338 5.07937 5.74031 4.87336L7.17315 0.463526Z"
                        fill="#9059C8"
                      />
                    </svg>
                    <svg
                      className="pdp-star-icon"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17315 0.463526C7.32283 0.0028708 7.97453 0.00286996 8.12421 0.463525L9.55705 4.87336C9.62399 5.07937 9.81597 5.21885 10.0326 5.21885H14.6693C15.1537 5.21885 15.3551 5.83865 14.9632 6.12336L11.212 8.84878C11.0368 8.9761 10.9634 9.20179 11.0304 9.4078L12.4632 13.8176C12.6129 14.2783 12.0857 14.6613 11.6938 14.3766L7.94257 11.6512C7.76733 11.5239 7.53003 11.5239 7.35479 11.6512L3.60356 14.3766C3.21171 14.6613 2.68447 14.2783 2.83414 13.8176L4.26698 9.4078C4.33392 9.20179 4.26059 8.9761 4.08535 8.84878L0.334123 6.12336C-0.057734 5.83866 0.143653 5.21885 0.628015 5.21885H5.26478C5.4814 5.21885 5.67338 5.07937 5.74031 4.87336L7.17315 0.463526Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-0.351318"
                          y1={7}
                          x2="15.6487"
                          y2={7}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.5" stopColor="#9952BD" />
                          <stop offset="0.5001" stopColor="#DADADA" />
                          <stop offset={1} stopColor="#DADADA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href="#" className="pdp-pi-rating__link">
                      121
                    </a>
                  </div>
                </div>
                <div className="pdp-product-details">
                  {isDiscountApplied ? (
                    <>
                      <span className="pdp-product-details__discount-price">
                        {comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)}
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
                            {comparePrice ? formatPrice(comparePrice) : formatPrice(actualPrice)}
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
                            variant.variant_id === currentVariant && 'pdp-pi-selector__btn_active'
                          }`}
                          type="button"
                          value={Number(variant.title)}
                          onClick={() => {
                            setSelectRingError(false)
                            setCurrentVariant(variant.variant_id)
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
                              />
                              <img
                                className="pdp__chooser__info-icon pdp__chooser__info-icon-2"
                                src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/pdp/pdp-close-icon.png"
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
                                  width={22}
                                  height={20}
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.42284 7.01056C3.17126 6.19137 3.46933 5.3443 3.4436 4.59159"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.97122 11.2884L13.752 16.8983C13.8478 16.9775 13.9582 17.037 14.0769 17.0735C14.1957 17.11 14.3204 17.1227 14.4441 17.1109C14.5678 17.0992 14.6879 17.0632 14.7977 17.005C14.9074 16.9468 15.0046 16.8676 15.0838 16.7718L17.8716 13.4028L20.6594 10.0339C20.7387 9.93825 20.7983 9.82797 20.835 9.7093C20.8717 9.59063 20.8846 9.4659 20.873 9.34224C20.8615 9.21858 20.8257 9.09841 20.7677 8.98858C20.7097 8.87875 20.6306 8.78142 20.535 8.70214L11.6891 1.38736C11.5858 1.29991 11.465 1.23552 11.3348 1.19854C11.2046 1.16155 11.068 1.15282 10.9342 1.17291L5.19775 2.1036C4.96884 2.13916 4.76095 2.25752 4.61351 2.43619C4.46607 2.61486 4.38933 2.84141 4.39786 3.07291L4.47506 5.8264"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M8.07131 3.86201C7.90251 3.72303 7.69631 3.63715 7.47875 3.61526C7.26119 3.59337 7.04203 3.63643 6.84892 3.739C6.65582 3.84157 6.49742 3.99905 6.39374 4.19156C6.29006 4.38407 6.24573 4.60298 6.26637 4.82066C6.287 5.03834 6.37166 5.24505 6.50966 5.41466C6.64766 5.58426 6.83282 5.70917 7.04176 5.77363C7.2507 5.83809 7.47406 5.8392 7.68363 5.77682C7.8932 5.71445 8.0796 5.59138 8.21928 5.42316C8.31237 5.31107 8.38239 5.18169 8.42535 5.04246C8.4683 4.90323 8.48334 4.7569 8.46959 4.61184C8.45584 4.46679 8.41358 4.32589 8.34523 4.19721C8.27688 4.06853 8.1838 3.95462 8.07131 3.86201V3.86201Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M13.2761 12.8138L12.6199 5.85498"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M10.3789 10.5468C10.9142 10.5468 11.3481 10.1128 11.3481 9.57749C11.3481 9.04216 10.9142 8.60821 10.3789 8.60821C9.84352 8.60821 9.40955 9.04216 9.40955 9.57749C9.40955 10.1128 9.84352 10.5468 10.3789 10.5468Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M16.1346 8.34398C16.2824 8.46615 16.3906 8.62943 16.4456 8.81313C16.5006 8.99684 16.4999 9.19271 16.4435 9.37601C16.3872 9.5593 16.2777 9.72177 16.129 9.84283C15.9803 9.9639 15.799 10.0381 15.6081 10.0561C15.4172 10.0741 15.2252 10.0351 15.0565 9.94401C14.8877 9.85289 14.7498 9.71377 14.6602 9.54425C14.5705 9.37473 14.5332 9.18244 14.5529 8.99169C14.5725 8.80094 14.6483 8.62032 14.7707 8.47267C14.9346 8.27488 15.1703 8.15023 15.426 8.1261C15.6817 8.10198 15.9366 8.18033 16.1346 8.34398V8.34398Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M12.103 17.2259L9.87486 18.6906C9.78 18.7547 9.67326 18.7991 9.56095 18.8213C9.44863 18.8435 9.333 18.843 9.22088 18.8198C9.10877 18.7967 9.00242 18.7513 8.90812 18.6863C8.81382 18.6214 8.73347 18.5383 8.67181 18.4418L4.97259 12.8126L2.2128 8.37267C2.06079 8.17307 1.8993 7.61424 2.46941 6.97571"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.97133 4.32298C5.0413 3.16497 1.23272 0.0812226 0.887462 2.21068C0.715905 3.28292 2.70812 3.67108 4.46015 3.6475"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
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
                                  width={18}
                                  height={22}
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.96411 7.95628V4.91263C4.96411 3.8749 5.37635 2.87967 6.11014 2.14588C6.84392 1.4121 7.83917 0.999859 8.8769 0.999859V0.999859C9.91463 0.999859 10.9099 1.4121 11.6436 2.14588C12.3774 2.87967 12.7897 3.8749 12.7897 4.91263V7.95628"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.2232 21.0001H3.5306C3.16394 20.9999 2.80144 20.9224 2.46672 20.7727C2.132 20.6231 1.83254 20.4046 1.58788 20.1315C1.34321 19.8584 1.1588 19.5368 1.04667 19.1878C0.934539 18.8387 0.897214 18.4699 0.937089 18.1054L2.35329 5.34904H15.4005L16.8167 18.1054C16.8571 18.47 16.8202 18.839 16.7083 19.1883C16.5963 19.5376 16.412 19.8594 16.1672 20.1326C15.9224 20.4059 15.6227 20.6243 15.2878 20.7738C14.9528 20.9233 14.59 21.0004 14.2232 21.0001Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.71491 11.7033L6.17691 15.185L4.65101 11.7033H3.99706L5.86204 15.9419H6.4615L8.32043 11.7033H7.71491ZM8.86094 15.9419H9.46645V11.7033H8.86094V15.9419ZM12.3885 11.7033H10.7354V15.9419H11.3409V14.6582H12.3885C13.4905 14.6582 14.1566 14.1012 14.1566 13.1808C14.1566 12.2604 13.4905 11.7033 12.3885 11.7033ZM12.3703 14.1315H11.3409V12.2301H12.3703C13.1454 12.2301 13.5511 12.5753 13.5511 13.1808C13.5511 13.7863 13.1454 14.1315 12.3703 14.1315Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">Access to members only products</span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width={22}
                                  height={18}
                                  viewBox="0 0 22 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.4323 7.52902H7.69512C7.49927 7.52902 7.3405 7.69458 7.3405 7.89881V16.3051C7.3405 16.5094 7.49927 16.6749 7.69512 16.6749H20.4323C20.6281 16.6749 20.7869 16.5094 20.7869 16.3051V7.89881C20.7869 7.69458 20.6281 7.52902 20.4323 7.52902Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.0638 9.39831L14.9426 11.1789L16.9081 11.4625L15.4847 12.8505L15.8215 14.8084L14.0638 13.8839L12.306 14.8084L12.6403 12.8505L11.2194 11.4625L13.1849 11.1789L14.0638 9.39831Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12.8846 4.34398L2.47447 14.4638C2.33591 14.5985 2.33899 14.8264 2.48135 14.9729L4.24504 16.7871C4.38739 16.9336 4.61511 16.9431 4.75368 16.8084L15.1638 6.68856C15.3023 6.55386 15.2993 6.32596 15.1569 6.17952L13.3932 4.36524C13.2508 4.2188 13.0231 4.20928 12.8846 4.34398Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.04605 7.62989C7.04605 7.62989 6.50149 2.5643 9.68015 2.90876C9.68015 2.90876 12.2129 3.0278 11.3442 5.83414L8.34538 8.74685L7.35505 7.73373L7.04605 7.62989Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.61506 8.69607C5.61506 8.69607 0.549464 8.15153 0.893925 11.3302C0.893925 11.3302 1.01298 13.863 3.81931 12.9942L6.95744 9.97514L5.85314 8.86831L5.61506 8.69607Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.4146 0.947721V3.27029"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M19.0077 2.43226L17.3155 4.10831"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M20.8771 5.81877L18.3422 5.81877"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.66141 7.72382L5.99853 8.36822C5.80395 8.55738 5.79955 8.86846 5.98871 9.06304L8.91937 12.0778C9.10853 12.2723 9.41961 12.2767 9.6142 12.0876L10.2771 11.4432C10.4717 11.254 10.4761 10.943 10.2869 10.7484L7.35623 7.73365C7.16708 7.53907 6.85599 7.53467 6.66141 7.72382Z"
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
                                  width={26}
                                  height={22}
                                  viewBox="0 0 26 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.62328 13.5911V6.91018C2.62328 6.76725 2.68095 6.63017 2.78362 6.5291C2.88629 6.42804 3.02554 6.37126 3.17074 6.37126H17.6841C17.8284 6.37475 17.9659 6.43256 18.0683 6.53281C18.1706 6.63305 18.2301 6.7681 18.2344 6.91018V18.0831C18.2301 18.2251 18.1706 18.3602 18.0683 18.4604C17.9659 18.5607 17.8284 18.6185 17.6841 18.622H9.6974M5.56611 18.622H3.16791C3.02272 18.622 2.88347 18.5652 2.7808 18.4641C2.67813 18.3631 2.62045 18.226 2.62045 18.0831V16.8941"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M24.7542 14.6718V17.9525C24.7542 18.097 24.698 18.2359 24.5974 18.3396C24.4968 18.4433 24.3597 18.5038 24.2153 18.5081H23.0624C22.9558 18.06 22.7013 17.6609 22.3398 17.3754C21.9784 17.0898 21.5312 16.9345 21.0706 16.9345C20.61 16.9345 20.1629 17.0898 19.8014 17.3754C19.44 17.6609 19.1854 18.06 19.0789 18.5081H18.2455V12.4967H22.6041C23.1773 12.5011 23.7254 12.7324 24.1284 13.1401C24.5314 13.5478 24.7564 14.0985 24.7542 14.6718V14.6718Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M22.9652 12.4972H18.2427V9.5248H21.8263C22.1429 9.56925 22.2124 10.1498 22.5235 11.0471L22.9652 12.4972Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M18.2343 7.72669H21.7817C22.0197 7.72669 22.2479 7.82122 22.4162 7.98949C22.5845 8.15777 22.679 8.38599 22.679 8.62396V9.34067C22.679 9.36438 22.6743 9.38787 22.6652 9.40977C22.6562 9.43168 22.6429 9.45159 22.6261 9.46835C22.6093 9.48512 22.5894 9.49842 22.5675 9.50749C22.5456 9.51657 22.5221 9.52124 22.4984 9.52124H18.2343V7.72669Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M1 16.8715H5.00301"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M1.71671 15.2272H7.32537"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M10.7812 16.8715H16.7704"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M22.9458 14.5332H24.7348V16.3166H23.8403C23.6031 16.3166 23.3755 16.2224 23.2078 16.0546C23.04 15.8869 22.9458 15.6593 22.9458 15.4221V14.5332Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M9.63941 18.6222C9.55983 18.144 9.3132 17.7096 8.94338 17.3963C8.57357 17.0829 8.10457 16.9109 7.61985 16.9109C7.13513 16.9109 6.66613 17.0829 6.29632 17.3963C5.92651 17.7096 5.67987 18.144 5.60029 18.6222C5.58117 18.7313 5.57187 18.8419 5.57251 18.9527C5.57251 19.2216 5.62547 19.4878 5.72835 19.7362C5.83124 19.9846 5.98205 20.2103 6.17217 20.4004C6.36228 20.5905 6.58797 20.7414 6.83637 20.8442C7.08476 20.9471 7.35099 21.0001 7.61985 21.0001C7.88871 21.0001 8.15494 20.9471 8.40333 20.8442C8.65173 20.7414 8.87742 20.5905 9.06754 20.4004C9.25765 20.2103 9.40846 19.9846 9.51135 19.7362C9.61424 19.4878 9.66719 19.2216 9.66719 18.9527C9.66784 18.8419 9.65854 18.7313 9.63941 18.6222ZM7.61985 19.5667C7.45703 19.5667 7.30087 19.502 7.18574 19.3869C7.07061 19.2717 7.00593 19.1156 7.00593 18.9527C7.00531 18.835 7.04015 18.7198 7.10593 18.6222C7.16081 18.5355 7.23671 18.4642 7.32656 18.4147C7.41641 18.3653 7.5173 18.3394 7.61985 18.3394C7.72241 18.3394 7.82329 18.3653 7.91314 18.4147C8.00299 18.4642 8.07889 18.5355 8.13377 18.6222C8.19955 18.7198 8.2344 18.835 8.23377 18.9527C8.23377 19.0334 8.2179 19.1132 8.18705 19.1877C8.15619 19.2622 8.11097 19.3298 8.05396 19.3869C7.99696 19.4439 7.92928 19.4891 7.85479 19.5199C7.78031 19.5508 7.70047 19.5667 7.61985 19.5667Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M23.0624 18.4798C22.9558 18.0316 22.7013 17.6326 22.3398 17.347C21.9784 17.0615 21.5312 16.9061 21.0706 16.9061C20.61 16.9061 20.1628 17.0615 19.8014 17.347C19.44 17.6326 19.1854 18.0316 19.0788 18.4798C19.0418 18.6344 19.0231 18.793 19.0233 18.952C19.0233 19.495 19.239 20.0157 19.6229 20.3997C20.0069 20.7837 20.5276 20.9994 21.0706 20.9994C21.6136 20.9994 22.1344 20.7837 22.5183 20.3997C22.9023 20.0157 23.118 19.495 23.118 18.952C23.1181 18.793 23.0995 18.6344 23.0624 18.4798V18.4798ZM21.0762 19.5659C20.9134 19.5659 20.7572 19.5013 20.6421 19.3861C20.5269 19.271 20.4623 19.1148 20.4623 18.952C20.4623 18.7892 20.5269 18.633 20.6421 18.5179C20.7572 18.4028 20.9134 18.3381 21.0762 18.3381C21.239 18.3381 21.3951 18.4028 21.5103 18.5179C21.6254 18.633 21.6901 18.7892 21.6901 18.952C21.6901 19.1148 21.6254 19.271 21.5103 19.3861C21.3951 19.5013 21.239 19.5659 21.0762 19.5659Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M8.23374 18.9523C8.23374 19.1151 8.16907 19.2713 8.05393 19.3864C7.9388 19.5016 7.78264 19.5662 7.61982 19.5662C7.457 19.5662 7.30084 19.5016 7.18571 19.3864C7.07057 19.2713 7.0059 19.1151 7.0059 18.9523C7.00528 18.8346 7.04012 18.7194 7.1059 18.6217C7.16078 18.5351 7.23668 18.4638 7.32653 18.4143C7.41638 18.3649 7.51727 18.339 7.61982 18.339C7.72237 18.339 7.82326 18.3649 7.91311 18.4143C8.00296 18.4638 8.07886 18.5351 8.13374 18.6217C8.19952 18.7194 8.23437 18.8346 8.23374 18.9523V18.9523Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M21.6846 18.9524C21.6846 19.1152 21.6199 19.2714 21.5048 19.3865C21.3897 19.5016 21.2335 19.5663 21.0707 19.5663C20.9079 19.5663 20.7517 19.5016 20.6366 19.3865C20.5214 19.2714 20.4568 19.1152 20.4568 18.9524C20.4568 18.7896 20.5214 18.6334 20.6366 18.5183C20.7517 18.4032 20.9079 18.3385 21.0707 18.3385C21.2335 18.3385 21.3897 18.4032 21.5048 18.5183C21.6199 18.6334 21.6846 18.7896 21.6846 18.9524V18.9524Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.56425 3.38491C6.33943 3.08415 6.2363 2.70966 6.27545 2.33621C6.31461 1.96276 6.49316 1.61781 6.77547 1.37022C7.05778 1.12263 7.42308 0.99061 7.79845 1.00052C8.17381 1.01043 8.53164 1.16154 8.80049 1.42368C8.80049 1.42368 9.66999 2.15706 10.6367 6.27119C9.10505 5.58203 7.72192 4.60176 6.56425 3.38491V3.38491Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M10.6977 6.37143L5.44463 4.2713"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M14.8286 3.3849C15.0534 3.08415 15.1566 2.70966 15.1174 2.33621C15.0782 1.96276 14.8997 1.61781 14.6174 1.37022C14.3351 1.12263 13.9698 0.99061 13.5944 1.00052C13.219 1.01043 12.8612 1.16154 12.5924 1.42368C12.5924 1.42368 11.6756 2.19872 10.7117 6.31008C12.2571 5.60493 13.6542 4.61223 14.8286 3.3849V3.3849Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M10.6978 6.37143L15.9481 4.2713"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M6.54885 9.99566V9.53943H3.95832V13.2102H4.48272V11.7262H6.32336V11.2752H4.48272V9.99566H6.54885ZM10.3128 13.2102L9.4423 11.9779C9.95621 11.7943 10.2499 11.3853 10.2499 10.819C10.2499 10.0219 9.67304 9.53943 8.71863 9.53943H7.28702V13.2102H7.81142V12.0933H8.71863C8.79729 12.0933 8.87595 12.088 8.94936 12.0828L9.74121 13.2102H10.3128ZM8.7029 11.6475H7.81142V9.99566H8.7029C9.37413 9.99566 9.72548 10.2946 9.72548 10.819C9.72548 11.3434 9.37413 11.6475 8.7029 11.6475ZM11.6215 12.754V11.5689H13.4621V11.1231H11.6215V9.99566H13.6876V9.53943H11.0971V13.2102H13.7611V12.754H11.6215ZM15.1346 12.754V11.5689H16.9752V11.1231H15.1346V9.99566H17.2007V9.53943H14.6102V13.2102H17.2741V12.754H15.1346Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                              <span className="pdp__chooser__ic-list__text">Free Shipping</span>
                            </li>
                            <li>
                              <div className="pdp__chooser__ic-list__icon">
                                <svg
                                  width={17}
                                  height={26}
                                  viewBox="0 0 17 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.2312 10.0543C13.8433 10.8163 15.1478 12.1044 15.9302 13.7066C16.7126 15.3088 16.9261 17.1297 16.5357 18.8695C16.1452 20.6092 15.1741 22.1642 13.7821 23.2784C12.39 24.3927 10.6601 24.9998 8.87709 24.9998C7.09405 24.9998 5.36414 24.3927 3.97212 23.2784C2.5801 22.1642 1.60896 20.6092 1.21851 18.8695C0.828062 17.1297 1.0416 15.3088 1.82397 13.7066C2.60634 12.1044 3.91092 10.8163 5.52296 10.0543"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.85912 11.2963C9.98832 11.2956 11.0924 11.6298 12.0316 12.2568C12.9707 12.8837 13.7029 13.7751 14.1353 14.8182C14.5678 15.8613 14.6811 17.0092 14.461 18.1167C14.2409 19.2243 13.6972 20.2416 12.8987 21.0401C12.1003 21.8386 11.0829 22.3822 9.97537 22.6024C8.86784 22.8225 7.7199 22.7092 6.67679 22.2767C5.63369 21.8442 4.74229 21.1121 4.11538 20.1729C3.48848 19.2337 3.15424 18.1297 3.15496 17.0005C3.15686 15.4882 3.75844 14.0385 4.82777 12.9691C5.8971 11.8998 7.34687 11.2982 8.85912 11.2963ZM8.85912 10.9364C7.66104 10.9364 6.48985 11.2918 5.49372 11.9575C4.4976 12.6231 3.72128 13.5693 3.26296 14.6763C2.80464 15.7832 2.68492 17.0012 2.91891 18.1763C3.15291 19.3513 3.73011 20.4305 4.57754 21.2774C5.42496 22.1243 6.50455 22.7009 7.6797 22.9342C8.85485 23.1675 10.0728 23.0471 11.1795 22.5881C12.2862 22.1291 13.2319 21.3522 13.897 20.3557C14.5621 19.3592 14.9167 18.1878 14.916 16.9897C14.916 16.1945 14.7593 15.407 14.4549 14.6724C14.1504 13.9377 13.7042 13.2703 13.1418 12.7081C12.5793 12.146 11.9115 11.7002 11.1767 11.3962C10.4419 11.0922 9.65435 10.936 8.85912 10.9364Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M10.3526 9.36027H7.40154L5.30701 5.61026H12.4471L10.3526 9.36027Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12.4471 5.61079H5.30701L6.15993 3.88335H11.5942L12.4471 5.61079Z"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.51057 9.45363L10.3959 5.69643L9.81289 3.81783"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.24376 9.45363L7.35846 5.69643L7.94507 3.81783"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9.00314 2.43954V1"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12.0873 3.11246L12.8251 2.37109"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.6167 5.61026H14.1962"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.67058 3.11246L4.92921 2.37109"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4.10143 5.61026H3.52562"
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
                                  width={21}
                                  height={26}
                                  viewBox="0 0 21 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20.6714 5.39797C20.6684 5.31637 20.6381 5.23818 20.5852 5.17619C20.5324 5.11419 20.4602 5.07206 20.3804 5.05666C20.3693 5.05666 19.1556 4.82262 17.4226 4.16098C15.8093 3.54615 13.4081 2.42619 11.1088 0.579246L11.0874 0.562669L11.0743 0.553405L11.07 0.550479L11.0603 0.544628L11.004 0.516836H10.9982L10.9866 0.512448H10.9822L10.9657 0.507572L10.9526 0.504647H10.9468H10.9366L10.8784 0.499771L10.8353 0.502209H10.8246L10.8067 0.505622H10.8023L10.7911 0.50806H10.7853L10.7732 0.511473H10.7684L10.7582 0.514886L10.7034 0.539752L10.698 0.543165L10.6879 0.549504H10.684L10.6714 0.55828L10.6588 0.568032L10.6496 0.575345C8.35504 2.41936 5.96111 3.53737 4.35805 4.15074C2.61 4.8197 1.38613 5.05374 1.37401 5.05569C1.2943 5.07116 1.22215 5.11332 1.16932 5.1753C1.11649 5.23728 1.08609 5.31542 1.08307 5.39699C1.08307 5.41308 1.03458 7.02891 1.09083 9.12451C1.16599 11.9217 1.38176 14.1636 1.73283 15.7863C1.97867 17.1378 2.60903 18.4855 3.60646 19.802C4.39636 20.8424 5.41803 21.8639 6.64336 22.8386C8.69737 24.4724 10.6151 25.4135 10.7213 25.4647L10.7373 25.472L10.7514 25.4778L10.7591 25.4808C10.7737 25.486 10.7886 25.4902 10.8038 25.4934V25.4934L10.8246 25.4968L10.8484 25.4998H10.875H10.8973H10.907H10.923L10.9444 25.4964H10.9512C10.9663 25.4931 10.9812 25.4889 10.9958 25.4837H11.0011L11.0171 25.4769L11.0297 25.4715C11.1378 25.4193 13.6908 24.1716 16.076 22.0277C17.0764 21.1291 17.9065 20.1959 18.5432 19.2554C19.3122 18.1193 19.8092 16.956 20.0197 15.7975C20.3712 14.17 20.587 11.9286 20.6622 9.13183C20.7199 7.03086 20.6719 5.41357 20.6714 5.39797Z"
                                    stroke="#333132"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.92175 12.8047L10.5924 16.0764L17.4255 8.36436"
                                    stroke="#333132"
                                    strokeWidth="0.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14.5888 7.18981C13.3602 6.3557 11.8894 5.9588 10.4105 6.06226C8.93165 6.16572 7.5297 6.7636 6.42778 7.76076C5.32586 8.75791 4.5873 10.097 4.32965 11.565C4.07199 13.0329 4.31005 14.5454 5.00593 15.8616C5.70182 17.1778 6.81553 18.2221 8.16983 18.8283C9.52413 19.4346 11.0412 19.5679 12.4795 19.2071C13.9179 18.8463 15.1949 18.0121 16.1073 16.8373C17.0197 15.6624 17.5151 14.2144 17.5147 12.7238C17.5147 12.3752 17.4877 12.0272 17.4342 11.6828"
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
                  onClick={() => {
                    if (!currentVariant) {
                      executeScroll()
                      setSelectRingError(true)
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
                      viewBox="0 0 27 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.52813 10.9361L0.648682 8.46194H4.52813V10.9361Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.5974 8.46194V23L22.7179 20.5258L15.1966 15.7359L22.7179 10.9361L26.5974 8.46194Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.5975 8.46194L22.718 10.9361V8.46194H26.5975Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0594 15.7359L4.52813 20.5258L0.648682 23V8.46194L4.52813 10.9361L12.0594 15.7359Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.52817 1V10.8965L12.0594 15.6865L13.6231 16.6761L15.1867 15.6865L22.718 10.8965V1H4.52817Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.52813 8.46194V10.9361L0.648682 8.46194H4.52813Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.5975 8.46194L22.718 10.9361V8.46194H26.5975Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.5974 23H0.648682L4.52813 20.5258L12.0594 15.7359L13.623 16.7256L15.1966 15.7359L22.718 20.5258L26.5974 23Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.648682 8.46197L4.52813 5.99773V8.46197H0.648682Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.5975 8.46197H22.718V5.99773L26.5975 8.46197Z"
                        stroke="#0B0B0B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.1655 7.67027C18.1257 7.93411 18.119 8.20512 18.0467 8.46199C17.1264 11.6784 13.6131 13.7171 13.6131 13.7171C10.4858 11.5992 9.48623 9.55061 9.15965 8.46199C9.08229 8.20746 9.03252 7.94534 9.0112 7.68016C9.01228 7.14077 9.19393 6.61727 9.52717 6.19314C9.86041 5.769 10.3261 5.46865 10.8499 5.33997C11.3737 5.21129 11.9255 5.2617 12.4174 5.48315C12.9092 5.70461 13.3127 6.08436 13.5636 6.56186V6.68061C13.7881 6.1763 14.1792 5.76457 14.6713 5.51452C15.1635 5.26447 15.7266 5.19134 16.2663 5.3074C16.806 5.42346 17.2893 5.72164 17.6351 6.15189C17.9809 6.58214 18.1682 7.11827 18.1655 7.67027Z"
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
                    <div className="pdp-a-item">
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
