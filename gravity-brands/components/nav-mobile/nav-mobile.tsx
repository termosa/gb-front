import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PointsWidget } from '@fragrantjewels/gravity-brands.components.points-widget'
import { SigninSignup } from '@fragrantjewels/gravity-brands.components.signin-signup'

export type SearchFieldProps = {
  isBurgerMenuOpen: boolean
  setBurgerMenuOpen: (isBurgerMenuOpen: boolean) => void
}

const SWrapper = styled.div`
  display: block;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font: 400 14px/1.3 'Montserrat', sans-serif;
  @media (min-width: 1200px) {
    display: none !important;
  }
`

const SOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 101;
  @media (min-width: 1200px) {
    display: none !important;
  }
`

const SInner = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: 94%;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 102;
  @media (min-width: 375px) {
    max-width: 90%;
  }
  @media (min-width: 414px) {
    max-width: 350px;
  }
`

const SNavTop = styled.div`
  padding: 10px 15px 15px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 15px;
    height: 1px;
    background-color: #ccc;
  }
`

const SNavTopInner = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 0 3px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
`

const SNavTopInnerLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const SCloseBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  min-width: 22px;
  width: 22px;
  height: 22px;
  &:focus {
    outline: 0;
  }
`

const SPointsWidget = styled.div`
  margin-right: 8px;
  position: relative;
  color: #000;
  background-size: 100% 100%;
  height: 38px;
  display: block;
  text-decoration: none;
  cursor: pointer;
`

const SNavItem = styled.li`
  cursor: pointer;
  @media (max-width: 1199px) {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
    margin: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0;
  }

  & > a {
    text-decoration: none;

    color: #000;
  }

  &:hover > a {
    font-weight: 700;
  }
`

const SNavItemExtendable = styled(SNavItem)`
  & > a {
    display: flex;
    align-items: center;
  }
  & > a:after {
    content: '';
    position: absolute;
    right: 0.18em;
    top: 50%;
    border: solid #636363;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(-45deg) translateY(-50%);
    transform: rotate(-45deg) translateY(-50%);
    width: 0.9em;
    height: 0.9em;
    -webkit-transition: all ease-out 0.15s;
    transition: all ease-out 0.15s;
    -webkit-transform-origin: top;
    transform-origin: top;
  }

  @media (min-width: 1200px) {
    & > a:after {
      border: solid #636363;
      display: block;
      border-width: 0 1px 1px 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 0.5em;
      height: 0.5em;
    }
    &:hover > a:after {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: 0.42em;
      border-width: 0 2px 2px 0;
    }
  }
`

const SNavLink = styled.a`
  position: relative;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  text-align: start;
  -webkit-transition: color linear 0.2s;
  transition: color linear 0.2s;
  padding: 15px 5px;
  display: block;
`

const SNavBottom = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 15px 20px;
  position: relative;
`

const SNavList = styled.ul`
  display: flex;
  padding: 0 0 15px;
  margin: 0;
  list-style: none;
  font-size: 1em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  & > li {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ccc;
  }
`

const SCard = styled.a`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 15px;
  & > img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 10px;
  }
`

const SCardLink = styled.span`
  font-weight: 600;
  display: inline-block;
  text-align: left;
  padding: 7px 15px 7px 0;
  position: relative;
  transition: color linear 0.2s;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  @media (min-width: 1200px) {
    padding: 8px 0;
`

const SAccountWrapper = styled.div`
  margin: 0 -15px 60px;
  padding: 0 15px 20px;
  background-color: #f5f5f5;
`

const SAccountTitle = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.08em;
  padding: 30px 0 15px;
  font-size: 1em;
  a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }
`

const SAccountList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  & > li {
    padding: 8px 0;
  }
  & > li > a {
    display: inline-block;
    padding: 7px 0;
    color: #000;
    text-decoration: none;
  }
`

const SAccountListSubscription = styled.li`
  display: none;
`

const TABS_LIST = [
  {
    title: 'Spring',
    extendable: false,
  },
  {
    title: 'Bath Bombs',
    extendable: false,
  },
  {
    title: 'Candles',
    extendable: false,
  },
  {
    title: 'All',
    extendable: true,
  },
  {
    title: 'Subscription',
    extendable: true,
  },
  {
    title: 'Rewards',
    extendable: true,
  },
  {
    title: 'Vault',
    extendable: false,
  },
]
const CARDS_LIST = [
  {
    href: '/products/piece-by-piece-bath-bomb',
    imgLink: 'https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-6-mb.jpg',
    text: 'Celebrate Autism Acceptance',
  },
  {
    href: '/collections/fantas',
    imgLink: 'https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-5-mob.jpg',
    text: 'Fantasy favourites',
  },
  {
    href: '/collections/spring',
    imgLink: 'https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-4.jpg',
    text: 'Shop spring bling',
  },
]

export function NavMobile({ isBurgerMenuOpen, setBurgerMenuOpen }: SearchFieldProps): React.ReactElement | null {
  useEffect(() => {
    document.body.style.overflow = isBurgerMenuOpen ? 'hidden' : 'auto'
  }, [isBurgerMenuOpen])

  return isBurgerMenuOpen ? (
    <SWrapper id="app-nav-secondary-mobile">
      <SOverlay />
      <SInner>
        <SNavTop>
          <SNavTopInner>
            <SNavTopInnerLeft>
              <div>
                <SPointsWidget>
                  <PointsWidget points={100} />
                </SPointsWidget>
              </div>
              <SigninSignup />
            </SNavTopInnerLeft>
            <SCloseBtn type="button" id="app-nav__mobile__close-btn" onClick={() => setBurgerMenuOpen(false)}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 1L1 21M1 1L21 21"
                  stroke="black"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SCloseBtn>
          </SNavTopInner>
        </SNavTop>
        <SNavBottom>
          <div>
            <SNavList className="app-nav__list">
              {TABS_LIST.map((item) =>
                item.extendable ? (
                  <SNavItemExtendable key={item.title}>
                    <SNavLink href="">{item.title}</SNavLink>
                  </SNavItemExtendable>
                ) : (
                  <SNavItem key={item.title}>
                    <SNavLink href="">{item.title}</SNavLink>
                  </SNavItem>
                )
              )}
            </SNavList>
            <div>
              {CARDS_LIST.map((item) => (
                <SCard href={item.href} className="app-col app-add-product-col">
                  <img src={item.imgLink} alt="" />
                  <div>
                    <SCardLink className="app-animated-link app-nav__mobile-content__link">
                      <span>{item.text}</span>
                    </SCardLink>
                  </div>
                </SCard>
              ))}
            </div>
          </div>
          <SAccountWrapper>
            <SAccountTitle>
              <a href="/account/login">Account</a>
            </SAccountTitle>
            <SAccountList>
              <li>
                <a href="/pages/order-status-check">Order Status</a>
              </li>
              <SAccountListSubscription>
                <a href="/account/login">My Subscription</a>
              </SAccountListSubscription>
              <li>
                <a href="/account/login">My Orders</a>
              </li>
              <li>
                <a href="/account/login">My FJ Rewards</a>
              </li>
              <li>
                <a href="/account/login">My Birthday Gift</a>
              </li>
            </SAccountList>
          </SAccountWrapper>
        </SNavBottom>
      </SInner>
    </SWrapper>
  ) : null
}