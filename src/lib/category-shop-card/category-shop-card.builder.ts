import { Builder } from '@builder.io/react'
import CategoryShopCard from '.'

export default function registerCategoryShopCard(): void {
  Builder.registerComponent(CategoryShopCard, {
    name: 'Category shop card',
    inputs: [
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
  })
}
