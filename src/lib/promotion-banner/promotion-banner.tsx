import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useDefer from 'use-defer'
import styled from 'styled-components'
import loadPromoDetails from '../load-promo-details'
import setCookie from '../set-cookie'
import getCookie from '../get-cookie'

const PromoContainer = styled.div`
  position: relative;
  width: 85%;
  max-width: 870px;
  border-radius: 4px;
  box-shadow: inset 2px 2px 1px #464a4d, inset -2px -2px 1px #464a4d;
  padding: 15px 25px;
  background-color: #fff;
  margin: 0px auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.6;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    box-shadow: inset 3px 3px 2px #464a4d;
    transform: rotate(45deg);
    height: 20px;
    width: 20px;
    margin: 0 auto;
    background-color: #fff;
    right: 0;
    left: 0;
  }
`

const WrapPromoContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`
const PromoImageBox = styled.div`
  align-items: center;
  max-width: 160px;
  justify-content: center;
  display: flex;
  padding: 0px 10px;
  img {
    max-width: 100%;
    max-height: 100px;
    height: auto;
  }
`
const PromoClock = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  padding: 0px 10px;
  h3 {
    font-size: 1.2em;
    color: #db3986;
  }
`
const PromoDescription = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  font-size: 14px;
  justify-content: center;
  flex-direction: column;
  font-size: 1em;
  text-align: left;

  color: #333;
  padding: 0px 10px;
`
const PromoMessage = styled.div`
  display: block;
  font-weight: 700;
  line-height: 1.4;
  font-size: 1.429em;
`

const SelectHolderBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SizeIsUnavailable = styled.div`
  color: #ee7584;
  text-align: center;
  font-size: 16px;
`

const ButtonRingSize = styled.button`
  background: #fff;
  font: 500 14px/1.25 'Montserrat', sans-serif;
  border: 1px solid #ee67a0;
  color: #000;
  width: 42px;
  height: 42px;
  padding: 8px 5px;
  margin: 10px 10px;
  min-width: 42px;
  &:hover {
    background: #ee67a0;
    color: #fff;
    cursor: pointer;
  }
  &.disabled {
    background: #ddd;
    border: 1px solid #ddd;
    &:hover {
      background: #ddd;
      color: #000;
      cursor: auto;
    }
  }
  @media (max-width: 768px) {
    margin: 4px 4px;
    width: 35px;
    height: 35px;
    min-width: 35px;
  }
`

const SizeOutOfStock = styled.div`
  font-size: 18px;
  font-weight: 600;
`

const Congratulations = styled.div`
  font-weight: bold;
`
export type PromotionBannerProps = {
  promo: string
  visibleBanner?: boolean
  className?: ClassName
  style?: React.CSSProperties
  errorPromoDetails: () => void
}

const gwpCart = (): boolean => {
  const cart = getCookie('cart')
  const variant = getCookie('promo_variant')
  return !!cart && !!variant
}

export function PromotionBanner({
  promo,
  visibleBanner,
  className,
  style,
  errorPromoDetails,
}: PromotionBannerProps): React.ReactElement | null {
  const promoDetailsRequest = useDefer(
    () => (promo ? loadPromoDetails(promo).catch(() => errorPromoDetails()) : Promise.resolve(undefined)),
    [promo],
    []
  )
  const [unavailableRingSize, useUnavailableRingSize] = useState(false)
  const [buyRingSize, useBuyRingSize] = useState('')
  return promoDetailsRequest.status === 'error' || !promoDetailsRequest.value ? null : (
    <PromoContainer className={cn(className)} style={style}>
      <WrapPromoContainer>
        <PromoImageBox>
          <img src={promoDetailsRequest.value.src} alt="" />
        </PromoImageBox>
        <PromoClock>
          <h3> {promoDetailsRequest.value.title} </h3>
        </PromoClock>
        <PromoDescription>
          {gwpCart() ? 'Congratulations! Your FREE gift is in your cart!' : promoDetailsRequest.value.requirements}
        </PromoDescription>
      </WrapPromoContainer>
      {!buyRingSize && visibleBanner && promoDetailsRequest.value.sizeOutOfStock && (
        <>
          <PromoMessage>Select a ring size:</PromoMessage>
          <SelectHolderBtn>
            {promoDetailsRequest.value.detailsVariant.map((el) => {
              return el.available ? (
                <ButtonRingSize
                  key={el.id}
                  onClick={() => {
                    const expires = Date.now() + 3600 * 1000
                    setCookie('promo-expiration', expires, 1)
                    setCookie('c_promo', promo, 1)
                    setCookie('promo_variant', el.id, 1)
                    useUnavailableRingSize(false)
                    useBuyRingSize(el.title)
                  }}
                >
                  {el.title}
                </ButtonRingSize>
              ) : (
                <ButtonRingSize
                  key={el.id}
                  className="disabled"
                  onClick={() => {
                    useUnavailableRingSize(true)
                    useBuyRingSize('')
                  }}
                >
                  {el.title}
                </ButtonRingSize>
              )
            })}
          </SelectHolderBtn>
          {unavailableRingSize && <SizeIsUnavailable>This size is unavailable.</SizeIsUnavailable>}
        </>
      )}
      {buyRingSize && (
        <Congratulations>
          Congratulations! Your gift is in your cart!
          <br />
          (Ring Size: {buyRingSize})
        </Congratulations>
      )}
      {!promoDetailsRequest.value.sizeOutOfStock && visibleBanner && (
        <SizeOutOfStock>Sorry, all sizes are out of stock!</SizeOutOfStock>
      )}
    </PromoContainer>
  )
}
