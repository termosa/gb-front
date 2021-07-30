import React, { useEffect, useMemo, useState } from 'react'
import CollectionFilters, {
  CollectionProductsFilter,
  SelectedSorting,
} from '@fragrantjewels/gravity-brands.components.collection-filters'
import ProductsList from '@fragrantjewels/gravity-brands.components.products-list'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import styled from 'styled-components'
import parseFiltersFromProducts from '@fragrantjewels/gravity-brands.modules.parse-filters-from-products'
import filterCollectionProducts from '@fragrantjewels/gravity-brands.modules.filter-collection-products'
import { Product } from '@fragrantjewels/gravity-brands.modules.load-product'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import { useRouter } from 'next/router'

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

const loadCollectionProducts = (collectionId: number): Promise<Product[] | null> =>
  loadCollection(collectionId).then(
    (collection) => collection.products,
    () => null
  )

const Collection = () => {
  const router = useRouter()
  const { id: collectionId } = router.query
  const [collectionProducts, setCollectionProducts] = useState<Product[]>([])

  useEffect(() => {
    if (collectionId) {
      loadCollectionProducts(Number(collectionId))
        .then((res) => setCollectionProducts(res))
        .catch((e) => console.log(e))
    }
  }, [collectionId])

  const [filter, setFilter] = useState<CollectionProductsFilter | null>(null)
  const [sorting, setSorting] = useState<SelectedSorting | null>(null)

  const availableFilters = useMemo(() => parseFiltersFromProducts(collectionProducts), [collectionProducts])

  const filteredProducts = useMemo(() => {
    if (!collectionProducts) return []

    const sortedProducts = collectionProducts.sort((a, b) => {
      if (sorting === SelectedSorting.LOW_TO_HIGH) return a.variants[0].actual_price - b.variants[0].actual_price
      if (sorting === SelectedSorting.HIGH_TO_LOW) return b.variants[0].actual_price - a.variants[0].actual_price
      if (sorting === SelectedSorting.NEW) return Date.parse(b.published_at_shop) - Date.parse(a.published_at_shop)
      return 0
    })

    if (!filter) return sortedProducts

    return filterCollectionProducts(sortedProducts, filter)
  }, [collectionProducts, filter, sorting])

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
