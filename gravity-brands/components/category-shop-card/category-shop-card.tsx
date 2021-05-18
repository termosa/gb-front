import React from 'react'
import Button from '@fragrantjewels/gravity-brands.components.button'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface CategoryShopCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  image: string
  title: string
  subTitle: string
}

const SLayout = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 auto 40px;
`

const SLayoutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const SContent = styled.div`
  box-sizing: border-box;
  width: 86%;
  position: absolute;
  bottom: 0;
  margin 7%;
  left: 0;
  font: 12px/1.3 'Montserrat', sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.75);
  padding: 15px 15px 35px;
`

const STitle = styled.span`
  font-size: 25px;
  text-align: center;
  position: relative;
  font: 700 28px/1.3 'Cormorant Garamond', serif;
  margin: 0 0 15px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 992px) {
    font-size: 28px;
  }
`

const SSubTitle = styled.div`
  margin: 0 0 10px;
`

const SButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 33%);
  transform: translate(-50%, 33%);
`

export function CategoryShopCard({
  className,
  image,
  title,
  subTitle,
}: CategoryShopCardProps): React.ReactElement | null {
  return (
    <SLayout className={cn('CategoryShopCard', className)}>
      <SLayoutImage src={image} />
      <SContent>
        <STitle>{title}</STitle>
        <SSubTitle>{subTitle}</SSubTitle>
        <SButtonWrapper>
          <Button backColor={'#000'} frontColor={'#fff'}>
            SHOP NOW
          </Button>
        </SButtonWrapper>
      </SContent>
    </SLayout>
  )
}
