import React from 'react'
import { SiteSection } from './site-section'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicSiteSection = (): React.ReactElement => (
  <PresentationCanvas>
    <SiteSection>Your component</SiteSection>
  </PresentationCanvas>
)
