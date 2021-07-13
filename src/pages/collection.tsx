import React, { useMemo, useState } from 'react'
import collectionPageProps from './resolvers/collectionPageProps'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FullWidthBanner from '@fragrantjewels/gravity-brands.components.full-width-banner'
import CollectionFilters, {
  SelectedFilters,
  SelectedSorting,
} from '@fragrantjewels/gravity-brands.components.collection-filters'
import ProductsList, { Product } from '@fragrantjewels/gravity-brands.components.products-list'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import styled from 'styled-components'
import parseFiltersFromProducts from '@fragrantjewels/gravity-brands.modules.parse-filters-from-products'

type ProductPageProps = {
  collectionProducts: Array<Product> | null
}

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

export default function Collection({ collectionProducts }: ProductPageProps): React.ReactElement {
  const [filter, setFilter] = useState<SelectedFilters | null>(null)
  const [sorting, setSorting] = useState<SelectedSorting | null>(null)

  const filteredProducts = useMemo(() => {
    if (!collectionProducts) return []

    const sortedProducts = collectionProducts.sort((a, b) => {
      if (sorting === SelectedSorting.LOW_TO_HIGH) return a.variants[0].actual_price - b.variants[0].actual_price
      if (sorting === SelectedSorting.HIGH_TO_LOW) return b.variants[0].actual_price - a.variants[0].actual_price
      if (sorting === SelectedSorting.NEW)
        return (
          Date.parse(b.published_at_shop || b.created_at_shop) - Date.parse(a.published_at_shop || a.created_at_shop)
        )

      return 0
    })

    if (!filter || !filter.sizes.length) return sortedProducts

    return sortedProducts.filter((product) =>
      product.variants.some((variant) => variant.available && filter.sizes.includes(variant.title))
    )
  }, [collectionProducts, filter, sorting])

  return (
    <MainPageLayout>
      <div className="app-re-wrapper" id="app-wrapper">
        <div className="app-re-content" id="app-content">
          <main className="app-h-main">
            <FullWidthBanner
              title="Bath Bombs"
              text="It’s more than amazing scents and stunning colors — essential oils and natural minerals  will leave your skin feeling so soft, you’ll be feel like silk."
              imageUrl="https://lorempixel.com/1440/700/abstract/7/"
              textColor="#fff"
              position="left"
            />
            <div style={{ margin: '5em 0' }}>
              <SFiltersSection>
                <CollectionFilters
                  onChangeFilter={setFilter}
                  onChangeSorting={setSorting}
                  filters={parseFiltersFromProducts(collectionProducts)}
                />
              </SFiltersSection>
              <ProductsList products={filteredProducts} />
            </div>
          </main>
        </div>
      </div>
    </MainPageLayout>
  )
}

export const getServerSideProps = collectionPageProps()
