import React from 'react'
import useDefer from 'use-defer'
import styled from 'styled-components'
import { PromotionBanner } from '../promotion-banner'
import useQuery from '../use-query'
import { loadPromoProduct } from '../load-promo-product'
import { loadProductId } from '../load-product-id'

export function PromotionSite(): React.ReactElement {
  const { promo } = useQuery()
  // TODO: loadPromo() return 'expiration' field hours: 1
  // const promoRequest = useDefer(() => (promo ? loadPromo(promo) : Promise.resolve(undefined)), [], [])
  const promoProductRequest = useDefer(() => (promo ? loadPromoProduct(promo) : Promise.resolve(undefined)), [], [])
  const promoProductIds = useDefer(
    () => (promoProductRequest.value ? loadProductId(promoProductRequest.value.id) : Promise.resolve(undefined)),
    [promoProductRequest.value],
    []
  )

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
          <PromotionBanner
            promoProduct={promoProductRequest.value}
            promoProductId={promoProductIds.value || []}
          ></PromotionBanner>
        </PromotionContainer>
      ) : null}
    </>
  )
}
