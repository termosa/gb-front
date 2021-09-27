import React from 'react'
import { render } from '@testing-library/react'
import FilterPart from '.'

describe('<FilterPart>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(
      <FilterPart
        itemsArray={[
          { name: 'Floral Woods', amount: 16 },
          { name: 'Woodsy', amount: 3 },
          { name: 'Spicy/ Smoky', amount: 9 },
        ]}
        filterGroup="fragrances"
        selectedFilters={{ fragrances: [], materials: [], sizes: [], colors: [] }}
      >
        Fragrance
      </FilterPart>
    )
    const rendered = getByText('Woodsy')
    expect(rendered).toBeTruthy()
  })
})
