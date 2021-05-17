import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
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
  padding: 0 10px;
  color: #fff;
  font: 12px/1.3 'Montserrat', sans-serif;

  ${(props) =>
    props.mobile
      ? css`
          border-bottom: 1px solid #666;
          &:first-child {
            border-top: 1px solid #666;
          }
        `
      : null}
`

const Title = styled.div<{ mobile?: boolean }>`
  text-transform: uppercase;
  padding: 0 0 17px;
  margin: 0 0 13px;
  border-bottom: 1px solid #949494;
  position: relative;

  ${(props) =>
    props.mobile
      ? css`
          padding: 16px 0;
          margin: 0;
          border: 0;
          cursor: pointer;
        `
      : null}
`

const Arrow = styled(LinksColumnGroupArrow)<{ opened?: boolean }>`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%) ${(props) => (props.opened ? 'rotate(180deg)' : '')};
`

const LinksList = styled.div`
  padding: 10px 0;
  list-style: none;
`

const Link = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 5px 0;

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
        <Arrow opened={opened} />
      </Title>
      {!mobile || opened ? (
        <LinksList className={cn(`${name}-Body`)}>
          {links.map((link) => (
            <Link key={link.name} href={link.href || ''} onClick={link.onClick}>
              {link.name}
            </Link>
          ))}
        </LinksList>
      ) : null}
    </Group>
  )
}
