import React, { useContext, useMemo, useState } from 'react'
import CollectionFilters, {
  CollectionProductsFilter,
  SelectedSorting,
} from 'gravity-brands/components/collection-filters'
import ProductsList from 'gravity-brands/components/products-list'
import SiteSection from 'gravity-brands/components/site-section'
import styled from 'styled-components'
import parseFiltersFromProducts from 'gravity-brands/modules/parse-filters-from-products'
import filterCollectionProducts from 'gravity-brands/modules/filter-collection-products'
import CollectionContext from 'gravity-brands/modules/collection-context'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

const Collection = (): null | React.ReactElement => {
  const collection = useContext(CollectionContext)

  const [filter, setFilter] = useState<CollectionProductsFilter | null>(null)
  const [sorting, setSorting] = useState<SelectedSorting | null>(null)

  const availableFilters = useMemo(() => parseFiltersFromProducts(collection?.products), [collection?.products])

  const filteredProducts = useMemo(() => {
    if (!collection?.products) return []

    const sortedProducts = collection.products.sort((a, b) => {
      if (sorting === SelectedSorting.LOW_TO_HIGH) return a.variants[0].actual_price - b.variants[0].actual_price
      if (sorting === SelectedSorting.HIGH_TO_LOW) return b.variants[0].actual_price - a.variants[0].actual_price
      if (sorting === SelectedSorting.NEW) return Date.parse(b.published_at_shop) - Date.parse(a.published_at_shop)
      return 0
    })

    if (!filter) return sortedProducts

    return filterCollectionProducts(sortedProducts, filter)
  }, [collection, filter, sorting])

  if (!collection) return null

  return (
    <div style={{ margin: '5em 0' }}>
      <SFiltersSection>
        <CollectionFilters onChangeFilter={setFilter} onChangeSorting={setSorting} filters={availableFilters} />
      </SFiltersSection>
      <ProductsList products={filteredProducts} />
    </div>
  )
}

export default Collection
