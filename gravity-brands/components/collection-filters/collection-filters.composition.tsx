import React from 'react'
import { CollectionFilters } from './collection-filters'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicCollectionFilters = (): React.ReactElement => (
  <PresentationCanvas withoutPaddings>
    <CollectionFilters
      onChangeFilter={console.log}
      onChangeSorting={console.log}
      filters={{
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
            gradient: [
              { stopColor: '#D08E17' },
              { offset: 0.02, stopColor: '#D89C29' },
              { offset: 0.06, stopColor: '#E6B248' },
              { offset: 0.101, stopColor: '#F1C460' },
              { offset: 0.145, stopColor: '#F9D072' },
              { offset: 0.193, stopColor: '#FED87C' },
              { offset: 0.251, stopColor: '#FFDE8D' },
              { offset: 0.362, stopColor: '#FFDE93' },
              { offset: 0.54, stopColor: '#F1C875' },
              { offset: 0.744, stopColor: '#D8A549' },
              { offset: 0.808, stopColor: '#BE9030' },
              { offset: 0.898, stopColor: '#99740F' },
            ],
          },
          {
            name: 'Rose Gold',
            amount: 12,
            gradient: [
              { offset: 0.02, stopColor: '#D3A29D' },
              { offset: 0.276, stopColor: '#E1B5AC' },
              { offset: 0.448, stopColor: '#EAC2B8' },
              { offset: 0.661, stopColor: '#BF8A7F' },
              { offset: 0.729, stopColor: '#D7A8A0' },
              { offset: 0.898, stopColor: '#BF9388' },
            ],
          },
          {
            name: 'Silver',
            amount: 12,
            gradient: [
              { stopColor: '#A8AEB6' },
              { offset: 0.02, stopColor: '#BCC1C7' },
              { offset: 0.06, stopColor: '#C3C7CC' },
              { offset: 0.101, stopColor: '#D3D6DA' },
              { offset: 0.145, stopColor: '#EEEFF0' },
              { offset: 0.193, stopColor: '#F8F8F9' },
              { offset: 0.251, stopColor: '#F8F8F9' },
              { offset: 0.362, stopColor: '#F8F8F8' },
              { offset: 0.54, stopColor: '#E4E5E8' },
              { offset: 0.744, stopColor: '#D3D6DA' },
              { offset: 0.808, stopColor: '#C3C7CC' },
              { offset: 0.898, stopColor: '#A8AEB6' },
            ],
          },
        ],
      }}
    />
  </PresentationCanvas>
)
