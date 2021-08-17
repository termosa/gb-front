import React from 'react'
import { CollectionFilters } from './collection-filters'
import PresentationCanvas from '../../helpers/presentation-canvas'

const filters = {
  fragrances: [
    {
      name: 'Aquantic',
      amount: 12,
    },
    {
      name: 'Citrus',
      amount: 12,
    },
    {
      name: 'Floral',
      amount: 12,
    },
    {
      name: 'Floral Woods',
      amount: 12,
    },
    {
      name: 'Fresh',
      amount: 12,
    },
    {
      name: 'Fruity',
      amount: 12,
    },
    {
      name: 'Gourmand',
      amount: 12,
    },
    {
      name: 'Green',
      amount: 12,
    },
    {
      name: 'Musky',
      amount: 12,
    },
    {
      name: 'Spicy / Smoky',
      amount: 12,
    },
  ],
  sizes: [
    {
      name: 'Size 5',
      amount: 12,
    },
    {
      name: 'Size 6',
      amount: 12,
    },
    {
      name: 'Size 7',
      amount: 12,
    },
    {
      name: 'Size 8',
      amount: 12,
    },
    {
      name: 'Size 9',
      amount: 12,
    },
    {
      name: 'Size 10',
      amount: 12,
    },
  ],
  materials: [
    {
      name: '18K Gold Plated',
      amount: 12,
    },
    {
      name: '925 Sterling Silver',
      amount: 12,
    },
    {
      name: 'Rhodium Plated',
      amount: 12,
    },
  ],
  colors: [
    {
      name: 'Gold',
      amount: 12,
    },
    {
      name: 'Rose Gold',
      amount: 12,
    },
    {
      name: 'Silver',
      amount: 12,
    },
  ],
}

export const BasicCollectionFilters = (): React.ReactElement => (
  <PresentationCanvas withoutPaddings>
    <CollectionFilters onChangeFilter={console.log} onChangeSorting={console.log} filters={filters} />
  </PresentationCanvas>
)

export const CollectionFiltersWithChildren = (): React.ReactElement => (
  <PresentationCanvas withoutPaddings>
    <CollectionFilters onChangeFilter={console.log} onChangeSorting={console.log} filters={filters}>
      <p>Extra content</p>
    </CollectionFilters>
  </PresentationCanvas>
)
