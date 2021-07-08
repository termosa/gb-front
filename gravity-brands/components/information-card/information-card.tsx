import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type InformationCardProps = {
  className?: ClassName
  title: string
  description: string
  image: string
}

const SCardWrapper = styled.div`
  max-width: 300px;
  text-align: center;
  margin: 0 16px 40px;
`

const SCardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 17px;
`

const SCardTitle = styled.div`
  margin: 0 0 15px;
  padding: 0 0 12px;
  text-align: center;
  position: relative;
  font: 700 32px/1.3 'Cormorant Garamond', serif;
  white-space: nowrap;
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
`

const SCardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 10px;
  word-wrap: break-word;
`

export function InformationCard({
  className,
  description,
  image,
  title,
}: InformationCardProps): React.ReactElement | null {
  return (
    <SCardWrapper className={cn('InformationCard', className)}>
      <SCardImage src={image} />
      <SCardTitle>{title}</SCardTitle>
      <SCardDescription>{description}</SCardDescription>
    </SCardWrapper>
  )
}
