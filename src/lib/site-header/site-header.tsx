import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import RollingBanner from '../../components/rolling-banner'
import NavTabs from '../../components/nav-tabs'
import SearchField from '../../components/search-field'
import SigninSignup from '../../components/signin-signup'
import PointsWidget from '../../components/points-widget'
import NavIcons from '../../components/nav-icons'
import NavMobile from '../../components/nav-mobile'

import { ProductsChunk } from '../../modules/normalize-products-chunk'
import useCustomerOrdersDetails from '../use-customer-orders-details'

const SWrapper = styled.div`
  text-align: center;

  font: 400 14px 'Montserrat', sans-serif;
  line-height: 1.3;
  letter-spacing: 0.7px;

  & > svg {
    width: 100%;
    display: block;
  }

  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const SInnerWrapper = styled.div`
  box-sizing: border-box;
  padding: 0;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  background: #fff;

  @media (min-width: 1200px) {
    padding-top: 14px;
  }
`

const SContentWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
`

const SSearchWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  // height: 62px;
  padding: 11px 16px;
  flex-direction: column;

  @media (min-width: 375px) {
    padding: 15px 16px;
  }

  @media (min-width: 1200px) {
    padding: 0;
    margin-bottom: 7px;
    flex-direction: row;
  }
`

const SSearchContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`

const SLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`

const SLogo = styled.a`
  display: block;
  width: 92px;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 120px;
  }
`

const SHamburgerMenu = styled.span`
  cursor: pointer;
  position: relative;
  display: block;
  width: 28px;
  height: 22px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-right: 12px;
  @media (min-width: 375px) {
    width: 32px;
    height: 25px;
  }
  @media (min-width: 1200px) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #000;
    margin-top: -0.5px;
  }
`

const SFieldWrapper = styled.div`
  margin: 0 15px;
  flex-grow: 1;

  @media (min-width: 1200px) {
    max-width: 404px;
  }

  @media (max-width: 1199px) {
    order: 5;
    width: 100%;
    display: none !important;
  }
`

const SIconsWrapper = styled.div`
  margin: 0 0 0 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: fit-content;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    min-width: 405px;
    min-height: 43px;
  }
`

const SSignSignup = styled(SigninSignup)`
  @media (max-width: 1199px) {
    display: none;
  }
`

const SPointsWidget = styled.div`
  @media (max-width: 1199px) {
    display: none !important;
  }
`

const ExtendableBlock = styled.div`
  background: #fff;
  font-size: 1em;
  white-space: normal;

  * > img {
    margin-bottom: 15px;
  }

  @media (min-width: 1200px) {
    padding: 32px 0 0;
    // font-size: 0.75em;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.1);
  }
`

const ExtendableBlockWrapper = styled.div<{ opened: string }>`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  display: block;
  transition: all ease-out 0.25s;
  z-index: 0;
  transform: ${({ opened }) => (opened ? 'translateY(0)' : 'translateY(-150%)')};

  @media (max-width: 1199px) {
    & {
      display: none !important;
    }
  }
`

const ExtendableBlockContainer = styled.div`
  margin: 0 auto;
  width: 960px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1199px) {
    width: 100%;
    flex-direction: column;

    img {
      width: 100%;
    }

    // & > div {
    //   margin: 0 0 25px 0;
    // }
  }
`

const ExtendableBlockListTitle = styled.strong`
  font: 600 14px/1.5 'Montserrat', sans-serif;
  display: block;
  margin: 0 0 8px;
  text-transform: uppercase;
  // letter-spacing: 0.08em;
  text-align: start;

  @media (min-width: 1200px) {
    margin: 0 0 0.9em;
  }
`

const ExtendableBlockListText = styled.p`
  font: 400 14px/1.5 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
`

const ExtendableBlockList = styled.ul`
  list-style: none;
  padding: 0;
  // margin: 0 0 15px;
  margin: 0;
  text-transform: none;

  & > li:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    // margin: 0 0 25px;

    & > li:last-child {
      margin-bottom: 8px;
    }
  }
`

const ExtendableBlockListItem = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  // border-bottom: 1px solid #ccc;
  @media (min-width: 1200px) {
    margin: 0 0 0.45em;
    border: 0;
    text-align: start;
  }

  & > a {
    display: block;
    // padding: 15px 0 15px;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font: 400 14px/1.5 'Montserrat', sans-serif;
    // letter-spacing: 0.05em;
    transition: color linear 0.2s;
    color: #000;
    text-decoration: none;
    white-space: nowrap;
  }

  @media (min-width: 1200px) {
    & > a {
      display: inline-block;
      padding: 6px 0 6px 0;
    }
    & > a:hover {
      text-shadow: 0 0 #000;
      // font-weight: 600;
    }
  }
`

const AnimatedLink = styled.a`
  font: 600 14px/1.5 'Montserrat', sans-serif !important;
  display: inline-block;
  padding-bottom: 5px;
  // border-bottom: 1px solid black;
  text-transform: uppercase;
  // font-weight: bold;
  cursor: pointer;
  color: black;
  text-decoration: none;

  text-transform: uppercase;
  position: relative;

  &:hover {
    @media (min-width: 1200px) {
      text-shadow: 0 0 #000;

      span:after {
        height: 2px;
        bottom: 0px;
      }
    }

  }

  & > span {
    position: relative;
    padding: 0 0 5px;

    @media (min-width: 1200px) {
      &:hover {
        text-shadow: 0 0 #000;
      }
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background: #000;
      transition: bottom linear .2s;
  }
    @media (max-width: 1199px) {
      display: inline-block;
      margin-bottom: 5px;
    }
  }
`

const ExtendableBlockItems = styled.div`
  @media (min-width: 1200px) {
    width: 70%;
    display: flex;
  }
`

const ExtendableBlockItem = styled.div`
  & > * {
    text-decoration: none;
    color: black;
    display: inline-block;
  }

  margin: 0 1.5em 25px 1.5em;
  // width: 80%;
  text-align: start;
  
  @media (max-width: 1199px) {
    & > div {
      margin-bottom: 25px;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1200px) {
    &:first-child {
      margin-left: 0;
    }
    & > div:first-child {
      margin-bottom: 20px;
    }
  }
  &.desktop-nav-product-item {
    display: none;
    @media (min-width: 1200px) {
      width: 30%;
      display: flex;
      flex-direction: column;
      margin-right: 0;
      a {
        text-align: center;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
`

const AllContent = () => (
  <ExtendableBlock>
    <ExtendableBlockContainer>
      <ExtendableBlockItems>
        <ExtendableBlockItem>
          <ExtendableBlockListTitle>Shop by product</ExtendableBlockListTitle>
          <ExtendableBlockList>
            <ExtendableBlockListItem>
              <a href="/collections/bath-bombs">Bath Bombs</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/jewel-candles">Candles</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/body-scrubs">Body Scrubs</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/the-jewelry-store">Jewelry</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/gift-sets">Gift Sets</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <AnimatedLink href="/collections/all-products">
                <span>Shop all</span>
              </AnimatedLink>
            </ExtendableBlockListItem>
          </ExtendableBlockList>
        </ExtendableBlockItem>
        <ExtendableBlockItem>
          <ExtendableBlockListTitle>Shop by Fragrance</ExtendableBlockListTitle>
          <ExtendableBlockList>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Aquatic">Aquatic</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Citrus">Citrus</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Floral">Floral</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Floral%20Woods">Floral Woods</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Fresh">Fresh</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Fruity">Fruity</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Gourmand">Gourmand</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Green">Green</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Musky">Musky</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <a href="/collections/all-products#fragrance=Fragrance:%20Spicy/%20Smoky">Spicy/ Smoky</a>
            </ExtendableBlockListItem>
            <ExtendableBlockListItem>
              <AnimatedLink href="/collections/all-products"><span>Shop all</span></AnimatedLink>
            </ExtendableBlockListItem>
          </ExtendableBlockList>
        </ExtendableBlockItem>
        <ExtendableBlockItem>
          <div>
            <ExtendableBlockListTitle>Shop by Material</ExtendableBlockListTitle>
            <ExtendableBlockList>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#material=Material:%2018K%20Gold%20Plated">18K Gold Plated</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#material=Material:%20925%20Sterling%20Silver">925 Sterling Silver</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#material=Material:%20Rhodium%20plated">Rhodium plated</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <AnimatedLink href="/collections/all-products">
                  <span>Shop all</span>
                </AnimatedLink>
              </ExtendableBlockListItem>
            </ExtendableBlockList>
          </div>
          <div>
            <ExtendableBlockListTitle>Shop by Metal Color</ExtendableBlockListTitle>
            <ExtendableBlockList>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#color=Metal%20Color:%20Black">Black</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#color=Metal%20Color:%20Gold">Gold</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#color=Metal%20Color:%20Rose%20Gold">Rose Gold</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <a href="/collections/all-products#color=Metal%20Color:%20Silver">Silver</a>
              </ExtendableBlockListItem>
              <ExtendableBlockListItem>
                <AnimatedLink href="/collections/all-products">
                  <span>Shop all</span>
                </AnimatedLink>
              </ExtendableBlockListItem>
            </ExtendableBlockList>
          </div>
        </ExtendableBlockItem>
      </ExtendableBlockItems>
      <ExtendableBlockItem className="desktop-nav-product-item">
        <a href="/collections/summer-collection">
          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/watch-me-bloom-nav-all-img-dt.jpg" />
          <AnimatedLink as="span"><span>New! Candle + Planter in 1</span></AnimatedLink>
        </a>
      </ExtendableBlockItem>
    </ExtendableBlockContainer>
  </ExtendableBlock>
)

const SubscriptionContent = () => (
  <ExtendableBlock>
    <ExtendableBlockContainer>
      <ExtendableBlockItem>
        <a href="/pages/inner-circle">
          <img src="https://fragrantjewels-assets.s3.amazonaws.com/images/island-time/nav-subscription-july.jpg" />
          <ExtendableBlockListTitle>Exclusive Savings On New Collections Every Month</ExtendableBlockListTitle>
          <ExtendableBlockListText>
            Create a tropical oasis right in your own home with our new, exclusive collection.
          </ExtendableBlockListText>
          <AnimatedLink as="span"><span>Learn more</span></AnimatedLink>
        </a>
      </ExtendableBlockItem>
      <ExtendableBlockItem>
        <a href="/pages/rare-ic-page">
          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-subscription-img-rare-5.jpg" />
          <ExtendableBlockListTitle>Everything There Is To Know About Rare Collections</ExtendableBlockListTitle>
          <ExtendableBlockListText>
            Start collecting unique limited edition sets not available for sale! Find out how you can qualify.
          </ExtendableBlockListText>
          <AnimatedLink as="span"><span>Learn more</span></AnimatedLink>
        </a>
      </ExtendableBlockItem>
      <ExtendableBlockItem>
        <ExtendableBlockListTitle>Subscription</ExtendableBlockListTitle>
        <ExtendableBlockList>
          <ExtendableBlockListItem>
            <a href="/pages/inner-circle#how-it-works">How it works</a>
          </ExtendableBlockListItem>
          <ExtendableBlockListItem>
            <a href="/pages/inner-circle#join-now">Join now</a>
          </ExtendableBlockListItem>
          <ExtendableBlockListItem>
            <a href="/pages/inner-circle#current-box">Current box</a>
          </ExtendableBlockListItem>
          <ExtendableBlockListItem>
            <a href="/collections/esic">Members Only Store</a>
          </ExtendableBlockListItem>
          <ExtendableBlockListItem>
            <a href="/pages/rare-ic-page">Rare Collections</a>
          </ExtendableBlockListItem>
        </ExtendableBlockList>
      </ExtendableBlockItem>
    </ExtendableBlockContainer>
  </ExtendableBlock>
)

const RewardsContent = () => (
  <ExtendableBlock>
    <ExtendableBlockContainer>
      <ExtendableBlockItem>
        <a href="/pages/rewards-boutique">
          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-rewards-img-1.jpg" />
          <ExtendableBlockListTitle>New Rewards Every Week</ExtendableBlockListTitle>
          <ExtendableBlockListText>
            Every dollar you spend earns you reward points you can use to redeem free jewelry, products and more!
          </ExtendableBlockListText>
          <AnimatedLink as="span"><span>Learn more</span></AnimatedLink>
        </a>
      </ExtendableBlockItem>
      <ExtendableBlockItem>
        <a href="/pages/rewards-explainer">
          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-rewards-img-2.jpg" />
          <ExtendableBlockListTitle>Earn Platinum Reward Status</ExtendableBlockListTitle>
          <ExtendableBlockListText>
            Get exclusive access to VIP offers, 3x points and more when you earn Platinum status!
          </ExtendableBlockListText>
          <AnimatedLink as="span"><span>Learn more</span></AnimatedLink>
        </a>
      </ExtendableBlockItem>
      <ExtendableBlockItem>
        <ExtendableBlockListTitle>Rewards</ExtendableBlockListTitle>
        <ExtendableBlockList>
          <ExtendableBlockListItem>
            <a href="/pages/rewards-boutique">Rewards Boutique</a>
          </ExtendableBlockListItem>
          <ExtendableBlockListItem>
            <a href="/pages/rewards-explainer">How it Works</a>
          </ExtendableBlockListItem>
        </ExtendableBlockList>
      </ExtendableBlockItem>
    </ExtendableBlockContainer>
  </ExtendableBlock>
)

export const ExtendableBlockContent = ({ name }: { name: string }): JSX.Element | null => {
  switch (name) {
    case 'All':
      return <AllContent />
    case 'Subscription':
      return <SubscriptionContent />
    case 'Rewards':
      return <RewardsContent />
    default:
      return null
  }
}

export type SiteHeaderProps = {
  className?: ClassName
  style?: React.CSSProperties
  onSearch: (value: string) => void
  userName?: string
  searchedProducts?: ProductsChunk
  userEmail?: string
}

export function SiteHeader({
  className,
  style,
  onSearch,
  userName,
  searchedProducts,
  userEmail,
}: SiteHeaderProps): React.ReactElement | null {
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false)
  const [extendableBlockContent, setExtendableBlockContent] = useState('')
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const customerOrdersDetails = useCustomerOrdersDetails(userEmail)

  return (
    <SWrapper className={cn(className)} style={style} onMouseLeave={() => setExtendableBlockContent('')}>
      <RollingBanner />
      <SInnerWrapper>
        <SContentWrapper>
          <SSearchWrapper onMouseEnter={() => setExtendableBlockContent('')}>
            <SSearchContent>
              <SLogoWrapper>
                <SHamburgerMenu onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)} />
                <SLogo href="/">
                  <svg width="100%" height="100%" viewBox="0 0 117 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.2133 7.1902L9.8729 7.24467C9.58693 6.64548 9.24649 6.18248 8.86519 5.84203C8.47027 5.50159 7.72129 5.4335 6.63187 5.62415L3.78575 6.12801L4.68452 11.1938L7.0404 10.7853C7.63958 10.6763 8.0345 10.4721 8.21153 10.1453C8.37494 9.83205 8.45665 9.35542 8.4158 8.71539L8.76986 8.6473L9.54608 13.0186L9.19201 13.0867C9.06945 12.4194 8.85157 11.9837 8.53836 11.7522C8.22515 11.5343 7.77576 11.4662 7.20381 11.5615L4.84794 11.97L5.55606 16.0281C5.67862 16.7363 5.80118 17.172 5.92374 17.3218C6.0463 17.4852 6.23695 17.5942 6.5093 17.6623C6.78166 17.7304 7.0404 17.744 7.28552 17.7031L7.74853 17.6214L7.81662 17.9755L2.28779 18.956L2.21971 18.6019L2.68271 18.5202C3.26827 18.4113 3.62233 18.207 3.74489 17.9074C3.86745 17.5942 3.86746 17.0767 3.73128 16.355L2.26056 8.02088C2.11076 7.20381 1.92011 6.69995 1.66137 6.49569C1.40263 6.30504 1.02133 6.25057 0.531093 6.33228L0.0680931 6.41398L0 6.05992L9.58693 4.37131L10.2133 7.1902ZM27.1675 15.0749L23.7086 15.5651L18.4657 10.118C18.1525 10.1725 17.8802 10.2133 17.6759 10.2542C17.567 10.2678 17.3763 10.2951 17.104 10.3087L17.635 14.0808C17.7576 14.9387 17.9483 15.4562 18.2206 15.6468C18.493 15.8375 18.8334 15.892 19.2556 15.8375L19.7594 15.7694L19.8139 16.1235L14.2578 16.8997L14.2034 16.5456L14.6936 16.4775C15.2247 16.4094 15.5788 16.2188 15.7286 15.9056C15.8784 15.606 15.9056 15.0749 15.7966 14.3395L14.6255 5.96459C14.503 5.10667 14.3123 4.5892 14.04 4.39855C13.7676 4.22152 13.4135 4.15343 12.9778 4.2079L12.4875 4.27599L12.4331 3.92193L17.1584 3.25465C18.3159 3.09124 19.2556 3.03677 19.9909 3.09124C20.7127 3.14571 21.3799 3.41807 21.9791 3.92193C22.5783 4.42578 22.9324 5.06582 23.0413 5.84203C23.2864 7.58511 22.374 8.83795 20.3177 9.61416L23.5179 12.9505C24.3214 13.7812 24.9614 14.2851 25.4653 14.4757C25.9691 14.6664 26.5275 14.7481 27.1266 14.7208L27.1675 15.0749ZM16.2596 4.30322L17.0222 9.69587L17.567 9.61416C18.7109 9.45075 19.5824 9.08307 20.1816 8.48389C20.7944 7.89832 21.0259 7.14934 20.9033 6.25057C20.7671 5.32456 20.3995 4.6709 19.773 4.30322C19.1466 3.93554 18.4657 3.79936 17.744 3.90831C17.1312 3.99001 16.6409 4.12619 16.2596 4.30322ZM41.8202 13.6042L36.6727 14.0536L36.6455 13.6995C37.5306 13.5769 37.9528 13.2773 37.8983 12.7871C37.8711 12.5011 37.7077 12.0654 37.3945 11.4798L36.4412 9.68225L31.389 10.118L30.6809 12.256C30.5039 12.7735 30.4358 13.1548 30.463 13.4135C30.5039 13.8902 31.035 14.1217 32.0427 14.0944L32.0699 14.4485L27.9573 14.8025L27.9301 14.4485C28.4203 14.3259 28.7744 14.1489 29.0059 13.9446C29.2238 13.7404 29.5234 13.1003 29.8774 12.0109L33.527 0.871538L33.8675 0.844303L39.3554 11.3028C39.7367 12.0245 40.0908 12.542 40.404 12.828C40.7308 13.1139 41.1802 13.2501 41.7794 13.2365L41.8202 13.6042ZM36.1144 8.98774L33.4453 3.90831L31.6341 9.38266L36.1144 8.98774ZM56.9632 6.60463H56.7181C56.2279 6.61825 55.9011 6.75443 55.7513 7.0404C55.5878 7.31275 55.5197 7.81661 55.5334 8.53836L55.6015 12.542C54.1852 13.3318 52.66 13.754 51.0259 13.7812C48.7381 13.8221 46.9542 13.1956 45.6605 11.9156C44.3668 10.6355 43.6995 9.08307 43.6723 7.25828C43.645 5.99183 43.9719 4.76623 44.6255 3.58148C45.2928 2.39673 46.1099 1.52519 47.0767 0.966863C48.0572 0.408534 49.1875 0.108942 50.4676 0.081706C51.3119 0.0680882 52.306 0.258737 53.4362 0.653654C53.8039 0.776214 54.049 0.844303 54.158 0.844303C54.4439 0.844303 54.5937 0.55833 54.6074 0H54.9614L55.37 4.12619H55.0295C54.2669 1.8384 52.7962 0.708126 50.6446 0.748979C49.0241 0.776215 47.8121 1.38902 47.0086 2.58738C46.2052 3.78575 45.8239 5.17476 45.8511 6.79528C45.8783 8.6473 46.3958 10.1725 47.3763 11.3709C48.3568 12.5556 49.5688 13.1412 50.9986 13.1139C51.9519 13.1003 52.8507 12.8416 53.695 12.3377L53.6269 8.55197C53.6133 7.78938 53.4907 7.28552 53.2592 7.02678C53.0277 6.76804 52.5647 6.64548 51.8838 6.6591V6.29142L56.9496 6.20971L56.9632 6.60463ZM71.7113 13.5633L68.2115 13.5089L63.8811 7.31276C63.5542 7.32637 63.2955 7.32637 63.0912 7.31276C62.9823 7.31276 62.7917 7.29914 62.5193 7.28552L62.4512 11.0849C62.4376 11.9428 62.5465 12.5011 62.7917 12.719C63.0232 12.9369 63.3636 13.0595 63.7857 13.0595L64.3032 13.0731V13.4271L58.6927 13.3318V12.9778L59.1966 12.9914C59.7413 13.005 60.1089 12.8688 60.2996 12.5965C60.5039 12.3241 60.5992 11.8066 60.6128 11.0576L60.7626 2.601C60.7762 1.72946 60.6673 1.18475 60.4221 0.966863C60.177 0.748979 59.8502 0.626418 59.4008 0.6128L58.897 0.599182V0.245119L63.6632 0.326827C64.8343 0.354062 65.774 0.435769 66.4821 0.599182C67.1902 0.762596 67.803 1.14389 68.3069 1.72946C68.8243 2.31502 69.0695 3.00953 69.0558 3.78575C69.0286 5.54244 67.9256 6.63187 65.7739 7.08125L68.4158 10.8806C69.0695 11.8202 69.6278 12.4194 70.0908 12.6918C70.5674 12.9641 71.0985 13.1276 71.6977 13.1956L71.7113 13.5633ZM62.6282 1.2256L62.5329 6.67272L63.0776 6.68634C64.2351 6.69995 65.1612 6.46845 65.842 5.99183C66.5366 5.50159 66.8906 4.80708 66.9042 3.89469C66.9178 2.95506 66.6455 2.24694 66.0872 1.79755C65.5288 1.33454 64.8752 1.10304 64.1534 1.08942C63.527 1.06219 63.0232 1.11666 62.6282 1.2256ZM86.5411 15.1566L81.3936 14.7072L81.4208 14.3532C82.306 14.3804 82.7826 14.1625 82.8234 13.6723C82.8507 13.3863 82.7553 12.9233 82.5511 12.2969L81.9247 10.3631L76.8724 9.91375L75.7966 11.8883C75.5379 12.365 75.4017 12.7326 75.3745 12.9914C75.3336 13.468 75.8103 13.7812 76.8044 13.9446L76.7771 14.2987L72.6646 13.9446L72.6918 13.5906C73.1956 13.5497 73.577 13.4408 73.8357 13.2773C74.0944 13.1139 74.4893 12.5284 75.0341 11.5207L80.5629 1.18475L80.9033 1.21198L84.4984 12.4603C84.7572 13.2501 85.0023 13.8084 85.2746 14.1489C85.547 14.4893 85.9691 14.7072 86.5683 14.7889L86.5411 15.1566ZM81.7204 9.61416L79.9637 4.15343L77.2401 9.21925L81.7204 9.61416ZM103.441 4.76623L102.978 4.69814C102.419 4.61643 102.038 4.69814 101.82 4.94326C101.602 5.18838 101.439 5.665 101.344 6.38674L99.8048 17.3218L99.4644 17.2674L92.3831 5.62415L91.2665 13.6042C91.1439 14.4485 91.1984 14.9932 91.389 15.2383C91.5933 15.4698 91.9201 15.6196 92.3695 15.6877L92.8189 15.7558L92.7644 16.1098L88.2433 15.4698L88.2978 15.1158L88.7472 15.1838C89.1421 15.2383 89.4962 15.1838 89.7821 15.0204C90.0681 14.857 90.2724 14.3395 90.3949 13.4816L91.6614 4.46664C91.2937 3.89469 90.9396 3.48616 90.5856 3.24104C90.2315 2.99591 89.7958 2.8325 89.2919 2.76441L89.3464 2.41035L92.8734 2.90059L99.4371 13.7404L100.486 6.25057C100.608 5.40626 100.554 4.86155 100.35 4.61643C100.145 4.37131 99.8184 4.22152 99.369 4.16705L98.9197 4.09896L98.9741 3.74489L103.495 4.38493L103.441 4.76623ZM116.051 9.90014L115.697 9.83205C115.847 8.33409 115.207 7.44893 113.777 7.16296L111.952 6.8089L110.045 16.6409C109.882 17.4852 109.896 18.03 110.1 18.2751C110.291 18.5202 110.604 18.6836 111.053 18.7789L111.503 18.8606L111.434 19.2147L105.974 18.1525L106.042 17.7985L106.505 17.8938C106.9 17.9755 107.24 17.9346 107.54 17.7848C107.839 17.635 108.071 17.1312 108.234 16.2869L110.141 6.45483L108.602 6.15524C107.798 5.99183 107.158 6.03268 106.682 6.25057C106.219 6.46845 105.865 7.01316 105.62 7.87108L105.266 7.803L106.001 4.8207L116.487 6.86337L116.051 9.90014Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M39.0014 21.9927H38.7154C38.3477 21.9927 38.1162 22.0881 38.0073 22.2515C37.8983 22.4285 37.8575 22.7417 37.8575 23.1911V27.113C37.8575 28.0118 37.6668 28.7199 37.2855 29.2238C36.9042 29.7276 36.414 29.9864 35.8012 29.9864C35.4744 29.9864 35.202 29.9047 34.9569 29.7413C34.7118 29.5779 34.6028 29.36 34.6028 29.0876C34.6028 28.6655 34.8071 28.4612 35.202 28.4612C35.4607 28.4612 35.6922 28.7199 35.9237 29.251C36.0191 29.4689 36.128 29.5642 36.2778 29.5642C36.5774 29.5642 36.7136 29.2646 36.7136 28.6791V23.1911C36.7136 22.6872 36.6455 22.3604 36.5229 22.2106C36.4004 22.0608 36.1689 21.9791 35.842 21.9791H35.5561V21.7612H39.0014V21.9927Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M47.0222 27.7939L46.3277 29.8094H40.1316V29.5915H40.4176C40.7036 29.5915 40.9079 29.5234 41.0577 29.3736C41.2074 29.2238 41.2755 28.9106 41.2755 28.3931V23.1775C41.2755 22.6328 41.2074 22.3059 41.0577 22.1834C40.9079 22.0608 40.69 22.0064 40.404 22.0064H40.118V21.7885H46.3141L46.4094 23.5452H46.1779C46.069 23.0005 45.9192 22.6464 45.7286 22.483C45.5379 22.3196 45.1702 22.2242 44.6255 22.2242H42.4194V25.3972H44.1761C44.5847 25.3972 44.8979 25.3291 45.1021 25.1929C45.3064 25.0567 45.4153 24.7299 45.4426 24.2261H45.6605V27.0177H45.4426C45.3881 26.473 45.2655 26.1462 45.034 26.01C44.8162 25.8874 44.5302 25.8193 44.1761 25.8193H42.4194V28.4612C42.4194 28.8425 42.4603 29.0876 42.542 29.1966C42.6237 29.3055 42.8007 29.36 43.0867 29.36H44.4485C45.0068 29.36 45.4562 29.2646 45.7694 29.0876C46.0826 28.9106 46.4231 28.4748 46.7771 27.7803H47.0222V27.7939Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M59.36 21.9927C59.1285 21.9927 58.9378 22.0472 58.7744 22.1834C58.611 22.3059 58.4884 22.4694 58.4203 22.66C58.3386 22.8507 58.2433 23.1366 58.1071 23.5179L55.8738 30H55.6423L53.8039 24.8661L51.9927 30H51.7749L49.3917 23.3273C49.2692 22.9596 49.1602 22.7009 49.0922 22.5238C49.0241 22.3468 48.9151 22.2242 48.7517 22.1289C48.6019 22.0336 48.4113 21.9927 48.1661 21.9927V21.7749H51.1348V21.9927H50.9986C50.5629 21.9927 50.3586 22.1561 50.3586 22.483C50.3586 22.6328 50.4403 22.946 50.6173 23.4362L52.197 27.9437L53.5316 24.1171L53.1094 22.9051C52.8915 22.3059 52.5238 22.0064 51.9927 22.0064V21.7885H55.1248V22.0064H54.9069C54.4848 22.0064 54.2669 22.1834 54.2669 22.5238C54.2669 22.7281 54.3486 23.0822 54.5257 23.5724L56.0645 27.9437L57.5897 23.5179C57.7667 23.0141 57.8484 22.6736 57.8484 22.4966C57.8484 22.1562 57.5488 21.9927 56.9632 21.9927V21.7749H59.36V21.9927Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M67.3672 27.7939L66.6727 29.8094H60.4766V29.5915H60.7626C61.0486 29.5915 61.2528 29.5234 61.4026 29.3736C61.5524 29.2238 61.6205 28.9106 61.6205 28.3931V23.1775C61.6205 22.6328 61.5524 22.3059 61.4026 22.1834C61.2528 22.0608 61.035 22.0064 60.749 22.0064H60.463V21.7885H66.6591L66.768 23.5315H66.5365C66.4276 22.9868 66.2778 22.6328 66.0872 22.4694C65.8965 22.3059 65.5288 22.2106 64.9841 22.2106H62.778V25.3836H64.5347C64.9433 25.3836 65.2565 25.3155 65.4607 25.1793C65.665 25.0431 65.774 24.7163 65.8012 24.2124H66.0191V27.0041H65.8012C65.7467 26.4594 65.6242 26.1325 65.3927 25.9964C65.1748 25.8738 64.8888 25.8057 64.5347 25.8057H62.778V28.4476C62.778 28.8289 62.8189 29.074 62.9006 29.1829C62.9823 29.2919 63.1593 29.3463 63.4453 29.3463H64.8071C65.3654 29.3463 65.8148 29.251 66.128 29.074C66.4412 28.897 66.7817 28.4612 67.1357 27.7667H67.3672V27.7939Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M75.4154 27.6305L74.7208 29.8094H68.4975V29.5915H68.7971C69.1376 29.5915 69.369 29.5098 69.478 29.3327C69.6006 29.1557 69.655 28.8425 69.655 28.3795V23.1911C69.655 22.66 69.5733 22.3196 69.4235 22.1834C69.2737 22.0472 69.0558 21.9791 68.7971 21.9791H68.4975V21.7612H72.1335V21.9791C71.793 21.9791 71.5343 22.0064 71.33 22.0744C71.1257 22.1425 70.9896 22.2379 70.9079 22.3604C70.8262 22.483 70.7853 22.8098 70.7853 23.3137V28.3659C70.7853 28.7744 70.8398 29.0195 70.9623 29.1285C71.0849 29.2374 71.4389 29.2783 72.0245 29.2783H72.6237C73.1003 29.2783 73.468 29.251 73.7404 29.1966C74.0127 29.1421 74.2715 28.9923 74.503 28.7608C74.7481 28.5293 74.9796 28.1344 75.2111 27.576L75.4154 27.6305Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      d="M76.8452 29.9864H76.6273V27.2356H76.8452C77.1176 28.7608 77.921 29.5234 79.2283 29.5234C79.6913 29.5234 80.059 29.4008 80.3722 29.1557C80.6718 28.9106 80.8352 28.5974 80.8352 28.2025C80.8352 27.7667 80.6173 27.3854 80.1679 27.0449C79.1194 26.4321 78.2479 25.901 77.567 25.4517C76.8861 25.0023 76.5592 24.4167 76.5592 23.695C76.5592 23.0958 76.7771 22.5919 77.2401 22.1834C77.6895 21.7749 78.2478 21.5706 78.9151 21.5706C79.3509 21.5706 79.8003 21.6795 80.2769 21.8838C80.4948 21.9791 80.6582 22.0336 80.7399 22.0336C80.9442 22.0336 81.0803 21.8838 81.1484 21.5706H81.3663V24.3486H81.1484C81.0259 23.5315 80.7671 22.946 80.345 22.5783C79.9228 22.2242 79.4462 22.0472 78.9287 22.0472C78.5338 22.0472 78.207 22.1698 77.921 22.4013C77.6487 22.6328 77.4989 22.9324 77.4989 23.2728C77.4989 23.4907 77.5942 23.7358 77.7848 23.9809C77.9755 24.2261 78.5474 24.621 79.5007 25.1248C80.0863 25.438 80.5356 25.6968 80.8352 25.901C81.1348 26.1053 81.3799 26.364 81.5842 26.6909C81.7885 27.0177 81.8838 27.3581 81.8838 27.7394C81.8838 28.3795 81.6387 28.9106 81.1484 29.3327C80.6582 29.7549 80.059 29.9728 79.3509 29.9728C78.9696 29.9728 78.493 29.8774 77.921 29.6868C77.567 29.5642 77.3355 29.5098 77.1993 29.5098C77.0086 29.537 76.8861 29.6868 76.8452 29.9864Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M83.9946 27.1403L99.6005 27.8756H83.9946V27.1403Z"
                      fill="#221F1F"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.4784 27.1403V27.8756H16.8861L32.4784 27.1403Z"
                      fill="#221F1F"
                    ></path>
                  </svg>
                </SLogo>
              </SLogoWrapper>
              <SFieldWrapper>
                <SearchField onSearch={onSearch} searchedProducts={searchedProducts} />
              </SFieldWrapper>
              <SIconsWrapper>
                <SSignSignup userName={userName} />
                <SPointsWidget>
                  <PointsWidget
                    points={customerOrdersDetails.totalPoints}
                    customerLevel={customerOrdersDetails.level}
                  />
                </SPointsWidget>
                <NavMobile
                  isBurgerMenuOpen={isBurgerMenuOpen}
                  setBurgerMenuOpen={setBurgerMenuOpen}
                  userName={userName}
                  points={customerOrdersDetails.totalPoints}
                  customerLevel={customerOrdersDetails.level}
                />
                <NavIcons
                  onSearchClick={() => setIsSearchDropdownVisible(!isSearchDropdownVisible)}
                  userName={userName}
                  isSubscriptionLinkShown={
                    customerOrdersDetails.isICMember && customerOrdersDetails.isICMembershipActive
                  }
                />
              </SIconsWrapper>
            </SSearchContent>
            {isSearchDropdownVisible && <SearchField onSubmit={onSearch} searchedProducts={searchedProducts} />}
          </SSearchWrapper>
          <NavTabs setExtendableBlockContent={setExtendableBlockContent} />
        </SContentWrapper>
      </SInnerWrapper>
      <ExtendableBlockWrapper opened={extendableBlockContent}>
        <ExtendableBlockContent name={extendableBlockContent} />
      </ExtendableBlockWrapper>
    </SWrapper>
  )
}
