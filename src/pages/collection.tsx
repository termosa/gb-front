import React from 'react'
import collectionPageProps from './resolvers/collectionPageProps'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FullWidthBanner from '@fragrantjewels/gravity-brands.components.full-width-banner'
import CollectionFilters from '@fragrantjewels/gravity-brands.components.collection-filters'
import ProductsList, { Product as ProductType } from '@fragrantjewels/gravity-brands.components.products-list'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import collectionFilters from 'src/settings/collectionFilters'
import styled from 'styled-components'

type ProductPageProps = {
  collectionProducts: Array<ProductType> | null
}

const SFiltersSection = styled(SiteSection)`
  margin-bottom: 2em;
`

export default function Collection({ collectionProducts }: ProductPageProps): React.ReactElement {
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
            {collectionProducts && (
              <div style={{ margin: '5em 0' }}>
                <SFiltersSection>
                  <CollectionFilters filters={collectionFilters} />
                </SFiltersSection>
                <ProductsList products={collectionProducts} />
              </div>
            )}
          </main>
        </div>
      </div>
    </MainPageLayout>
  )
}

export const getServerSideProps = collectionPageProps()
