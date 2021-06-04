import React from 'react'
import Button from '@fragrantjewels/gravity-brands.components.button'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface ShopByProductCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  image: string
}

const SLayout = styled.div`
  position: relative;
  margin: 0;
  outline: none;
  max-width: 400px;
`

const SLayoutImage = styled.img`
  width: 100%;
  margin-bottom: 0;
  height: auto;
  display: block;
  border-style: none;
`

const SButtonWrapper = styled.div`
  position: absolute;
  min-width: 128px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`

export function ShopByProductCard({ className, image }: ShopByProductCardProps): React.ReactElement {
  return (
    <SLayout className={cn('ShopByProductCard', className)}>
      <SLayoutImage src={image} />
      <SButtonWrapper>
        <Button backColor="#000" frontColor="#fff">
          SHOP NOW
        </Button>
      </SButtonWrapper>
    </SLayout>
  )
}