import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '../../lib/button'

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
  @media (min-width: 768px) {
    margin: 0 16px;
  }
`

const SLayoutImage = styled.img`
  display: block;
  margin-bottom: 0;
  border-style: none;
  object-fit: cover;

  @media (max-width: 350px) {
    max-width: 245px;
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
  text-decoration: none;
  color: inherit;
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
        <Button backColor={'#000'} frontColor={'#fff'}>
          <SButtonLink href={buttonLink}>{buttonText}</SButtonLink>
        </Button>
      </SButtonWrapper>
    </SLayout>
  )
}
