import React from 'react'
import styled from 'styled-components'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'

export function SitePromotion(): React.ReactElement {
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
        <PromotionContainer>
          <PromotionBanner promo={promo}></PromotionBanner>
        </PromotionContainer>
      ) : null}
    </>
  )
}
