import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import InformationCard from '../../components/information-card'
import CategoryShopCard, { CategoryShopCardProps } from '../category-shop-card'
import createLink from '../create-link'

export type { InformationCard }

export type CategoryShopCardsOverviewProps = {
  className?: ClassName
  leftCard: CategoryShopCardProps
  rightCard: CategoryShopCardProps
}

const SWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 990px;
  padding: 0;
  margin: 0 auto 19px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 30px auto;
    padding: 0 15px;
    gap: 20px;
  }

  @media (min-width: 992px) {
    gap: 30px;
    margin: 92px auto;
    padding: 0 15px;
  }
`

const SBlockLink = styled.a`
  color: #000;
`

export function CategoryShopCardsOverview({
  className,
  leftCard,
  rightCard,
}: CategoryShopCardsOverviewProps): React.ReactElement {
  return (
    <SWrapper className={cn(className)}>
      <SBlockLink href={createLink.forPage('time-travel-series')}>
        <CategoryShopCard {...leftCard} />
      </SBlockLink>
      <SBlockLink href={createLink.forPage('charity-collections')}>
        <CategoryShopCard {...rightCard} />
      </SBlockLink>
    </SWrapper>
  )
}
