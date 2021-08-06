import React, { Dispatch, RefObject, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  Product as ProductType,
  ProductVariant,
} from '@fragrantjewels/gravity-brands.modules.normalize-product'
import cn, { Argument as ClassName } from 'classnames'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'

export type FloatingCtaProps = {
  className?: ClassName
  currentVariant: number | null
  setCurrentVariant: Dispatch<number | null>
  isSelectRingError: boolean
  setSelectRingError: Dispatch<boolean>
  setActualPrice: Dispatch<number>
  addToCartRef: RefObject<HTMLButtonElement>
}

const SFloatingCtaWrapper = styled.div<{
  isVisible?: boolean
}>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  bottom: 16px;
  left: 50%;
  width: 100%;
  transform: ${(props) => props.isVisible ? 'translate(-50%, 0)' : 'translate(-50%, 150%)'};
  transition: transform .25s ease-in-out;
  background: #fff;
  border: 1px solid #000000;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
  
  @media(min-width: 768px) {
    width: 560px;
    bottom: 40px;
  }
`

const SFloatingCtaTitle = styled.h3`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  margin: 16px auto 12px;
`

const SRingSizeContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SRingSizeError = styled.div`
  font: 400 16px/1.5 "Montserrat", sans-serif;
  text-align: center;
  color: #ee67a0;
  margin: 16px 0 0;
`

const SBtnHolder = styled.div`
  margin: 0 4px;
  width: 43px;

  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

const SFloatingRingSizeBtn = styled.button<{
  isActive: boolean
}>`
  background: ${(props) => props.isActive ? '#9059C8' : '#fff'};
  border: ${(props) => props.isActive ? '0.5px solid #9059C8' : '0.5px solid #000'};
  padding: 10px 5px;
  font-size: 15px;
  margin: 0;
  color: ${(props) => props.isActive ? '#fff' : '#000'};
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
  font: 600 16px/1 "Montserrat", sans-serif;
  text-decoration: none;
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin: 20px 16px 16px;
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

export function FloatingCta({ className, ...props }: FloatingCtaProps): React.ReactElement {
  const isClosedBtnClickedRef = useRef(false);
  const product = useContext<ProductType | undefined>(ProductContext)
  const [isFloatingCtaClosed, setFloatingCtaClosed] = useState<boolean>(false)
  const [isFloatingCtaVisible, setFloatingCtaVisible] = useState<boolean>(false)

  const setListener = () => {
    const position = props.addToCartRef.current?.getBoundingClientRect();
    if (!position || isFloatingCtaClosed) {
      return
    }
    setFloatingCtaVisible(position.top <= 157 && !isClosedBtnClickedRef.current)
  }

  useEffect(() => {
    window.addEventListener('scroll', setListener)
    return () => {
      window.removeEventListener('scroll', setListener)
    }
  }, [])

  return (
    <SFloatingCtaWrapper className={cn('FloatingCta', className)} isVisible={isFloatingCtaVisible}>
      <SFloatingCtaTitle>Select a ring size to reserve this box:</SFloatingCtaTitle>
      <SRingSizeContainer>
        {product && product.variants.slice(0).map((variant: ProductVariant) => (
          <SBtnHolder key={variant.title}>
            <SFloatingRingSizeBtn
              className={`pdp-pi-selector__btn ${
                variant.variant_id === props.currentVariant && 'pdp-pi-selector__btn_active'
              }`}
              isActive={variant.variant_id === props.currentVariant}
              value={Number(variant.title)}
              onClick={() => {
                props.setSelectRingError(false)
                props.setCurrentVariant(variant.variant_id)
                props.setActualPrice(variant.actual_price)
              }}
            >
              {variant.title}
            </SFloatingRingSizeBtn>
          </SBtnHolder>
        ))}
      </SRingSizeContainer>
      {props.isSelectRingError ? <SRingSizeError>Please select ring size</SRingSizeError> : null}
      <SFloatingAddToCardBtn
        className="pdp-btn"
        onClick={() => {
          if (!props.currentVariant) {
            props.setSelectRingError(true)
          }
        }}
      >
        Add to Cart
      </SFloatingAddToCardBtn>
      <SFloatingCrossBtn onClick={() => {
        setFloatingCtaClosed(true)
        setFloatingCtaVisible(false)
        isClosedBtnClickedRef.current = true;
      }}>
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6487 1L0.648682 21M0.648682 1L20.6487 21" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SFloatingCrossBtn>
    </SFloatingCtaWrapper>
  )
}
