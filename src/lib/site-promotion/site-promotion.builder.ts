import { Builder } from '@builder.io/react'
import PromotionSite from '.'

export default function registerPromotionSite(): void {
  Builder.registerComponent(PromotionSite, {
    name: 'Promotion site',
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
