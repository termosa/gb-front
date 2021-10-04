import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useScreenSize } from '../use-screen-size'

const BannerWrapper = styled.a`
  max-width: 990px;
  margin: 0 auto 48px;
  display: block;
  text-decoration: none;

  @media (min-width: 768px) {
    margin: 0 auto 34px;
  }

  @media (min-width: 992px) {
    margin: 0 auto 70px;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`

export type HeroBannerProps = {
  className?: ClassName
  style?: React.CSSProperties
  properties: HeroProps
}

type HeroProps = {
  desktop: string
  mobile: string
  link: string
}

export function HeroBanner({ className, style, properties }: HeroBannerProps): React.ReactElement {
  const screenSize = useScreenSize()
  return (
    <BannerWrapper href={properties.link} className={cn(className)} style={style}>
      <img src={screenSize.greaterThanMedium ? properties.desktop : properties.mobile} alt="" />
    </BannerWrapper>
  )
}
