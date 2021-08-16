import { Builder, BuilderComponent } from '@builder.io/react'
import React from 'react'
import registerComponents from '../../builder/register-components'
import FullWidthBanner from '../../components/full-width-banner'
import Collection from '../../containers/Collection'
import CollectionContext from '../../modules/collection-context'
import collectionPageProps, { CollectionPageProps } from '../../resolvers/collectionPageProps'

registerComponents()

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
  if (!collection) throw new Error('Collection not found')
  if (!builderContent) throw new Error('Builder content is missing')

  return (
    <CollectionContext.Provider value={collection}>
      <BuilderComponent model="Collection" content={builderContent} />
    </CollectionContext.Provider>
  )
}

export const getServerSideProps = collectionPageProps()
