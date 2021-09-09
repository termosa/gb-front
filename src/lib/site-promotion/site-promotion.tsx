import React from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'

const isGwpPresent = (): boolean => {
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
  return (
    <>
      {promo || isGwpPresent() ? (
        <PromotionContainer className={cn(className)} style={style}>
          <PromotionBanner promo={promo || getPromoCookie()} visibleBanner={isGwpPresent()} />
        </PromotionContainer>
      ) : null}
    </>
  )
}

const PromotionContainer = styled.div`
  background-color: #464a4d;
  position: relative;
  text-align: center;
  color: #000;
  width: 100%;
  vertical-align: top;
`
