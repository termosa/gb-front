import React, { useContext, useEffect, useMemo, useState } from 'react'
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
import window from '../lib/window'
import { Product } from '../modules/normalize-product'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 32px;

  @media (max-width: 1033px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

interface HashObject {
  sizes?: string
  fragrances?: string
  materials?: string
  colors?: string
  sortF?: string
}

const Collection = (): null | React.ReactElement => {
  const collection = useContext(CollectionContext)

  const hashObject: HashObject | undefined = window?.location.hash
    .slice(1)
    .split('&')
    .reduce((res, item) => {
      const parts = item.split('=')
      res[parts[0]] = parts[1]
      return res
    }, {})

  const [filter, setFilter] = useState<CollectionProductsFilter>({
    fragrances: hashObject?.fragrances?.replaceAll('%20', ' ').split(',') || [],
    colors: hashObject?.colors?.replaceAll('%20', ' ').split(',') || [],
    materials: hashObject?.materials?.replaceAll('%20', ' ').split(',') || [],
    sizes: hashObject?.sizes?.replaceAll('%20', ' ').split(',') || [],
  })
  const [sorting, setSorting] = useState<SelectedSorting>((hashObject?.sortF as SelectedSorting) || SelectedSorting.NEW)

  const updateHash = (filter: CollectionProductsFilter, sorting: SelectedSorting) => {
    if (!window) return
    const sortingHash = 'sortF=' + sorting
    let filtersHash = ''

    for (const filterType in filter) {
      if (!filter[filterType].length) continue
      filtersHash = filtersHash + filterType + '=' + filter[filterType].join(',') + '&'
    }

    window.location.hash = filtersHash + sortingHash
  }

  const availableFilters = useMemo(() => parseFiltersFromProducts(collection?.products), [collection?.products])

  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([])
  useEffect(() => {
    if (!collection?.products) {
      setFilteredProducts([])
      return
    }

    const sortedProducts = collection.products.sort((a, b) => {
      if (sorting === SelectedSorting.LOW_TO_HIGH) return a.variants[0].actual_price - b.variants[0].actual_price
      if (sorting === SelectedSorting.HIGH_TO_LOW) return b.variants[0].actual_price - a.variants[0].actual_price
      if (sorting === SelectedSorting.NEW) return Date.parse(b.published_at_shop) - Date.parse(a.published_at_shop)
      return 0
    })

    if (!filter) {
      setFilteredProducts(sortedProducts)
      return
    }

    setFilteredProducts(filterCollectionProducts(sortedProducts, filter))
  }, [collection, filter, sorting])

  if (!collection) return null

  return (
    <div>
      <CollectionBanner handle={collection.handle} />
      <SFiltersSection>
        <CollectionFilters
          onChangeFilter={(newFilter) => {
            updateHash(newFilter, sorting)
            setFilter(newFilter)
          }}
          onChangeSorting={(newSorting) => {
            updateHash(filter, newSorting)
            setSorting(newSorting)
          }}
          filters={availableFilters}
          initialSorting={sorting}
          initialFilter={filter}
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
