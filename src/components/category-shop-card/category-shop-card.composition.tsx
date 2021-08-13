import React from 'react'
import { CategoryShopCard } from './category-shop-card'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicCategoryShopCard = (): React.ReactElement => (
  <PresentationCanvas>
    <CategoryShopCard
      title="Shop card title"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://i.ibb.co/QFSL0Xd/Background.jpg"
      link="'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'"
    />
  </PresentationCanvas>
)
