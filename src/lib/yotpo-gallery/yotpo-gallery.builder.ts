import { Builder } from '@builder.io/react'
import YotpoGallery from '.'

export default function registerYotpoGallery(): void {
  Builder.registerComponent(YotpoGallery, {
    name: 'Yotpo gallery',
    inputs: [
      {
        name: 'galleryId',
        type: 'string',
        defaultValue: '5dd5da2416fa290bf56b2085',
      },
    ],
  })
}
