import React from 'react'
import { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

const PromoContainer = styled.div`
  position: relative;
  width: 85%;
  max-width: 870px;
  border-radius: 4px;
  box-shadow: inset 2px 2px 1px #464a4d, inset -2px -2px 1px #464a4d;
  padding: 15px 25px;
  background-color: #fff;
  margin: 0 auto;
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
  children?: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
}

export function PromotionBanner({}: PromotionBannerProps): React.ReactElement {
  return (
    <PromoContainer>
      <div>d 55ddddddd</div>
    </PromoContainer>
  )
}
