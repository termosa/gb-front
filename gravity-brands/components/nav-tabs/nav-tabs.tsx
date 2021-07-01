import React, { Dispatch, SetStateAction } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import { ExtendableBlockContentType } from '@fragrantjewels/gravity-brands.components.header'
import styled from 'styled-components'

export type NavTabsProps = {
  className?: ClassName
  setExtendableBlockContent: Dispatch<SetStateAction<ExtendableBlockContentType>>
}

const SWrapper = styled.div`
  padding-bottom: 11px;

  @media (max-width: 1199px) {
    padding: 0;
    margin: 0 -7.5px;
  }

  @media (max-width: 991px) {
    background-color: #f5f5f5;
  }
`

const SDesktopNav = styled.ul`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  list-style: none;
  font-size: 1em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 15px;
  margin: 0 -10px;
  @media (max-width: 1199px) {
    padding: 10px 0;
    font-size: 0.74em;
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
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }

  @media (min-width: 1200px) {
    font-size: 0.74em;
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
  position: relative;
  padding-right: 13px;

  & > a {
    display: flex;
    align-items: center;
  }
  & > a:after {
    content: '';
    position: absolute;
    right: 0;
    top: 1px;
    font-size: 11px;
    display: none;
    -webkit-transition: all ease-out 0.15s;
    transition: all ease-out 0.15s;
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

const SSubscribeButton = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  display: none;
  margin-left: 25px;
  @media (min-width: 1200px) {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  & > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background-color: #ee67a0;
    color: #fff;
    border-radius: 2em;
    border: 1px solid #ee67a0;
    padding: 0.7em 1.6em;
    font-size: 11px;
    letter-spacing: 0.1em;
    -webkit-transition: all linear 0.2s;
    transition: all linear 0.2s;

    @media screen and (min-width: 1200px) {
      &:hover {
        background-color: #f53e88;
        color: #fff;
        border-color: #f53e88;
      }
    }
  }
`

export function NavTabs({ className, setExtendableBlockContent }: NavTabsProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('NavTabs', className)}>
      <SDesktopNav>
        <SSubscribeButton style={{ display: 'list-item' }}>
          <a href="">Subscribe</a>
        </SSubscribeButton>
        <SNavItem>
          <a href="">Spring</a>
        </SNavItem>
        <SNavItem>
          <a href="">Bath bombs</a>
        </SNavItem>
        <SNavItem>
          <a href="">Candles</a>
        </SNavItem>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('All')}>
          <a href="">All</a>
        </SNavItemExtendable>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Subscription')}>
          <a href="">Subscription</a>
        </SNavItemExtendable>
        <SNavItemExtendable onMouseEnter={() => setExtendableBlockContent('Rewards')}>
          <a href="">Rewards</a>
        </SNavItemExtendable>
        <SNavItem>
          <a href="">Vault</a>
        </SNavItem>
      </SDesktopNav>
    </SWrapper>
  )
}
