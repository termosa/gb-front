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
import alooma from '../lib/alooma'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 32px;

  @media (max-width: 1060px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
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
      <CollectionBanner handle={collection.handle} />
      <SFiltersSection>
        <CollectionFilters
          onChangeFilter={setFilter}
          onChangeSorting={setSorting}
          filters={availableFilters}
          initialSorting={sorting}
        />
      </SFiltersSection>
      <ProductsList
        products={filteredProducts}
        onSelectProduct={(product) => {
          alooma('filters_state', {
            product_page_clicked: `https://www.fragrantjewels.com/products/${product.handle}`,
            product_title: product.title,
            filters: Object.entries(filter || {}).reduce(
              (filters, [group, value]) =>
                value && value.length ? Object.assign(filters, { [group.slice(0, -1)]: value }) : filters, // TODO: Stop slicing
              {}
            ),
          })
          navigate(`/products/${product.handle}`)
        }}
      />
    </div>
  )
}

export default Collection
