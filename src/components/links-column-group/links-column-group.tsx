import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { LinksColumnGroupArrow } from './links-column-group-arrow'

export type LinkType =
  | { name: string; href: string; onClick?: undefined }
  | { name: string; href?: string; onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }

export type LinksColumnGroupProps = {
  className?: ClassName
  title: string
  links: Array<LinkType>
  mobile?: boolean
}

const name = 'LinksColumnGroup'

const Group = styled.div<{ mobile?: boolean }>`
  padding: 0;
  color: #fff;
  font: 400 14px/1.5 'Montserrat', sans-serif;
  letter-spacing: 0.05em;

  @media (min-width: 992px) {
    padding: 0 10px;
  }
  ${(props) =>
    props.mobile
      ? css`
          border-bottom: 1px solid #666;
          &:first-of-type {
            border-top: 1px solid #666;
          }
        `
      : null}
`

const Title = styled.div<{ mobile?: boolean }>`
  font: 600 14px/1.5 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 14px 0;
  border-bottom: 1px solid #949494;
  position: relative;

  @media (min-width: 992px) {
    padding: 0 0 13px;
    margin: 0 0 13px;
  }

  ${(props) =>
    props.mobile
      ? css`
          padding: 15px 0;
          margin: 0;
          border: 0;
          cursor: pointer;
        `
      : null}
`

const Arrow = styled(LinksColumnGroupArrow)<{ opened?: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) ${(props) => (props.opened ? 'rotate(180deg)' : '')};
`

const LinksList = styled.div`
  list-style: none;
`

const SLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 5px 0 13px 0;

  @media (max-width: 991px) {
    &:first-child {
      padding: 13px 0 13px 0;
    }
    &:last-child {
      padding: 5px 0 20px 0;
    }
  }

  &:hover {
    text-shadow: -0.06ex 0 #fff, 0.06ex 0 #fff;
  }
`

export function LinksColumnGroup({ className, title, links, mobile }: LinksColumnGroupProps): React.ReactElement {
  const [opened, setOpened] = useState(false)
  const toggleMenu = () => {
    if (mobile) setOpened(!opened)
  }

  return (
    <Group className={cn(name, className)} mobile={mobile}>
      <Title className={cn(`${name}-Title`)} mobile={mobile} onClick={toggleMenu}>
        {title}
        {mobile && <Arrow opened={opened} />}
      </Title>
      {!mobile || opened ? (
        <LinksList className={cn(`${name}-Body`)}>
          {links.map((link) => (
            <Link passHref href={link.href || ''} key={link.name}>
              <SLink onClick={link.onClick}>{link.name}</SLink>
            </Link>
          ))}
        </LinksList>
      ) : null}
    </Group>
  )
}
