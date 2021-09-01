import React from 'react'
import { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Button } from '../button'

interface IPromoProductResponse {
  id: string
  name: string
  promo: string
  requirements: string
  src: string
  title: string
  type: string
}

const PromoContainer = styled.div`
  position: relative;
  width: 85%;
  max-width: 870px;
  border-radius: 4px;
  box-shadow: inset 2px 2px 1px #464a4d, inset -2px -2px 1px #464a4d;
  padding: 15px 25px;
  background-color: #fff;
  margin: 0 auto;
  font-family: Lato, 'Montserrat', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif;
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
export type PromotionBannerProps = {
  promoProduct: IPromoProductResponse
  // children?: React.ReactNode
  // className?: ClassName
  // style?: React.CSSProperties
}

export function PromotionBanner({ promoProduct }: PromotionBannerProps): React.ReactElement {
  console.log(promoProduct)
  const { src, title, name, requirements } = promoProduct
  const WrapPromoContainer = styled.div`
    display: flex;
    flex-direction: row;
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
  `

  return (
    <PromoContainer>
      <WrapPromoContainer>
        <PromoImageBox>
          <img src={src} alt="" />
        </PromoImageBox>
        <PromoClock>
          <h3> {title} </h3>
        </PromoClock>
        <PromoDescription>{requirements}</PromoDescription>
      </WrapPromoContainer>
      <PromoMessage>Select a ring size:</PromoMessage>
      <SelectHolderBtn>
        {[5, 6, 7, 8, 9, 10].map((el) => {
          return el !== 9 ? (
            <ButtonRingSize onClick={() => console.log(el)}>{el}</ButtonRingSize>
          ) : (
            <ButtonRingSize className="disabled" onClick={() => console.log(el)}>
              {el}
            </ButtonRingSize>
          )
        })}
      </SelectHolderBtn>
      <SizeIsUnavailable>This size is unavailable.</SizeIsUnavailable>
    </PromoContainer>
  )
}
