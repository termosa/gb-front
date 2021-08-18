import React, { useContext, useEffect, useState } from 'react'
import addItemToCart from '../../lib/add-item-to-cart'
import styled from 'styled-components'
import { Product as ProductType, ProductVariant } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'
import window from '../../lib/window'
import navigate from '../../lib/navigate'

const SFloatingCtaClosed = styled.div<{
  isVisible?: boolean
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 3;
  bottom: 16px;
  width: 100%;
  margin: 0 auto 48px;
  padding: 0 16px 16px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: 560px;
    bottom: 40px;
  }

  & > button {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
  }
`

const SFloatingCtaOpened = styled.div<{
  isVisible?: boolean
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 3;
  bottom: 16px;
  width: 100%;
  margin: 0 auto 48px;
  padding: 16px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background: #fff;
  border: 1px solid #000000;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);

  @media (min-width: 768px) {
    width: 560px;
    bottom: 40px;
  }
`

const SFloatingCtaTitle = styled.h3`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  margin: 0 auto 12px;
`

const SRingSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

const SRingSizeError = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  color: #ee67a0;
  margin-bottom: 16px;
`

const SBtnHolder = styled.div`
  margin: 0 4px;
  width: 43px;

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const SFloatingRingSizeBtn = styled.button<{
  isActive: boolean
}>`
  background: ${(props) => (props.isActive ? '#9059C8' : '#fff')};
  border: ${(props) => (props.isActive ? '0.5px solid #9059C8' : '0.5px solid #000')};
  padding: 10px 5px;
  font-size: 15px;
  margin: 0;
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  -webkit-transition: all linear 0.3s;
  transition: all linear 0.3s;
  outline: 0;
  position: absolute;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
`

const SFloatingAddToCardBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: 19px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0.5px solid #000;
  border-radius: 0;
  font: 600 16px/1 'Montserrat', sans-serif;
  text-decoration: none;
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  width: auto;
  min-height: 55px;

  &:not(.pdp-btn_disabled):hover {
    @media (min-width: 1200px) {
      color: #000;
      background: #fff;
    }
  }
`

const SFloatingCrossBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const FloatingCta = (): React.ReactElement | null => {
  const product = useContext<ProductType | undefined>(ProductContext)
  const isProductPage = typeof window !== 'undefined' && window.location.pathname.includes('/products/')

  const [isFloatingCtaClosed, setFloatingCtaClosed] = useState<boolean>(true)
  const [isFloatingCtaVisible, setFloatingCtaVisible] = useState<boolean>(false)
  const [isFloatingCtaPresent, setFloatingCtaPresent] = useState<boolean>(false)
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)
  const [currentRingSize, setCurrentRingSize] = useState<number>()

  const handleScroll = () => {
    const isPresent = JSON.parse(localStorage.getItem('isFloatingCtaVisible') || '{}')
    setFloatingCtaVisible(isPresent)
    setTimeout(() => setFloatingCtaPresent(isPresent), 300)
  }

  useEffect(() => {
    if (!isProductPage) {
      localStorage.setItem('isFloatingCtaVisible', JSON.stringify(false))
    }

    window?.addEventListener('scroll', handleScroll)
    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setCurrentRingSize(JSON.parse(localStorage.getItem('currentRingSize') || '{}'))
  }, [])

  if (!isFloatingCtaPresent) {
    return null
  }

  return isFloatingCtaClosed ? (
    <SFloatingCtaClosed isVisible={isFloatingCtaVisible}>
      <SFloatingAddToCardBtn onClick={() => setFloatingCtaClosed(false)}>Choose my ring size</SFloatingAddToCardBtn>
    </SFloatingCtaClosed>
  ) : (
    <SFloatingCtaOpened isVisible={isFloatingCtaVisible}>
      <SFloatingCtaTitle>Select a ring size to reserve this box:</SFloatingCtaTitle>
      <SRingSizeContainer>
        {product &&
          product.variants.slice(0).map((variant: ProductVariant) => (
            <SBtnHolder key={variant.title}>
              {/*isActive={variant.variant_id === props.currentVariant}
               */}
              <SFloatingRingSizeBtn
                isActive={variant.variant_id === currentRingSize}
                value={Number(variant.title)}
                onClick={() => {
                  localStorage.setItem('selectRingError', JSON.stringify(false))
                  setSelectRingError(false)
                  setCurrentRingSize(variant.variant_id)
                  localStorage.setItem('currentRingSize', JSON.stringify(variant.variant_id))
                }}
              >
                {variant.title}
              </SFloatingRingSizeBtn>
            </SBtnHolder>
          ))}
      </SRingSizeContainer>
      {isSelectRingError ? <SRingSizeError>Please select ring size</SRingSizeError> : null}
      <SFloatingAddToCardBtn
        onClick={() => {
          if (!currentRingSize) {
            localStorage.setItem('selectRingError', JSON.stringify(true))
            setSelectRingError(true)
          } else {
            addItemToCart(currentRingSize).then(() => navigate('/cart'))
          }
        }}
      >
        Add to Cart
      </SFloatingAddToCardBtn>
      <SFloatingCrossBtn
        onClick={() => {
          setFloatingCtaClosed(true)
        }}
      >
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.6487 1L0.648682 21M0.648682 1L20.6487 21"
            stroke="black"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SFloatingCrossBtn>
    </SFloatingCtaOpened>
  )
}
