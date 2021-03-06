import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Image from '../../lib/image'
import { useScreenSize } from '../../lib/use-screen-size'

export type InformationCardProps = {
  className?: ClassName
  card: InformationCard
}

export type InformationCard = {
  title: string
  description: string
  image: string
}

const SCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const SCardImage = styled(Image)`
  object-fit: contain;
  margin-bottom: 23px;
  display: block;
  width: 232px;
  height: 232px;

  @media (min-width: 375px) {
    width: 287px;
    height: 287px;
  }

  @media (min-width: 414px) {
    width: 326px;
    height: 326px;
  }

  @media (min-width: 450px) {
    width: 356px;
    height: 356px;
  }

  @media (min-width: 768px) {
    width: 230px;
    height: auto;
  }

  @media (min-width: 991px) {
    min-width: 312px;
    height: auto;
  }
`

const SCardTitle = styled.div`
  margin: 0 auto 16px;
  padding: 0 0 16px;
  text-align: center;
  position: relative;
  font: 700 32px/1 'Cormorant Garamond', serif;
  white-space: nowrap;
  letter-spacing: -0.02em;
  font-variant-numeric: lining-nums;

  &:after {
    content: '';
    background-color: #9059c8;
    height: 1px;
    width: 52px;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 992px) {
    width: 100%;
    font-size: 32px;
  }
`

const SCardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 24px;
  word-wrap: break-word;
`

export function InformationCard({ className, card }: InformationCardProps): React.ReactElement | null {
  const screenSize = useScreenSize()
  return (
    <SCardWrapper className={cn('InformationCard', className)}>
      <SCardImage
        src={card.image}
        width={screenSize.greaterThanMedium ? 312 : 232}
        height={screenSize.greaterThanMedium ? 312 : 232}
      />
      <SCardTitle>{card.title}</SCardTitle>
      <SCardDescription>{card.description}</SCardDescription>
    </SCardWrapper>
  )
}
