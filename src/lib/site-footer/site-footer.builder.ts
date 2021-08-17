import { Builder } from '@builder.io/react'
import SiteFooter from '.'

export default function registerSiteFooter(): void {
  Builder.registerComponent(SiteFooter, {
    name: 'Site footer',
  })
}
