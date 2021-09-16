import React, { Dispatch, SetStateAction } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type NavTabsProps = {
  className?: ClassName
  setExtendableBlockContent: Dispatch<SetStateAction<string>>
}

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
  @media (max-width: 1199px) {
    font-size: 1em;
    padding: 10px 0;
    max-width: 990px;
    min-width: 600px;
    & > li:last-child {
      padding-right: 30px;
    }
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
  margin-left: 25px;
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
        background-color: #000;
        color: #fff;
        border-color: #000;
        //#7a3cb9
      }
    }
  }
`

export function NavTabs({ className, setExtendableBlockContent }: NavTabsProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('NavTabs', className)}>
      <SDesktopNav>
        <SSubscribeButton style={{ display: 'list-item' }} onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/pages/inner-circle">Subscribe</a>
        </SSubscribeButton>
        <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/collections/spooky">Halloween</a>
        </SNavItem>
        <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/collections/bath-bombs">Bath bombs</a>
        </SNavItem>
        <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/collections/jewel-candles">Candles</a>
        </SNavItem>
        <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/collections/body-scrubs">Body Scrubs</a>
        </SNavItem>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('All')}>
          <a href="/collections/all-products">All</a>
        </SNavItemExtendable>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Subscription')}>
          <a href="/pages/inner-circle">Subscription</a>
        </SNavItemExtendable>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Rewards')}>
          <a href="/pages/rewards-boutique">Rewards</a>
        </SNavItemExtendable>
        <SNavItem onMouseEnter={() => setExtendableBlockContent('')}>
          <a href="/pages/vault-appraise">Vault</a>
        </SNavItem>
      </SDesktopNav>
    </SWrapper>
  )
}
