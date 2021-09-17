import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useScreenSize } from '../use-screen-size'

const bannerCollections = [
  {
    handle: 'spooky',
    imageMobile: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/col-halloween-mb.jpg',
    imageDesktop: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/col-halloween-2-dt.jpg',
    text: 'Bath bombs',
    description: `It’s more than amazing scents and stunning colors — essential oils and natural minerals will leave your skin
          feeling so soft, you’ll be feel like silk.`,
  },
  {
    handle: 'all-products',
    imageMobile: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/all-banner-2-1-mb.jpg',
    imageDesktop: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/all-banner-2-dt.jpg',
    text: 'Shop Everything',
    description: `Add a little calm to the chaos of life with our scented candles, bath bombs and sugar scrubs-discover limited-edition jewelry in each product!`,
  },
]

export type CollectionBannerProps = {
  children?: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
  handle: string
}
export function CollectionBanner({ handle, className, style }: CollectionBannerProps): React.ReactElement | null {
  const useScreen = useScreenSize()
  const bannerCollection = bannerCollections.find((item) => item.handle === handle)
  if (!bannerCollection) {
    return null
  }
  return useScreen.greaterThanMedium ? (
    <Wrapper className={cn(className)} style={style} backgroundImg={bannerCollection.imageDesktop}>
      <CollectionBannerWrapper>
        <CollectionBannerHeading>{bannerCollection.text}</CollectionBannerHeading>
        <CollectionBannerText> {bannerCollection.description} </CollectionBannerText>
      </CollectionBannerWrapper>
    </Wrapper>
  ) : (
    <Wrapper className={cn(className)} style={style}>
      <CollectionBannerMobileImg src={bannerCollection.imageMobile} />
      <CollectionBannerMobileHeading>{bannerCollection.text}</CollectionBannerMobileHeading>
      <CollectionBannerMobileText>{bannerCollection.description}</CollectionBannerMobileText>
    </Wrapper>
  )
}

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
