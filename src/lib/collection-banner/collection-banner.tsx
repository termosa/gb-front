import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
import useScreenSize from '../use-screen-size'

interface CollectionBanner {
  handle: string
  compactBackgroundImage: string
  backgroundImage: string
  title: string
  description: string
  styleTitleDesktop?: React.CSSProperties
  styleDescriptionDesktop?: React.CSSProperties
  onlyDesktop?: boolean
}

type CollectionBannerProps = {
  className?: ClassName
  style?: React.CSSProperties
  handle: string
}

export function CollectionBanner({ handle, className, style }: CollectionBannerProps): React.ReactElement | null {
  const useScreen = useScreenSize()
  const bannerCollection = collectionsBanner.find((item) => item.handle === handle)
  if (!bannerCollection) {
    return null
  }
  return useScreen.greaterThanMedium ? (
    bannerCollection.onlyDesktop ? (
      <>
        <CollectionMobileImg desktop={bannerCollection.onlyDesktop} src={bannerCollection.backgroundImage} />
        <CollectionMobileTitle style={bannerCollection.onlyDesktop ? bannerCollection.styleTitleDesktop : {}}>
          {bannerCollection.title}
        </CollectionMobileTitle>
        <CollectionMobileDescription desktop={bannerCollection.onlyDesktop}>
          {bannerCollection.description}
        </CollectionMobileDescription>
      </>
    ) : (
      <Wrapper className={cn(className)} style={style} backgroundImg={bannerCollection.compactBackgroundImage}>
        <CollectionBannerWrapper>
          <CollectionTitle style={bannerCollection.styleTitleDesktop}>{bannerCollection.title}</CollectionTitle>
          <CollectionDescription style={bannerCollection.styleDescriptionDesktop}>
            {bannerCollection.description}
          </CollectionDescription>
        </CollectionBannerWrapper>
      </Wrapper>
    )
  ) : (
    <Wrapper className={cn(className)} style={style}>
      <CollectionMobileImg desktop={bannerCollection.onlyDesktop} src={bannerCollection.compactBackgroundImage} />
      <CollectionMobileTitle style={bannerCollection.onlyDesktop ? bannerCollection.styleTitleDesktop : {}}>
        {bannerCollection.title}
      </CollectionMobileTitle>
      <CollectionMobileDescription>{bannerCollection.description}</CollectionMobileDescription>
    </Wrapper>
  )
}

const collectionsBanner: CollectionBanner[] = [
  {
    handle: 'bath-bombs',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bb-banner-2-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bb-banner-2-dt.jpg',
    title: 'Bath bombs',
    description: `Love your skin and it’ll love you back. Each bath bomb is packed with soothing shea butter and (surprise!) a stunning limited-edition ring.`,
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'all-products',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/all-banner-2-1-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/all-banner-2-dt.jpg',
    title: 'Shop Everything',
    description: `Add a little calm to the chaos of life with our scented candles, bath bombs and sugar scrubs-discover limited-edition jewelry in each product!`,
    styleDescriptionDesktop: { color: '#fff', fontWeight: 100 },
    styleTitleDesktop: { color: '#fff' },
  },
  {
    handle: 'body-scrubs',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bs-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bs-banner-dt.jpg',
    title: 'Body Scrubs',
    description: `Exfoliate your dry skin with our scented sugar scrubs. You'll step out of the shower with an added glow, soft skin and a stunning new ring.`,
    styleTitleDesktop: { color: '#000' },
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'discover-your-birthstone',
    compactBackgroundImage:
      'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/birthstone-banner-2-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/birthstone-banner-2-dt.jpg',
    title: 'Birthstone',
    description: `These candles and bath bombs make for the perfect gift — It’s two surprises in one!`,
    styleTitleDesktop: { color: '#000' },
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'fantasy',
    compactBackgroundImage:
      'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/fantasy-faves-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/fantasy-faves-banner-dt.jpg',
    title: 'Fantasy Faves',
    description: `Escape to another world with our best selling fantasy collections.`,
    styleTitleDesktop: { color: '#fff' },
    styleDescriptionDesktop: { fontWeight: 100 },
  },
  {
    handle: 'gift-sets',
    compactBackgroundImage:
      'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bundle-and-save-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/bundle-and-save-banner-dt.jpg',
    title: 'Bundle & Save',
    description: `Get the full experience and best value when you shop bundles. You’re guaranteed to get a unique ring design inside each product!`,
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'jewel-candles',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/candles-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/candles-banner-dt.jpg',
    title: 'Jewel Candles',
    description: `Each scented candle burns clean and will transport you to a different world with rich aromas—strong enough to fill any room!`,
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'satin',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/collection-satin-2-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/collection-satin-2-dt.jpg',
    title: 'New Birthstone Satin Collection',
    description: `Inside each candle, you'll discover 1 of 10 beautifully designed rings featuring a Swarovski®️ crystal birthstone. Collect all 10 for yourself or save them for the perfect decadent birthday gift.`,
    styleTitleDesktop: { color: '#ee67a0' },
    onlyDesktop: true,
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'spooky',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/col-halloween-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/col-halloween-2-dt.jpg',
    title: '',
    description: `Feast your eyes on some of the most spook-tacular collections we've created. Stock up on these fall and wicked products before they disappear...`,
    styleDescriptionDesktop: { color: '#fff', fontWeight: 100 },
  },
  {
    handle: 'summer-collection',
    compactBackgroundImage:
      'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/top-summer-picks-banner-2-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/top-summer-picks-banner-2-dt.jpg',
    title: 'Top Summer Picks',
    description: `Get your skin and home summertime ready with these refreshing summer scents, plus must-have ring styles.`,
    styleDescriptionDesktop: { color: '#000', fontWeight: 100 },
  },
  {
    handle: 'the-jewelry-store',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/jewelry-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/jewelry-banner-dt.jpg',
    title: 'Jewelry',
    description: `Surprises are great, but sometimes you simply need that one jewel. Find that perfect design in our jewelry shop.`,
    styleTitleDesktop: { color: '#ffffff' },
    styleDescriptionDesktop: { color: '#ffffff', fontWeight: 100 },
  },
  {
    handle: 'zodiac-collection-1',
    compactBackgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/zodiac-banner-mb.jpg',
    backgroundImage: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/zodiac-banner-dt.jpg',
    title: 'Zodiac',
    description: `These unique 925 sterling silver Zodiac sign rings are an astrology lovers dream. New releases every month.`,
    styleTitleDesktop: { color: '#ffffff' },
    styleDescriptionDesktop: { color: '#ffffff', fontWeight: 500 },
  },
]

const Wrapper = styled.div<{ backgroundImg?: string }>`
  background: ${(props) => (props.backgroundImg ? `url(${props.backgroundImg}) center center no-repeat` : '')};
  background-size: cover;
`

const CollectionBannerWrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 0 16px;
`

const CollectionTitle = styled.h1`
  font-family: Cormorant Garamond, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: '#ffffff';
  margin: 0;
  padding: 82px 0 16px;
`

const CollectionDescription = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: '#ffffff';
  padding: 0 0 82px;
  max-width: 372px;
`

const CollectionMobileImg = styled.img<{ desktop?: boolean }>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 82% 50%;
  ${(p) =>
    p.desktop &&
    css`
      height: auto;
      width: 100%;
      display: block;
      margin: 0 auto;
      max-width: 1170px;
    `}

  @media (min-width: 481px) {
    object-position: 72% 50%;
  }
`

const CollectionMobileTitle = styled.h1`
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

const CollectionMobileDescription = styled.p<{ desktop?: boolean }>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding: 0 16px 28px;
  ${(p) =>
    p.desktop &&
    css`
      max-width: 600px;
      margin: 10px auto 30px;
    `}
`
