import { Builder, withChildren } from '@builder.io/react'
import MainPageLayout from '.'

export default function registerMainPageLayout(): void {
  Builder.registerComponent(withChildren(MainPageLayout), {
    name: 'Main page layout',
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Text',
          options: { text: 'Put page content here' },
        },
      },
    ],
  })
}
