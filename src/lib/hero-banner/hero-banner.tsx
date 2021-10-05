import React, { useState } from 'react'
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
const DDWrapper = styled.div`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`

const DDHolder = styled.div`
  font-family: Montserrat, sans-serif;
  background: #fff;
  padding: 5px;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 370px;
  }

  &:after {
    content: '×';
    font-size: 20px;
    position: absolute;
    right: 8px;
    top: 5px;
    line-height: 1;

    @media (min-width: 375px) {
      font-size: 26px;
    }

    @media (min-width: 768px) {
      font-size: 27px;
      right: 11px;
    }
  }
`

const DDHolderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DDTitle = styled.h4`
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  padding: 5px 0 0;
  max-width: 83%;

  @media (min-width: 375px) {
    font-size: 14px;
  }
`

const DDLink = styled.a`
  margin: 5px;
  text-decoration: none;
  display: block;
  width: 50%;

  img {
    border: 1px solid #fff;
    border-bottom: 0;
    height: auto;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }

  &:hover img {
    border-color: #000;
  }

  &:active,
  &:focus {
    outline: 0;
    box-shadow: none;
    text-decoration: none;
  }
`

const DDButton = styled.div`
  padding: 8px 0;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;

  @media (min-width: 375px) {
    font-size: 14px;
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
  const [isDropdownOpened, toggleDropdown] = useState(false)
  const imagesElement = (
    <DDWrapper
      onClick={() => {
        toggleDropdown(!isDropdownOpened)
      }}
    >
      <BannerImage src={properties.mobile} imageSize={'mobile'} alt="" />
      <BannerImage src={properties.medium} imageSize={'medium'} alt="" />
      <BannerImage src={properties.desktop} imageSize={'desktop'} alt="" />
      {isDropdownOpened ? (
        <DDHolder>
          <DDTitle>Which will you choose, Coven Light or Coven Dark?</DDTitle>
          <DDHolderInner>
            <Link passHref href={'/collections/all-products/?promo=covenlight65'}>
              <DDLink>
                <img
                  src="https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/wed-ring-1.jpg"
                  alt=""
                />
                <DDButton>Coven Light</DDButton>
              </DDLink>
            </Link>
            <Link passHref href={'/collections/all-products/?promo=covendark65'}>
              <DDLink>
                <img
                  src="https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/wed-ring-2.jpg"
                  alt=""
                />
                <DDButton>Coven Dark</DDButton>
              </DDLink>
            </Link>
          </DDHolderInner>
        </DDHolder>
      ) : (
        <div></div>
      )}
    </DDWrapper>
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
