import React from 'react'
import { CategoryShopCard } from './category-shop-card'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicCategoryShopCard = (): React.ReactElement => (
  <PresentationCanvas>
    <CategoryShopCard
      title="Shop card title"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      image="https://i.ibb.co/QFSL0Xd/Background.jpg"
    />
  </PresentationCanvas>
)
