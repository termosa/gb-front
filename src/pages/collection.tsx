import builderConfig from 'config/builder'
import { builder, Builder } from '@builder.io/react'
import { MainPageLayout } from '@fragrantjewels/gravity-brands.components.main-page-layout/main-page-layout'
import BuilderIoPage from './BuilderIoPage'
import React from 'react'
import builderCollectionProps from './resolvers/builderCollectionProps'
import { FullWidthBanner } from '@fragrantjewels/gravity-brands.components.full-width-banner/full-width-banner'
import Collection from '@containers/Collection'

builder.init(builderConfig.apiKey)

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

const CollectionPage = ({ content }) => {
  return (
    <MainPageLayout>
      <BuilderIoPage content={content} modelName={'collection'} />
    </MainPageLayout>
  )
}

export const getStaticProps = builderCollectionProps()

export default CollectionPage
