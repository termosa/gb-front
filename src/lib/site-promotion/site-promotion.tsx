import React, { useEffect, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'
import BannerDiscount from '../banner-discount'

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

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement | null {
  const { promo, d } = useQuery()
  const isGwpPresent = gwpPresent()
  const stateCookie = promo || getPromoCookie() || d || getDiscountCookie()
  const [queryBanner, setQueryBanner] = useState<boolean | null>(null)

  useEffect(() => {
    if (promo || d) {
      setQueryBanner(!promo)
      return
    }
    if (getCookie('discount-expiration') && getCookie('promo-expiration')) {
      setQueryBanner(getIsLatestCookie())
      return
    }
    if (getCookie('discount-expiration')) {
      setQueryBanner(true)
      return
    }
    if (getCookie('promo-expiration')) {
      setQueryBanner(false)
      return
    }
  }, [promo, d])

  if (queryBanner === null) {
    return null
  }
  return stateCookie && queryBanner ? (
    <BannerDiscount className={cn(className)} style={style} discountStatus={d || getDiscountCookie()} />
  ) : (
    <PromotionBanner
      className={cn(className)}
      style={style}
      promo={promo || getPromoCookie()}
      visibleBanner={isGwpPresent}
    />
  )
}
