import React from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookies from '../get-cookie'

const isGwpPresent = (): boolean => {
  const promo = getCookies('c_promo')
  const exp = getCookies('promo-expiration')
  if (!promo && !exp) {
    return false
  }
  return Number(exp) - Date.now() > 0
}

const getPromoCookie = (): string => {
  const promo = getCookies('c_promo')
  return promo || ''
}

export type SitePromotionProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement {
  const { promo } = useQuery()
  const PromotionContainer = styled.div`
    background-color: #464a4d;
    position: relative;
    text-align: center;
    color: #000;
    width: 100%;
    vertical-align: top;
  `

  return (
    <>
      {promo || isGwpPresent() ? (
        <PromotionContainer className={cn(className)} style={style}>
          <PromotionBanner promo={promo || getPromoCookie()} isShow={isGwpPresent()}></PromotionBanner>
        </PromotionContainer>
      ) : null}
    </>
  )
}
