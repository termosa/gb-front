import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import InformationCard from '../../components/information-card'
import CategoryShopCard, { CategoryShopCardProps } from '../category-shop-card'

export type { InformationCard }

export type CategoryShopCardsOverviewProps = {
  className?: ClassName
  leftCard: CategoryShopCardProps
  rightCard: CategoryShopCardProps
}

const SWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  max-width: 1020px;
  padding: 0;
  margin: 50px auto 0;

  @media (min-width: 1200px) {
    flex-direction: initial;
    margin: 76px auto 0;
    padding: 0 30px;
  }
`

export function CategoryShopCardsOverview({
  className,
  leftCard,
  rightCard,
}: CategoryShopCardsOverviewProps): React.ReactElement {
  return (
    <SWrapper className={cn(className)}>
      <CategoryShopCard {...leftCard} />
      <CategoryShopCard {...rightCard} />
    </SWrapper>
  )
}
