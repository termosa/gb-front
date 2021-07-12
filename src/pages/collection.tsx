import React, { useState } from 'react'
import collectionPageProps from './resolvers/collectionPageProps'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FullWidthBanner from '@fragrantjewels/gravity-brands.components.full-width-banner'
import CollectionFilters, { Filter } from '../../gravity-brands/components/collection-filters'
import ProductsList, { Product as ProductType } from '@fragrantjewels/gravity-brands.components.products-list'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import styled from 'styled-components'

type ProductPageProps = {
  collectionProducts: Array<ProductType> | null
}

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

export default function Collection({ collectionProducts }: ProductPageProps): React.ReactElement {
  const getSizeFilters = (collectionProducts: Array<ProductType> | null) => {
    const sizeFilters: Array<Filter> = []

    collectionProducts &&
      collectionProducts.map((product) =>
        product.variants.map((variant) => {
          if (!variant.available) return

          const existingSize = sizeFilters.find((size) => size.name === variant.title)
          if (existingSize) {
            const existingSizeObject = sizeFilters[sizeFilters.indexOf(existingSize)]
            existingSizeObject.amount = ++existingSizeObject.amount
            return
          }

          sizeFilters.push({
            name: variant.title,
            amount: 1,
          })
        })
      )

    return sizeFilters
  }

  const parseFilterValues = (collectionProducts: Array<ProductType> | null) => ({
    fragrances: [],
    materials: [],
    sizes: getSizeFilters(collectionProducts),
    colors: [],
  })

  const [filteredProducts, setFilteredProducts] = useState<Array<ProductType> | null>([])

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
            {filteredProducts && (
              <div style={{ margin: '5em 0' }}>
                <SFiltersSection>
                  <CollectionFilters
                    onChange={(selectedFilters) => {
                      setFilteredProducts(
                        collectionProducts?.filter(
                          (product) =>
                            product.variants.find((variant) => selectedFilters.sizes.includes(variant.title))?.available
                        ) || null
                      )
                    }}
                    filters={parseFilterValues(collectionProducts)}
                  />
                </SFiltersSection>
                <ProductsList products={filteredProducts.length ? filteredProducts : collectionProducts} />
              </div>
            )}
          </main>
        </div>
      </div>
    </MainPageLayout>
  )
}

export const getServerSideProps = collectionPageProps()
