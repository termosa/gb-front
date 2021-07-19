import React from 'react'
import Button from '@fragrantjewels/gravity-brands.components.button'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface CategoryShopCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  image: string
  title: string
  subTitle: string
  link: string
}

const SCol = styled.div`
  @media (min-width: 768px) {
    width: 46%;
    margin: 0 16px;
  }
`

const SLayout = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 auto;
  padding: 16px 0;
  @media (min-width: 768px) {
    padding: 0;
  }
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
  bottom: 24px;
  margin: 7%;
  left: 0;
  font: 16px/24px 'Montserrat', sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.75);
  padding: 15px 15px 30px;
`

const STitle = styled.span`
  display: block;
  margin: 0 0 10px;
  @media (min-width: 768px) {
    margin: 0 0 13px;
  }
  position: relative;
  font: 700 32px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;
`

const SSubTitle = styled.div`
  margin: 0 0 15px;
`

const SButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
`

const SLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export function CategoryShopCard({
  className,
  image,
  title,
  subTitle,
  link,
}: CategoryShopCardProps): React.ReactElement | null {
  return (
    <SCol>
      <SLayout className={cn('CategoryShopCard', className)}>
        <SLayoutImage src={image} />
        <SContent>
          <STitle>{title}</STitle>
          <SSubTitle>{subTitle}</SSubTitle>
          <SButtonWrapper>
            <Button backColor={'#000'} frontColor={'#fff'} width={'171px'}>
              <SLink href={link}>SHOP NOW</SLink>
            </Button>
          </SButtonWrapper>
        </SContent>
      </SLayout>
    </SCol>
  )
}
