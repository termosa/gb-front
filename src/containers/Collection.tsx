import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import CollectionFilters, { CollectionProductsFilter, SelectedSorting } from '../components/collection-filters'
import ProductsList from '../components/products-list'
import SiteSection from '../components/site-section'
import parseFiltersFromProducts from '../modules/parse-filters-from-products'
import filterCollectionProducts from '../modules/filter-collection-products'
import CollectionContext from '../modules/collection-context'
import navigate from '../lib/navigate'
import CollectionBanner from '../lib/collection-banner'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

const Collection = (): null | React.ReactElement => {
  const collection = useContext(CollectionContext)
  const [filter, setFilter] = useState<CollectionProductsFilter | null>(null)
  const [sorting, setSorting] = useState<SelectedSorting>(SelectedSorting.NEW)

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
    <div>
      <CollectionBanner id={collection?.handle} />
      <SFiltersSection>
        <CollectionFilters
          onChangeFilter={setFilter}
          onChangeSorting={setSorting}
          filters={availableFilters}
          initialSorting={sorting}
        />
      </SFiltersSection>
      <ProductsList products={filteredProducts} onSelectProduct={(handle) => navigate(`/products/${handle}`)} />
    </div>
  )
}

export default Collection
