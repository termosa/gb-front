import React from 'react'
import PresentationCanvas from 'gravity-brands/helpers/presentation-canvas'
import { FullWidthBanner } from './full-width-banner'

export const BasicFullWidthBanner = (): React.ReactElement => (
  <PresentationCanvas>
    <FullWidthBanner
      text="It’s more than amazing scents and stunning colors — essential oils and natural minerals  will leave your skin feeling so soft, you’ll be feel like silk."
      title="Bath Bombs"
      imageUrl="https://lorempixel.com/1440/700/abstract/3/"
      position="right"
    />
  </PresentationCanvas>
)

export const FullWidthBannerWithLightText = (): React.ReactElement => (
  <PresentationCanvas dark>
    <FullWidthBanner
      text="It’s more than amazing scents and stunning colors — essential oils and natural minerals  will leave your skin feeling so soft, you’ll be feel like silk."
      title="Bath Bombs"
      imageUrl="https://lorempixel.com/1440/700/abstract/7/"
      textColor="#fff"
    />
  </PresentationCanvas>
)
