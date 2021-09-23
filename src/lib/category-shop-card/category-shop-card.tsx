import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
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
    margin-bottom: 0;
    max-width: 100%;
  }
`

const SLayoutImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  max-width: 463px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 100%;
  }
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
  margin: 0 0 6px;
  position: relative;
  font: 700 32px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 0 8px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  margin: 0 auto;
  text-transform: uppercase;
  border: 1px solid #000;
  border-radius: 0;
  font: 700 16px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: ${(props) => props.backColor || '#fff'};
  color: ${(props) => props.frontColor || '#000'};
  cursor: pointer;
  min-width: 142px;
  padding: 0 14px;

  &:hover {
    font-weight: 700;
    background-color: ${(props) => props.frontColor || '#000'};
    color: ${(props) => props.backColor || '#fff'};
    border-color: #000;
  }

  &[disabled] {
    cursor: auto;
    background-color: ${(props) => props.disabledColor || '#e4e4e4'};
    color: ${(props) => props.frontColor || '#000'};
  }
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
            <SLink href={link} backColor={'#000'} frontColor={'#fff'} width={'171px'}>
              SHOP NOW
            </SLink>
          </SButtonWrapper>
        </SContent>
      </SLayout>
    </SCol>
  )
}
