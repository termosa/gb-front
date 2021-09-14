import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'

interface WrapperProps {
  error: boolean
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

const getPromoCookie = (): string => {
  const promo = getCookie('c_promo')
  return promo || ''
}

export type SitePromotionProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement {
  const { promo } = useQuery()
  const isGwpPresent = gwpPresent()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!promo && !!isGwpPresent) {
      setIsError(true)
    }
  }, [promo, isGwpPresent])

  return (
    <>
      {(promo || isGwpPresent) && (
        <PromotionContainer className={cn(className)} style={style} error={isError}>
          <PromotionBanner
            promo={promo || getPromoCookie()}
            visibleBanner={isGwpPresent}
            error={() => setIsError(true)}
          />
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
