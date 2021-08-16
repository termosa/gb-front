import { Builder } from '@builder.io/react'
import SiteHeader from '.'

export default function registerSiteHeader(): void {
  Builder.registerComponent(SiteHeader, {
    name: 'Site header',
    inputs: [
      {
        name: 'className',
        type: 'string',
        defaultValue: '',
      },
    ],
  })
}
