import React from 'react'
import MainPageLayout from '../../lib/main-page-layout'
import Collection from '../../containers/Collection'
import CollectionContext from '../../modules/collection-context'
import collectionPageProps, { CollectionPageProps } from '../../resolvers/collectionPageProps'

export default function CollectionPage({ collection }: CollectionPageProps): React.ReactElement {
  if (!collection) throw new Error('Collection not found')

  return (
    <CollectionContext.Provider value={collection}>
      <MainPageLayout>
        <Collection />
      </MainPageLayout>
    </CollectionContext.Provider>
  )
}

export const getServerSideProps = collectionPageProps()
