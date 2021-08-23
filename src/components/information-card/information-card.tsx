import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

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
  max-width: 300px;
  text-align: center;
  margin: 0 0 40px;
`

const SCardImage = styled.img`
  object-fit: cover;
  margin: 0 auto 23px;
  width: 60vw;
  height: 60vw;
  width: 300px;
  height: 300px !important;
  display: block;

  @media (min-width: 768px) {
    width: 28vw;
    height: 28vw;
  }
`

const SCardTitle = styled.div`
  margin: 0 auto 16px;
  padding: 0 0 16px;
  width: 80%;
  text-align: center;
  position: relative;
  font: 700 32px/1 'Cormorant Garamond', serif;
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

  @media (min-width: 992px) {
    width: 100%;
  }
`

const SCardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 10px;
  word-wrap: break-word;
`

export function InformationCard({ className, card }: InformationCardProps): React.ReactElement | null {
  return (
    <SCardWrapper className={cn('InformationCard', className)}>
      <SCardImage src={card.image} />
      <SCardTitle>{card.title}</SCardTitle>
      <SCardDescription>{card.description}</SCardDescription>
    </SCardWrapper>
  )
}