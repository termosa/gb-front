import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Link from 'next/link'
import { useScreenSize } from '../use-screen-size'
const BannerWrapper = styled.div`
  margin: 0 auto 48px;
  background-color: #170014;
`
const BannerLink = styled.a`
  display: block;
  max-width: 1440px;
  margin: 0 auto;
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
    max-width: 100%;
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
  iPad: string
  link: string
}

export function HeroBanner({ className, style, properties }: HeroBannerProps): React.ReactElement {
  const screenSize = useScreenSize()
  return (
    <BannerWrapper style={style} className={cn(className)}>
      <Link passHref href={properties.link}>
        <BannerLink>
          <img
            src={
              screenSize.greaterThanExtraLarge
                ? properties.desktop
                : screenSize.sizeS
                ? properties.iPad
                : properties.mobile
            }
            alt=""
          />
        </BannerLink>
      </Link>
    </BannerWrapper>
  )
}
