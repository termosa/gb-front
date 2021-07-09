import React from 'react'
import { CollectionFilters } from './collection-filters'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicCollectionFilters = (): React.ReactElement => (
  <PresentationCanvas withoutPaddings>
    <CollectionFilters />
  </PresentationCanvas>
)
