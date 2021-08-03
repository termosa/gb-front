import { Builder, BuilderComponent } from '@builder.io/react'
import React from 'react'
import 'src/builder/register-components'
import FullWidthBanner from '@fragrantjewels/gravity-brands.components.full-width-banner'
import Collection from '@containers/Collection'
import CollectionContext from '@fragrantjewels/gravity-brands.modules.collection-context'
import collectionPageProps, { CollectionPageProps } from 'src/resolvers/collectionPageProps'

Builder.registerComponent(FullWidthBanner, {
  name: 'Full Width Banner',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Bath Bombs',
    },
    {
      name: 'text',
      type: 'string',
      defaultValue:
        'It’s more than amazing scents and stunning colors — essential oils and natural minerals  will leave your skin feeling so soft, you’ll be feel like silk.',
    },
    {
      name: 'imageUrl',
      type: 'file',
      defaultValue: 'https://lorempixel.com/1440/700/abstract/7/',
    },
    {
      name: 'textColor',
      type: 'string',
      defaultValue: '#fff',
    },
    {
      name: 'position',
      type: 'string',
      defaultValue: 'left',
    },
  ],
})

Builder.registerComponent(Collection, {
  name: 'Collection',
})

export default function CollectionPage({ collection, builderContent }: CollectionPageProps): React.ReactElement {
  if (!collection) {
    console.error('Collection is missing')
    return <h1>404 Not found</h1>
  }

  if (!builderContent) {
    console.error('Builder content is missing')
    return <h1>404 Not found</h1>
  }

  return (
    <CollectionContext.Provider value={collection}>
      <BuilderComponent model="Product" content={builderContent} />
    </CollectionContext.Provider>
  )
}

export const getServerSideProps = collectionPageProps()
