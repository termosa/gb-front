import React from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'

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
    padding: 10px 0;
    color: #000;
    width: 100%;
    vertical-align: top;
  `
  return (
    <>
      {promo ? (
        <PromotionContainer className={cn(className)} style={style}>
          <PromotionBanner promo={promo}></PromotionBanner>
        </PromotionContainer>
      ) : null}
    </>
  )
}
