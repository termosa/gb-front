import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Button from '../../lib/button'
import Image from '../../lib/image'

const SCol = styled.div`
  @media (min-width: 768px) {
    margin: 0;
  }
`

const SLayout = styled.div`
  position: relative;
  max-width: 463px;
  margin: 0 auto 30px;
  @media (min-width: 768px) {
    padding: 0;
  }
`

const SLayoutImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  max-width: 463px;
  margin: 0 auto;
`

const SContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 40px;
  margin: 15px;
  left: 0;
  right: 0;
  font: 16px/24px 'Montserrat', sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.75);
  padding: 26px 15px 30px;

  @media (min-width: 768px) {
    bottom: 36px;
  }

  @media (min-width: 992px) {
    margin: 15px 32px;
    padding: 25px 15px 30px;
  }
`

const STitle = styled.span`
  display: block;
  margin: 0 0 13px;
  position: relative;
  font: 700 32px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 0 17px;
  }
`

const SSubTitle = styled.div`
  margin: 0 0 15px;
`

const SButtonWrapper = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
`

const SLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export type CategoryShopCardProps = {
  className?: ClassName
  style?: React.CSSProperties
  image: string
  title: string
  subTitle: string
  link: string
}

export function CategoryShopCard({
  className,
  style,
  image,
  title,
  subTitle,
  link,
}: CategoryShopCardProps): React.ReactElement {
  return (
    <SCol>
      <SLayout className={cn(className)} style={style}>
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
