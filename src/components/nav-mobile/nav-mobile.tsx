import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PointsWidget } from '../points-widget'
import { SigninSignup } from '../signin-signup'
import { ExtendableBlockContent } from '../../lib/site-header'
import { CustomerLevel } from '../../lib/use-customer-orders-details'

export type SearchFieldProps = {
  isBurgerMenuOpen: boolean
  setBurgerMenuOpen: (isBurgerMenuOpen: boolean) => void
  userName?: string
  points: number
  customerLevel: CustomerLevel
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
  display: flex;
  padding: 6px 0 3px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const SNavTopInnerLeft = styled.div`
  display: flex;
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
    order: 2;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
    margin: 0;
    flex-direction: row;
    padding: 0;
  }

  & > a {
    text-decoration: none;

    color: #000;
  }

  &:hover > a {
    font-weight: 600;
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
    right: 0.2em;
    top: 50%;
    border: solid #636363;
    border-width: 0 1px 1px 0;
    transform: rotate(-45deg) translateY(-50%);
    width: 0.9em;
    height: 0.9em;
    transition: all ease-out 0.15s;
    transform-origin: top;
  }

  @media (min-width: 1200px) {
    & > a:after {
      border: solid #636363;
      display: block;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
      width: 0.5em;
      height: 0.5em;
    }
    &:hover > a:after {
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
  transition: color linear 0.2s;
  padding: 15px 0;
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
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
  text-align: left;
  & > img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 15px;
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
  }

  position: relative;
  padding: 0 0 5px;

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
`

const SAccountWrapper = styled.div`
  text-align: left;
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

const SubNavTitle = styled.button`
  font-weight: 600;
  padding: 16px 0;
  background: none;
  border: 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin: 0;
  font-size: 1em;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  display: block;
  width: 100%;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &:before {
    content: "";
    left: 0;
    top: 50%;
    position: absolute;
    border: solid #636363;
    border-width: 0 1px 1px 0;
    transform: rotate(135deg) translateY(-50%);
    width: .7em;
    height: .7em;
    transform-origin: top;
  }
`

const TABS_LIST = [
  {
    title: 'Halloween',
    extendable: false,
    href: '/collections/spooky',
  },
  {
    title: 'Bath Bombs',
    extendable: false,
    href: '/collections/bath-bombs',
  },
  {
    title: 'Candles',
    extendable: false,
    href: '/collections/jewel-candles',
  },
  {
    title: 'Body Scrubs',
    extendable: false,
    href: '/collections/body-scrubs',
  },
  {
    title: 'All',
    extendable: true,
    href: '/collections/all-products',
  },
  {
    title: 'Subscription',
    extendable: true,
    href: '/pages/inner-circle',
  },
  {
    title: 'Rewards',
    extendable: true,
    href: '/pages/rewards-boutique',
  },
  {
    title: 'Vault',
    extendable: false,
    href: '/pages/vault-appraise',
  },
]
const CARDS_LIST = [
  {
    href: '/collections/spooky',
    imgLink: 'https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-22-mb.jpg',
    text: 'New in the Halloween Shop',
  },
  {
    href: '/products/stargazing-satin-bath-bomb',
    imgLink: 'https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-21-mb.jpg',
    text: 'Restock Alert',
  },
]

export function NavMobile({
  isBurgerMenuOpen,
  setBurgerMenuOpen,
  userName,
  points,
  customerLevel,
}: SearchFieldProps): React.ReactElement | null {
  useEffect(() => {
    document.body.style.overflow = isBurgerMenuOpen ? 'hidden' : 'auto'
  }, [isBurgerMenuOpen])

  const [extendableBlock, setExtendableBlock] = useState('')
  const [sideNavContent, setSideNavContent] = useState('')

  return isBurgerMenuOpen ? (
    <SWrapper id="app-nav-secondary-mobile">
      <SOverlay onClick={() => {
        setBurgerMenuOpen(false)
        setSideNavContent('')}} />
      <SInner>
        <SNavTop>
          <SNavTopInner>
            <SNavTopInnerLeft>
              <div>
                <SPointsWidget>
                  <PointsWidget points={points} customerLevel={customerLevel} />
                </SPointsWidget>
              </div>
              <SigninSignup userName={userName} />
            </SNavTopInnerLeft>
            <SCloseBtn type="button" id="app-nav__mobile__close-btn" onClick={() => {
              setBurgerMenuOpen(false)
              setSideNavContent('')}}>
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
        {!sideNavContent ? (
          <div>
            <SNavList className="app-nav__list">
              {TABS_LIST.map((item) =>
                item.extendable ? (
                  <SNavItemExtendable key={item.title}>
                    <SNavLink
                      onClick={(event) => {
                        event.preventDefault()
                        extendableBlock === item.title ? setExtendableBlock('') : setExtendableBlock(item.title)
                        setSideNavContent(item.title)
                      }}
                    >
                      {item.title}
                    </SNavLink>
                    {/* {extendableBlock === item.title && <ExtendableBlockContent name={item.title} />} */}
                  </SNavItemExtendable>
                ) : (
                  <SNavItem key={item.title}>
                    <SNavLink href={item.href}>{item.title}</SNavLink>
                  </SNavItem>
                )
              )}
            </SNavList>
            <div>
              {CARDS_LIST.map((item) => (
                <SCard key={item.imgLink} href={item.href} className="app-col app-add-product-col">
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
          ) : (
          <div>
            <SubNavTitle onClick={() => setSideNavContent('')}>{sideNavContent}</SubNavTitle>
            <ExtendableBlockContent name={sideNavContent} />
          </div>
          )}
          <SAccountWrapper>
            <SAccountTitle>
              <a href="/account">Account</a>
            </SAccountTitle>
            <SAccountList>
              <li>
                <a href="/pages/order-status-check">Order Status</a>
              </li>
              <SAccountListSubscription>
                <a href="/account#/subscription">My Subscription</a>
              </SAccountListSubscription>
              <li>
                <a href="/account#/orders">My Orders</a>
              </li>
              <li>
                <a href="/account#/rewards">My FJ Rewards</a>
              </li>
              <li>
                <a href="/account#/birthday">My Birthday Gift</a>
              </li>
            </SAccountList>
          </SAccountWrapper>
        </SNavBottom>
      </SInner>
    </SWrapper>
  ) : null
}
