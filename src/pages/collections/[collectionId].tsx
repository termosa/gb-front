import React, { useMemo } from 'react'
import MainPageLayout from '../../lib/main-page-layout'
import Collection from '../../containers/Collection'
import CollectionContext from '../../modules/collection-context'
import collectionPageProps, { CollectionPageProps } from '../../resolvers/collectionPageProps'
import RemotePage from '../../lib/remote-page'
import Head from 'next/head'
import { parse } from 'node-html-parser'

export default function CollectionPage({ collection, collectionId }: CollectionPageProps): React.ReactElement {
  const collectionDescription = useMemo(() => {
    if (!collection) return ''
    return (collection.htmlDescription && parse(collection.htmlDescription).innerText.trim().replace(/\s+/g, ' ')) || ''
  }, [collection])
  if (!collection) return <RemotePage url={`/collections/${collectionId}`} />

  return (
    <>
      <Head>
        <title>{collection.title} - Fragrant Jewels</title>
        <meta name="description" content={collectionDescription.slice(0, 320) || collection.title} />
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
