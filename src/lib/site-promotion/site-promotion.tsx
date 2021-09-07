import React, { useState } from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'

const isGwpPresent = (): boolean => {
  const promo = getCookie('c_promo')
  const exp = getCookie('promo-expiration')
  if (!promo && !exp) {
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
  const [isError, setIsError] = useState(false)
  if (isError) {
    return null
  }
  return (
    <>
      {promo || isGwpPresent() ? (
        <PromotionContainer className={cn(className)} style={style}>
          <PromotionBanner
            promo={promo || getPromoCookie()}
            unVisibleBanner={isGwpPresent()}
            errorPromoDetails={() => setIsError(true)}
          />
        </PromotionContainer>
      ) : null}
    </>
  )
}

const PromotionContainer = styled.div`
  background-color: #464a4d;
  position: relative;
  text-align: center;
  padding: 10px 0px;
  color: #000;
  width: 100%;
  vertical-align: top;
`
