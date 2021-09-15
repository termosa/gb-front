import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'

const gwpPresent = (): boolean => {
  const promo = getCookie('c_promo')
  const exp = getCookie('promo-expiration')
  const variant = getCookie('promo_variant')
  if (promo && exp && variant) {
    return false
  }
  return true
}

const getPromoCookie = (): string => {
  const promo = getCookie('c_promo')
  return promo || ''
}

export type SitePromotionProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement | null {
  const { promo } = useQuery()
  const isGwpPresent = gwpPresent()

  if (promo || !isGwpPresent) {
    return (
      <PromotionBanner
        className={cn(className)}
        style={style}
        promo={promo || getPromoCookie()}
        visibleBanner={isGwpPresent}
      />
    )
  }
  return null
}
