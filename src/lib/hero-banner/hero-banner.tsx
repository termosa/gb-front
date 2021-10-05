import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Link from 'next/link'

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
const BannerInnerLinks = styled.div`
  padding: 5px;
  background: #ff7300;
  background: linear-gradient(90deg, rgba(150,63,10,1) 0%, rgba(255,115,0,1) 25%, rgba(255,115,0,1) 75%, rgba(150,63,10,1) 100%);

  @media (min-width: 1200px) {
    background: linear-gradient(90deg, rgba(24,0,20,1) 0%, rgba(252,116,0,1) 40%, rgba(252,116,0,1) 60%, rgba(24,0,20,1) 100%);
  }
`
const BannerInnerLink = styled.a`
  cursor: pointer;
  color: #000;
  text-decoration: none;
  display: block;
  font: 500 9px/1.7 Montserrat, sans-serif;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 375px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 13px;
  }

  span {
    font-weight: 600;
  }

  &:hover span {
    text-decoration: none;
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
      <BannerImage src={properties.mobile} imageSize={'mobile'} alt="" />
      <BannerImage src={properties.medium} imageSize={'medium'} alt="" />
      <BannerImage src={properties.desktop} imageSize={'desktop'} alt="" />
      <BannerInnerLinks>
        <Link passHref href={'https://www.fragrantjewels.com/collections/all-products/?d=10off'}>
          <BannerInnerLink>
            <span style={{textDecoration: 'underline'}}>SHOP All</span> >> Use code <span>10OFF for $10 off</span> any $40 purchase
          </BannerInnerLink>
        </Link>
        <Link passHref href={'https://www.fragrantjewels.com/collections/all-products/?d=25off'}>
          <BannerInnerLink><span style={{textDecoration: 'underline'}}>SHOP All</span> >> Use code <span>25OFF for $25 off</span> any $75 purchase</BannerInnerLink>
        </Link>
      </BannerInnerLinks>
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
