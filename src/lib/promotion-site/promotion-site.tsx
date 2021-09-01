import React from 'react'
import { PromotionBanner } from '../promotion-banner'
import styled from 'styled-components'

export function PromotionSite(): React.ReactElement {
  const isPromo = true
  const PromotionContainer = styled.div`
    background-color: #464a4d;
    position: relative;
    text-align: center;
    padding: 10px 0;
    color: #000;
    width: 100%;
    vertical-align: top;
  `
  return <PromotionContainer>{isPromo ? <PromotionBanner></PromotionBanner> : null}</PromotionContainer>
}
