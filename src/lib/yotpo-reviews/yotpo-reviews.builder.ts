import { Builder } from '@builder.io/react'
import YotpoReviews from '.'

export default function registerYotpoReviews(): void {
  Builder.registerComponent(YotpoReviews, {
    name: 'Yotpo reviews',
    inputs: [
      {
        name: 'productId',
        type: 'number',
        defaultValue: '',
      },
      {
        name: 'productTitle',
        type: 'string',
        defaultValue: '',
      },
      {
        name: 'productUrl',
        type: 'string',
        defaultValue: '',
      },
      {
        name: 'productImageUrl',
        type: 'string',
        defaultValue: '',
      },
    ],
  })
}
