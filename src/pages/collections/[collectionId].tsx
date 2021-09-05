import React from 'react'
import Frame from 'src/lib/frame'
import MainPageLayout from '../../lib/main-page-layout'
import FullWidthBanner from '../../components/full-width-banner'
import Collection from '../../containers/Collection'
import CollectionContext from '../../modules/collection-context'
import collectionPageProps, { CollectionPageProps } from '../../resolvers/collectionPageProps'

export default function CollectionPage({ collection }: CollectionPageProps): React.ReactElement {
  if (!collection) throw new Error('Collection not found')

  return (
    <CollectionContext.Provider value={collection}>
      <Frame
        frames={{
          component: MainPageLayout,
          children: [
            { component: Collection },
            {
              component: FullWidthBanner,
              props: { title: 'Some title' },
            },
          ],
        }}
      />
      }
    </CollectionContext.Provider>
  )
}

export const getServerSideProps = collectionPageProps()
