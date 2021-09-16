import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useDefer from 'use-defer'
import loadDiscount from '../load-discount'
import setCookie from '../set-cookie'

export type BannerDiscountProps = {
  className?: ClassName
  style?: React.CSSProperties
  discountStatus: string
}

export function BannerDiscount({ discountStatus, className, style }: BannerDiscountProps): React.ReactElement | null {
  const discountRequest = useDefer(
    () => (discountStatus ? loadDiscount(discountStatus) : Promise.resolve(undefined)),
    [],
    []
  )
  if (!discountRequest.value) {
    return null
  }
  const { success, code, imageMobile, requirementsCopy, title } = discountRequest.value

  if (success) {
    const expire_time = new Date(new Date().getTime() + 3600 * 1000)
    const t_now = new Date()
    setCookie('discount-expiration', String(expire_time.getTime()), 1)
    setCookie('promo-discount', code, 1)
    setCookie('d_age', String(t_now.getTime()), 1)
  }

  return success ? (
    <DiscountContainer>
      <Wrapper className={cn(className)} style={style}>
        <WrapDiscountContainer>
          <ImageBox>
            <img src={imageMobile} alt="" />
          </ImageBox>
          <Title>
            <h3> {title} </h3>
          </Title>
          <Description>{requirementsCopy}</Description>
        </WrapDiscountContainer>
      </Wrapper>
    </DiscountContainer>
  ) : null
}

const DiscountContainer = styled.div`
  background-color: #464a4d;
  position: relative;
  text-align: center;
  color: #000;
  width: 100%;
  padding: 10px 0;
  vertical-align: top;
`

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  max-width: 870px;
  border-radius: 4px;
  box-shadow: inset 2px 2px 1px #464a4d, inset -2px -2px 1px #464a4d;
  padding: 4px 25px;
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

const WrapDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

const ImageBox = styled.div`
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

const Title = styled.div`
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

const Description = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  font-size: 14px;
  justify-content: center;
  flex-direction: column;
  font-size: 1em;
  text-align: left;

  color: #333;
  padding: 0 0 0 60px;
`
