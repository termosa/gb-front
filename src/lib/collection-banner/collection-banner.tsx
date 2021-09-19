import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useScreenSize from '../use-screen-size'

const Wrapper = styled.div<{ backgroundImg?: string }>`
  background: ${(props) => (props.backgroundImg ? `url(${props.backgroundImg}) center center no-repeat` : '')};
  background-size: cover;
`

const CollectionBannerWrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 0 16px;
`

const CollectionBannerHeading = styled.h1`
  font-family: Cormorant Garamond, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
  margin: 0;
  padding: 82px 0 16px;
`

const CollectionBannerText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding: 0 0 82px;
  max-width: 372px;
`

const CollectionBannerMobileImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 82% 50%;

  @media (min-width: 481px) {
    object-position: 72% 50%;
  }
`

const CollectionBannerMobileHeading = styled.h1`
  font-family: Cormorant Garamond, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  margin: 0;
  padding: 20px 16px 10px;
`

const CollectionBannerMobileText = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding: 0 16px 28px;
`

export type CollectionBannerProps = {
  children?: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
}

export function CollectionBanner({ className, style }: CollectionBannerProps): React.ReactElement {
  const useScreen = useScreenSize()
  return useScreen.greaterThanMedium ? (
    <Wrapper
      className={cn(className)}
      style={style}
      backgroundImg={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collectionbanner.png'}
    >
      <CollectionBannerWrapper>
        <CollectionBannerHeading>Bath bombs</CollectionBannerHeading>
        <CollectionBannerText>
          It’s more than amazing scents and stunning colors — essential oils and natural minerals will leave your skin
          feeling so soft, you’ll be feel like silk.
        </CollectionBannerText>
      </CollectionBannerWrapper>
    </Wrapper>
  ) : (
    <Wrapper className={cn(className)} style={style}>
      <CollectionBannerMobileImg
        src={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collectionbanner.png'}
      />
      <CollectionBannerMobileHeading>Bath bombs</CollectionBannerMobileHeading>
      <CollectionBannerMobileText>
        It’s more than amazing scents and stunning colors — essential oils and natural minerals will leave your skin
        feeling so soft, you’ll be feel like silk.
      </CollectionBannerMobileText>
    </Wrapper>
  )
}
