import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Image from '../../lib/image'

export interface ShopByProductCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  image: string
  buttonText: string
  buttonLink: string
}

const SLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  outline: none;
  margin: 0 auto;
  height: 100%;
`

const SLayoutImage = styled(Image)`
  display: block;
  margin-bottom: 0;
  border-style: none;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`

const SButtonWrapper = styled.div`
  position: absolute;
  min-width: 128px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 44%);
  @media (min-width: 768px) {
    transform: translate(-50%, 50%);
  }
`

const SButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  min-width: 155px;
  height: 55px;
  margin: 0 auto;
  text-transform: uppercase;
  border: 1px solid #000;
  border-radius: 0;
  font: 700 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: #000;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 32px;

  @media (min-width: 992px) {
    min-width: 200px;
  }

  &:hover {
    font-weight: 700;
    background-color: #fff;
    color: #000;
  }
`

export function ShopByProductCard({
  className,
  image,
  buttonText,
  buttonLink,
}: ShopByProductCardProps): React.ReactElement {
  return (
    <SLayout className={cn('ShopByProductCard', className)}>
      <SLayoutImage src={image} />
      <SButtonWrapper>
        <SButtonLink href={buttonLink}>{buttonText}</SButtonLink>
      </SButtonWrapper>
    </SLayout>
  )
}
