import React, { useContext, useEffect, useState } from 'react'
import addCartItem from '../../lib/add-cart-item'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Product as ProductType } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'
import window from '../../lib/window'
import SizeSelector from '../../lib/size-selector'
import { VariantSize } from '../../modules/normalize-product-variant'
import trackAddedToCart from '../../lib/track-added-to-cart'

const SFloatingCtaClosed = styled.div<{ isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 33;
  bottom: 32px;
  margin: 0;
  padding: 16px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: 560px;
    bottom: 40px;
    margin: 0 auto 48px;
    padding: 16px;
    max-width: 100%;
  }

  & > button {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
    max-width: 380px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0 16px;
      max-width: 100%;
    }
  }
`

const SFloatingCtaOpened = styled.div<{ isVisible?: boolean }>`
  position: sticky;
  z-index: 33;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 380px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};

  @media (min-width: 768px) {
    max-width: 100%;
    bottom: 40px;
    width: auto;
    margin: 0 auto 48px;
    padding: 16px;
  }
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

export const FloatingCta = (): React.ReactElement | null => {
  const router = useRouter()
  const product = useContext<ProductType | undefined>(ProductContext)
  const isProductPage = router.pathname.includes('/products/')

  const [isFloatingCtaClosed, setFloatingCtaClosed] = useState<boolean>(true)
  const [isFloatingCtaVisible, setFloatingCtaVisible] = useState<boolean>(false)
  const [isFloatingCtaPresent, setFloatingCtaPresent] = useState<boolean>(false)

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

  if (!isFloatingCtaPresent) {
    return null
  }

  return isFloatingCtaClosed ? (
    <SFloatingCtaClosed isVisible={isFloatingCtaVisible}>
      <SFloatingAddToCardBtn onClick={() => setFloatingCtaClosed(false)}>Choose my ring size</SFloatingAddToCardBtn>
    </SFloatingCtaClosed>
  ) : (
    <SFloatingCtaOpened isVisible={isFloatingCtaVisible}>
      <SizeSelector
        onSelect={(size) => {
          if (!product) return
          const sizeId = product?.variants.find((variant) => variant.title === size.toString())?.variant_id
          sizeId &&
            addCartItem(sizeId)
              .then(() => trackAddedToCart(product))
              .then(() => router.push('/cart'))
        }}
        onClose={() => setFloatingCtaClosed(true)}
        title="Select a ring size to reserve this box"
        buttonLabel="Add to Cart"
        unavailable={product?.variants
          .filter((variant) => !variant.available && typeof variant.size === 'number')
          .map((variant) => variant.size as VariantSize)}
      />
    </SFloatingCtaOpened>
  )
}
