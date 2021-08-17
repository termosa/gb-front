import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import InformationCard from '../../components/information-card'
import { CategoryShopCard, CategoryShopCardProps } from '../category-shop-card'

export type { InformationCard }

export type CategoryShopCardsOverviewProps = {
  className?: ClassName
  leftCard: CategoryShopCardProps
  rightCard: CategoryShopCardProps
}

const SWrapper = styled.section`
  display: flex;
  justify-content: space-around;
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
