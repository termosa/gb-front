import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'
import BannerDiscount from '../banner-discount'

interface WrapperProps {
  error: boolean
}

const gwpDiscount = (): boolean => {
  const age = getCookie('d_age')
  const promoDiscount = getCookie('promo-discount')
  const discountExpiration = getCookie('discount-expiration')
  if (age && promoDiscount && discountExpiration) {
    return false
  }
  return true
}

const gwpPresent = (): boolean => {
  const promo = getCookie('c_promo')
  const exp = getCookie('promo-expiration')
  const variant = getCookie('promo_variant')
  if (promo && exp && variant) {
    return false
  }
  return true
}

const getDiscountCookie = (): string => {
  return getCookie('promo-discount') || ''
}

const getPromoCookie = (): string => {
  return getCookie('c_promo') || ''
}

const getIsLatestCookie = (): boolean => {
  return Number(getCookie('promo-expiration')) - Number(getCookie('discount-expiration')) < 0
}

export type SitePromotionProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement {
  const { promo, d } = useQuery()
  const [isPromo, setPromo] = useState<boolean | null>(null)

  useEffect(() => {
    if (promo || d) {
      setPromo(!promo)
      return
    }
    if (getCookie('discount-expiration') && getCookie('promo-expiration')) {
      setPromo(getIsLatestCookie())
      return
    }
    if (getCookie('discount-expiration')) {
      setPromo(true)
      return
    }
    if (getCookie('promo-expiration')) {
      setPromo(false)
      return
    }
  }, [promo, d])
  const isGwpPresent = gwpPresent()
  const stateError = [promo, getPromoCookie(), d, getDiscountCookie()]
  const [isError, setIsError] = useState(stateError.every((el) => !el))
  return (
    <>
      {isPromo === null
        ? null
        : !isError && (
            <PromotionContainer className={cn(className)} style={style} error={isError}>
              {isPromo ? (
                <BannerDiscount discountStatus={d || getDiscountCookie()} errorDiscount={() => setIsError(true)} />
              ) : (
                <PromotionBanner
                  promo={promo || getPromoCookie()}
                  visibleBanner={isGwpPresent}
                  errorPromoDetails={() => setIsError(true)}
                />
              )}
            </PromotionContainer>
          )}
    </>
  )
}

const PromotionContainer = styled.div<WrapperProps>`
  background-color: #464a4d;
  position: relative;
  text-align: center;
  padding: ${(props) => (props.error ? '0' : '10px 0')};
  color: #000;
  width: 100%;
  vertical-align: top;
`
