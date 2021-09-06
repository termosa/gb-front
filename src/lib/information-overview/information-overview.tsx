import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import InformationCard from '../../components/information-card'
import { Slider } from '../slider'
import { useScreenSize } from '../use-screen-size'

export type { InformationCard }

const SWrapper = styled.section`
  text-align: center;
  max-width: 1020px;
  padding: 0;
  margin: 50px auto 0;

  @media (min-width: 768px) {
    margin: 76px auto 0;
    padding: 0 30px;
  }
`

const STitleContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
`

const STitle = styled.h2`
  font: 700 40px/1.1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 auto 15px;
  padding: 0 30px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 auto 24px;
    padding: 0;
  }
`

const SCardsWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`

export type InformationOverviewProps = {
  className?: ClassName
  style?: React.CSSProperties
  title: string
  cards: InformationCard[]
}

export function InformationOverview({ className, style, title, cards }: InformationOverviewProps): React.ReactElement {
  const useScreen = useScreenSize()

  return (
    <SWrapper className={cn(className)} style={style}>
      <STitleContainer>
        <STitle>{title}</STitle>
      </STitleContainer>
      <SCardsWrapper>
        {useScreen.greaterThenLarge ? (
          cards.map((card) => <InformationCard key={card.image + card.title} card={card} />)
        ) : (
          <Slider infinite arrows>
            {cards.map((card) => (
              <InformationCard key={card.image + card.title} card={card} />
            ))}
          </Slider>
        )}
      </SCardsWrapper>
    </SWrapper>
  )
}
