import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { InformationCard } from '@fragrantjewels/gravity-brands.components.information-card'

export type InformationOverviewProps = {
  className?: string
  titleFirst: string
  titleSecond: string
  cards: InformationCard[]
}

const SWrapper = styled.section`
  text-align: center;
`

const STitle = styled.h2`
  font-size: 32px;
  margin: 0 auto 10px;
  text-align: center;
`

const SCardsWrapper = styled.div`
  padding: 10px 0 38px;
  display: flex;
  justify-content: space-around;
`

export function InformationOverview({
  className,
  titleFirst,
  titleSecond,
  cards,
}: InformationOverviewProps): React.ReactElement {
  return (
    <SWrapper className={cn('InformationOverview', className)}>
      <STitle>
        {titleFirst}
        <br />
        {titleSecond}
      </STitle>
      <SCardsWrapper>
        {cards.map((card) => (
          <InformationCard key={card.image + card.title} card={card} />
        ))}
      </SCardsWrapper>
    </SWrapper>
  )
}
