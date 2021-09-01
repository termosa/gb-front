import React, { useEffect, useState, useMemo } from 'react'
import useDefer from 'use-defer'
import styled from 'styled-components'
import { PromotionBanner } from '../promotion-banner'
import useQuery from '../use-query'
import { loadPromo, loadPromoProduct } from '../load-promo'

export function PromotionSite(): React.ReactElement {
  const { promo } = useQuery()
  const promoRequest = useDefer(() => (promo ? loadPromo(promo) : Promise.resolve(undefined)), [], [])
  const promoProductRequest = useDefer(() => (promo ? loadPromoProduct(promo) : Promise.resolve(undefined)), [], [])
  console.log(888888, promoRequest.value)
  console.log(999999, promoProductRequest.value)
  // https://fjrecurly.herokuapp.com/shopify_endpoint/get_variants?product_id=6630796951630

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
      {promo && promoProductRequest.value ? (
        <PromotionContainer>
          <PromotionBanner promoProduct={promoProductRequest.value}></PromotionBanner>
        </PromotionContainer>
      ) : null}
    </>
  )
}
