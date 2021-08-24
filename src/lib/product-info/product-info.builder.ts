import { Builder, withChildren } from '@builder.io/react'
import ProductInfo from '.'

export default function registerProductInfo(): void {
  Builder.registerComponent(withChildren(ProductInfo), {
    name: 'Product info',
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Text',
          options: { text: 'Put content here' },
        },
      },
    ],
    inputs: [
      {
        name: 'className',
        type: 'string',
        defaultValue: '',
      },
    ],
  })
}
