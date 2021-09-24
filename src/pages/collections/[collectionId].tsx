import React from 'react'
import MainPageLayout from '../../lib/main-page-layout'
import Collection from '../../containers/Collection'
import CollectionContext from '../../modules/collection-context'
import collectionPageProps, { CollectionPageProps } from '../../resolvers/collectionPageProps'
import RemotePage from '../../lib/remote-page'
import Head from 'next/head'

export default function CollectionPage({ collection, collectionId }: CollectionPageProps): React.ReactElement {
  if (!collection) return <RemotePage url={`//www.fragrantjewels.com/collections/${collectionId}`} />

  return (
    <>
      <Head>
        <title>{collection.title} - Fragrant Jewels</title>
      </Head>
      <CollectionContext.Provider value={collection}>
        <MainPageLayout>
          <Collection />
        </MainPageLayout>
      </CollectionContext.Provider>
    </>
  )
}

export const getServerSideProps = collectionPageProps()
