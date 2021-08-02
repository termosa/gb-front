import React, { useMemo, useState } from 'react'
import collectionPageProps from 'src/resolvers/collectionPageProps'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FullWidthBanner from '@fragrantjewels/gravity-brands.components.full-width-banner'
import CollectionFilters, {
  CollectionProductsFilter,
  SelectedSorting,
} from '@fragrantjewels/gravity-brands.components.collection-filters'
import ProductsList from '@fragrantjewels/gravity-brands.components.products-list'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import styled from 'styled-components'
import parseFiltersFromProducts from '@fragrantjewels/gravity-brands.modules.parse-filters-from-products'
import { Product } from '@fragrantjewels/gravity-brands.modules.load-collection'
import filterCollectionProducts from '@fragrantjewels/gravity-brands.modules.filter-collection-products'

type ProductPageProps = {
  collectionProducts: Array<Product> | null
}

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

export default function Collection({ collectionProducts }: ProductPageProps): React.ReactElement {
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
    <MainPageLayout>
      <FullWidthBanner
        title="Bath Bombs"
        text="It’s more than amazing scents and stunning colors — essential oils and natural minerals  will leave your skin feeling so soft, you’ll be feel like silk."
        imageUrl="https://lorempixel.com/1440/700/abstract/7/"
        textColor="#fff"
        position="left"
      />
      <div style={{ margin: '5em 0' }}>
        <SFiltersSection>
          <CollectionFilters onChangeFilter={setFilter} onChangeSorting={setSorting} filters={availableFilters} />
        </SFiltersSection>
        <ProductsList products={filteredProducts} />
      </div>
    </MainPageLayout>
  )
}

export const getServerSideProps = collectionPageProps()
