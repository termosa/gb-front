import { Builder} from '@builder.io/react'
import PromotionBanner from '.'

export default function registerPromotionBanner(): void {
  Builder.registerComponent(PromotionBanner, {
    name: 'Promotion banner',
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
