import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
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
`

const BannerHolder = styled.div`
  display: block;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto 34px;
  }

  @media (min-width: 992px) {
    margin: 0 auto 70px;
  }
`

const BannerImage = styled.img<{ imageSize?: string }>`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: none;
  margin: 0 auto;
  display: ${(props) => (props.imageSize === 'mobile' ? `block` : 'none')};

  @media (min-width: 375px) {
    display: ${(props) => (props.imageSize === 'medium' ? `block` : 'none')};
  }

  @media (min-width: 1200px) {
    display: ${(props) => (props.imageSize === 'desktop' ? `block` : 'none')};
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
  medium: string
  link?: string
}

export function HeroBanner({ className, style, properties }: HeroBannerProps): React.ReactElement {
  const element = (
    <div>
      <BannerImage src={properties.mobile} imageSize={'mobile'} alt="" />
      <BannerImage src={properties.medium} imageSize={'medium'} alt="" />
      <BannerImage src={properties.desktop} imageSize={'desktop'} alt="" />
    </div>
  )
  return (
    <BannerWrapper style={style} className={cn(className)}>
      {properties.link ? (
        <BannerLink href={properties.link}>{element}</BannerLink>
      ) : (
        <BannerHolder>{element}</BannerHolder>
      )}
    </BannerWrapper>
  )
}
