import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Link from 'next/link'
import Image from '../image'

const BannerWrapper = styled.div`
  margin: 0 auto 48px;
  background-color: #170014;
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

const BannerLink = styled.a`
  cursor: pointer;
  color: #000;
  text-decoration: none;
`

const BannerImage = styled(Image)<{ imageSize?: string }>`
  max-width: 100%;
  min-height: 300px;
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
  const imagesElement = (
    <div>
      <BannerImage src={properties.mobile} imageSize="mobile" quality={100} />
      <BannerImage src={properties.medium} imageSize="medium" quality={100} />
      <BannerImage src={properties.desktop} imageSize="desktop" height={315} />
    </div>
  )
  return (
    <BannerWrapper style={style} className={cn(className)}>
      <BannerHolder>
        {properties.link ? (
          <Link passHref href={properties.link}>
            <BannerLink>{imagesElement}</BannerLink>
          </Link>
        ) : (
          <div>{imagesElement}</div>
        )}
      </BannerHolder>
    </BannerWrapper>
  )
}
