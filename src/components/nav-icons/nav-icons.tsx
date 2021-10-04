import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useMediaPredicate } from 'react-media-hook'
import Link from 'next/link'
import SigninSignup from '../signin-signup'
import useCart from '../../lib/use-cart'
import createLink from '../../lib/create-link'
import window from '../../lib/window'

export type NavIconsProps = {
  className?: ClassName
  onSearchClick: () => void
  userName?: string
  isSubscriptionLinkShown: boolean
}

const SWrapper = styled.div`
  height: 32px;
  max-width: 130px;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    position: relative;
  }
`

const SSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin-right: 20px;
  width: 2.2em;
  padding: 0;

  &:focus {
    outline: 0;
  }
  @media (min-width: 1200px) {
    display: none;
    width: 1.8em;
    margin-right: 20px;
  }
`

const SProfileButton = styled.a`
  cursor: pointer;
  margin-right: 20px;
  width: 2.1em;
  background: transparent;
  border: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    width: 1.8em;
    margin-right: 20px;
  }
`

const SCartButton = styled.a`
  cursor: pointer;
  position: relative;
  margin-right: 5px;
  width: 1.7em;
  box-sizing: border-box;
  @media (min-width: 375px) {
    margin-right: 5px;
  }

  @media (min-width: 1200px) {
    width: 1.45em;
    margin-right: 12px;
    & > span {
      transition: all linear 0.2s;
    }
    &:hover > span {
      background-color: #4dbeba;
      //#7a3cb9;
    }
  }
`

const SDropDownWrapper = styled.div`
  @media (min-width: 1200px) {
    text-align: center;
  }
`
const SDropDown = styled.div`
  padding: 0 10px 15px;
  left: 0;
  right: 0;
  top: 100%;
  position: absolute;
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.06);
  transition: all ease-out 0.25s;
  z-index: 20;
  max-width: 990px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    padding: 0 20px 20px;
    width: 255px;
    left: auto;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: 1200px) {
    max-width: 250px;
  }
`

const SDropDownTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-transform: uppercase;
  border-bottom: 1px solid #ccc;
  margin: 0 0 9px;
  padding: 20px 0;
  @media (min-width: 1200px) {
    text-align: center;
  }
`

const SDropDownTitleLink = styled.a`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #000;
  font-size: 14px;
`

const SDropDownCloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 10px;
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 22px;
  height: 22px;

  @media (min-width: 1200px) {
    width: 22px;
    height: 22px;
    & > svg {
      display: none;
    }
  }

  & > svg {
    height: 100%;
  }
`

const SLinkWrapper = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;

  & > li {
    padding: 4px 0;
  }

  & > li > a,
  & > li > div {
    display: inline-block;
    padding: 6px 0;
    color: #000;
    font-size: 14px;
    text-decoration: none;
    &:hover {
      font-weight: 600;
    }
  }
  .user-dropdown-links {
    color: #bdbdbd;
    a,
    & > div {
      color: #bdbdbd;
    }
  }
`

const SSignOutLink = styled.a`
  text-decoration: underline;
  color: #bdbdbd;
  font-size: 14px;
`

const SCartBadge = styled.span`
  font-weight: 400;
  position: absolute;
  top: -4px;
  right: -8px;
  width: 1em;
  height: 1em;
  background: #9059c8;
  color: #fff;
  font-size: 11px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  transition: all linear 0.2s;
  width: 19px;
  height: 19px;
  box-sizing: border-box;
  outline: 0;

  & > span {
    position: relative;
    top: -0.5px;
    left: 0.1px;
  }
`

export function NavIcons({
  className,
  onSearchClick,
  userName,
  isSubscriptionLinkShown,
}: NavIconsProps): React.ReactElement | null {
  const cart = useCart(true)
  const isMobileScreen = useMediaPredicate('(max-width: 1200px)')
  const [dropdownVisibility, setDropdownVisibility] = useState(false)

  const handleDropdownVisibilityChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventType = event.type

    if (eventType === 'click' && isMobileScreen) setDropdownVisibility(!dropdownVisibility)
    if (eventType === 'mouseenter' && !isMobileScreen) setDropdownVisibility(true)
    if (eventType === 'mouseleave' && !isMobileScreen) setDropdownVisibility(false)
  }

  return (
    <SWrapper className={cn('NavIcons', className)}>
      <SSearchButton onClick={onSearchClick}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 23L16.26 15.55M18.58 9.79C18.58 14.6446 14.6446 18.58 9.79001 18.58C4.93543 18.58 1 14.6446 1 9.79C1 4.93542 4.93543 1 9.79001 1C14.6446 1 18.58 4.93542 18.58 9.79Z"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SSearchButton>
      <Link passHref href={isMobileScreen ? window?.location.pathname || '' : '/account'}>
        <SProfileButton
          onMouseEnter={handleDropdownVisibilityChange}
          onMouseLeave={handleDropdownVisibilityChange}
          onClick={handleDropdownVisibilityChange}
        >
          <svg width="100%" height="100%" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8833 10.78C14.8988 10.78 17.3433 8.47874 17.3433 5.64C17.3433 2.80126 14.8988 0.5 11.8833 0.5C8.86781 0.5 6.42328 2.80126 6.42328 5.64C6.42328 8.47874 8.86781 10.78 11.8833 10.78Z"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.19328 14.9H14.5733C19.0333 14.9 22.6533 18.3 22.6533 22.5H1.11328C1.11328 18.3 4.73328 14.9 9.19328 14.9Z"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </SProfileButton>
      </Link>
      <SDropDownWrapper>
        {dropdownVisibility && (
          <SDropDown onMouseEnter={handleDropdownVisibilityChange} onMouseLeave={handleDropdownVisibilityChange}>
            <SDropDownTitle>
              <Link passHref href="/account">
                <SDropDownTitleLink>My Account</SDropDownTitleLink>
              </Link>
            </SDropDownTitle>
            <SDropDownCloseBtn onClick={handleDropdownVisibilityChange}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 1L1 21M1 1L21 21"
                  stroke="black"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SDropDownCloseBtn>
            <SLinkWrapper>
              <li>
                <Link passHref href={createLink.forPage('order-status-check')}>
                  <a>Order Status</a>
                </Link>
              </li>
              {isSubscriptionLinkShown && (
                <li>
                  <Link passHref href="/account#/subscription">
                    <a>My subscription</a>
                  </Link>
                </li>
              )}
              <li>
                <Link passHref href="/account#/orders">
                  <a>My Orders</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/account#/rewards">
                  <a>My FJ Rewards</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/account#/birthday">
                  <a>My Birthday Gift</a>
                </Link>
              </li>
              <li className="user-dropdown-links">
                <div style={{ margin: '0 auto', maxWidth: 'fit-content' }}>
                  {userName ? (
                    <Link passHref href="/account/logout">
                      <SSignOutLink>Sign Out</SSignOutLink>
                    </Link>
                  ) : (
                    <SigninSignup />
                  )}
                </div>
              </li>
            </SLinkWrapper>
          </SDropDown>
        )}
      </SDropDownWrapper>
      <Link passHref href="/cart">
        <SCartButton>
          <svg width="100%" height="100%" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.78156 8.03V5.17C4.78156 2.85 6.66154 0.970001 8.98154 0.970001C11.3015 0.970001 13.1815 2.85 13.1815 5.17V8.03M14.8615 22.97H3.51154C1.80154 22.97 0.48154 21.49 0.67154 19.79L2.18155 6.16H16.1916L17.7015 19.79C17.8915 21.49 16.5615 22.97 14.8615 22.97Z"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          {!!cart.itemCount && (
            <SCartBadge>
              <span>{cart.itemCount}</span>
            </SCartBadge>
          )}
        </SCartButton>
      </Link>
    </SWrapper>
  )
}
