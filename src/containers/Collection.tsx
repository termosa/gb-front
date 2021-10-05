import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import CollectionFilters, { CollectionProductsFilter, SelectedSorting } from '../components/collection-filters'
import ProductsList from '../components/products-list'
import SiteSection from '../components/site-section'
import parseFiltersFromProducts from '../modules/parse-filters-from-products'
import filterCollectionProducts from '../modules/filter-collection-products'
import CollectionContext from '../modules/collection-context'
import CollectionBanner from '../lib/collection-banner'
import alooma from '../lib/alooma'
import window from '../lib/window'
import { Product } from '../modules/normalize-product'
import createLink from '../lib/create-link'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 32px;

  @media (max-width: 1033px) {
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
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

const formatToHashFilters = (filters: string[], type: string) =>
  filters.map((filter) => {
    if (type === 'sizes') {
      return filter
    }

    const slicedType = type.slice(0, -1)
    const uppercasedType = slicedType.charAt(0).toUpperCase() + slicedType.slice(1)

    return (type === 'colors' ? 'Metal%20' : '') + uppercasedType + ':%20' + filter
  })

const Collection = (): null | React.ReactElement => {
  const router = useRouter()
  const collection = useContext(CollectionContext)

  const hashObject: HashObject | undefined = window?.location.hash
    .slice(1)
    .split('&')
    .reduce<{ [key: string]: undefined | string }>((res, item) => {
      const parts = item.split('=')
      res[parts[0] + (parts[0] === 'sortF' ? '' : 's')] = parts[1]
      return res
    }, {})

  const [filter, setFilter] = useState<CollectionProductsFilter>({
    fragrances: hashObject?.fragrances?.replaceAll('Fragrance:%20', '').replaceAll('%20', ' ').split(',') || [],
    colors: hashObject?.colors?.replaceAll('Metal%20Color:%20', '').replaceAll('%20', ' ').split(',') || [],
    materials: hashObject?.materials?.replaceAll('Material:%20', '').replaceAll('%20', ' ').split(',') || [],
    sizes: hashObject?.sizes?.replaceAll('%20', ' ').split(',') || [],
  })
  const [sorting, setSorting] = useState<SelectedSorting>((hashObject?.sortF as SelectedSorting) || SelectedSorting.NEW)

  const updateHash = (filter: CollectionProductsFilter, sorting: SelectedSorting) => {
    if (!window) return
    const formattedHash = Object.entries(filter)
      .reduce<Array<string>>(
        (all, [type, filters]) => {
          return filters?.length
            ? all.concat(`${encodeURIComponent(type.slice(0, -1))}=${formatToHashFilters(filters, type).join(',')}`)
            : all
        },
        ['']
      )
      .filter(Boolean)
    formattedHash.push(`sortF=${encodeURIComponent(sorting)}`)

    window.location.hash = formattedHash.join('&')
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
          filteredProducts={filteredProducts}
        />
      </SFiltersSection>
      <ProductsList
        products={filteredProducts}
        onSelectProduct={(product) => {
          alooma('filters_state', {
            product_page_clicked: createLink.forProduct(product.handle),
            product_title: product.title,
            filters: Object.entries(filter || {}).reduce(
              (filters, [group, value]) =>
                value && value.length ? Object.assign(filters, { [group.slice(0, -1)]: value }) : filters, // TODO: Stop slicing
              {}
            ),
          })
          router.push(createLink.forProduct(product.handle))
        }}
      />
    </div>
  )
}

export default Collection
