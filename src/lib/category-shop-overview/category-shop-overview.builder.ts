import { Builder } from '@builder.io/react'
import { CategoryShopCardsOverview } from '.'

export default function registerCategoryShopOverview(): void {
  Builder.registerComponent(CategoryShopCardsOverview, {
    name: 'Image Block with Content Overlay x2',
    inputs: [
      {
        name: 'leftCard',
        type: 'object',
        subFields: [
          {
            name: 'image',
            type: 'file',
            defaultValue: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          },
          {
            name: 'title',
            type: 'string',
            defaultValue: 'Title',
          },
          {
            name: 'subTitle',
            type: 'string',
            defaultValue: 'Subtitle',
          },
          {
            name: 'link',
            type: 'string',
            defaultValue: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          },
        ],
      },
      {
        name: 'rightCard',
        type: 'object',
        subFields: [
          {
            name: 'image',
            type: 'file',
            defaultValue: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          },
          {
            name: 'title',
            type: 'string',
            defaultValue: 'Title',
          },
          {
            name: 'subTitle',
            type: 'string',
            defaultValue: 'Subtitle',
          },
          {
            name: 'link',
            type: 'string',
            defaultValue: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          },
        ],
      },
    ],
  })
}
