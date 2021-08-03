import React from 'react'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'
import { FloatingCta, FloatingCtaProps } from './floating-cta'

export const BasicFloatingCta = (props: FloatingCtaProps): React.ReactElement => (
  <PresentationCanvas>
    <FloatingCta {...props} />
  </PresentationCanvas>
)
