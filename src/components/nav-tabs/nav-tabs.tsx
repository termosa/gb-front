import React, { Dispatch, SetStateAction } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import createLink from '../../lib/create-link'

export type NavTabsProps = {
  className?: ClassName
  setExtendableBlockContent: Dispatch<SetStateAction<string>>
  isSubscriptionLinkShown: boolean
  addGAEvent: any
}

const SWrapperOuter = styled.div`
  overflow: hidden;
`

const SWrapper = styled.div`
  padding-bottom: 11px;

  @media (max-width: 1199px) {
    padding: 0;
    margin: 0 -7.5px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 991px) {
    background-color: #f5f5f5;
  }
`

const SDesktopNav = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  list-style: none;
  font-size: 0.9em;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  letter-spacing: 0.7px;
  min-height: 32px;
  @media (max-width: 1199px) {
    font-size: 1em;
    max-width: 990px;
    min-width: 600px;
    padding: 10px 0;
    & > li:last-child {
      padding-right: 30px;
    }
  }

  @media (max-width: 1033px) {
    padding: 10px 22.5px;
  }
`

const SNavItem = styled.li`
  cursor: pointer;
  @media (max-width: 1199px) {
    order: 2;
    margin-right: 15px;
  }

  @media (min-width: 1200px) {
    margin: 0;
    flex-direction: row;
    padding: 0;
  }

  & > a {
    text-decoration: none;
    white-space: nowrap;
    color: #000;
  }

  &:hover > a {
    font-weight: 600;
  }
`

const SNavItemExtendable = styled(SNavItem)`
  position: relative;

  & > a {
    display: flex;
    align-items: center;
  }
  & > a:after {
    content: '';
    position: absolute;
    right: 0;
    top: 1px;
    font: 400 14px/1.5 'Montserrat', sans-serif;
    display: none;
    transition: all ease-out 0.15s;
  }

  @media (min-width: 1200px) {
    padding-right: 13px;
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
      top: 6px;
      border-color: #000;
    }
  }
`

const SSubscribeButton = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  display: none;
  @media (min-width: 1200px) {
    order: 2;
    margin-left: 0;
  }
  @media (max-width: 1199px) {
    margin-right: 15px;
  }
  & > a {
    font: 600 14px/1.5 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background-color: #9059c8;
    color: #fff;
    border-radius: 2em;
    border: 1px solid #9059c8;
    padding: 7px 15px;
    transition: all linear 0.2s;

    @media screen and (min-width: 1200px) {
      padding: 4.5px 15px;
      &:hover {
        background-color: #4dbeba;
        color: #fff;
        border-color: #4dbeba;
      }
    }
  }
`

export function NavTabs({
  className,
  setExtendableBlockContent,
  isSubscriptionLinkShown,
  addGAEvent,
}: NavTabsProps): React.ReactElement | null {
  const router = useRouter()

  const onSubscribeBtnClick = (e: any) => {
    e.preventDefault()
    addGAEvent({
      hitType: 'event',
      eventCategory: 'nav subscribe',
      eventAction: 'click',
      eventLabel: 'navigation',
    })
    router.push(e.target.href)
  }

  return (
    <SWrapperOuter>
      <SWrapper className={cn('NavTabs', className)}>
        <SDesktopNav>
          {isSubscriptionLinkShown && (
            <SSubscribeButton style={{ display: 'list-item' }} onMouseEnter={() => setExtendableBlockContent('')}>
              <Link passHref href={createLink.forPage('inner-circle')}>
                <a onClick={onSubscribeBtnClick}>Subscribe</a>
              </Link>
            </SSubscribeButton>
          )}
          <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
            <Link passHref href={createLink.forCollection('spooky')}>
              <a>Halloween</a>
            </Link>
          </SNavItem>
          <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
            <Link passHref href={createLink.forCollection('bath-bombs')}>
              <a>Bath bombs</a>
            </Link>
          </SNavItem>
          <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
            <Link passHref href={createLink.forCollection('jewel-candles')}>
              <a>Candles</a>
            </Link>
          </SNavItem>
          <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
            <Link passHref href={createLink.forCollection('body-scrubs')}>
              <a>Body Scrubs</a>
            </Link>
          </SNavItem>
          <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('All')}>
            <Link passHref href={createLink.forCollection('all-products')}>
              <a>All</a>
            </Link>
          </SNavItemExtendable>
          <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Subscription')}>
            <Link passHref href={createLink.forPage('inner-circle')}>
              <a>Subscription</a>
            </Link>
          </SNavItemExtendable>
          <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Rewards')}>
            <Link passHref href={createLink.forPage('rewards-boutique')}>
              <a>Rewards</a>
            </Link>
          </SNavItemExtendable>
          <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
            <Link passHref href={createLink.forPage('vault-appraise')}>
              <a>Vault</a>
            </Link>
          </SNavItem>
        </SDesktopNav>
      </SWrapper>
    </SWrapperOuter>
  )
}
