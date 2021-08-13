import PresentationCanvas from '../../helpers/presentation-canvas'
import React from 'react'
import { CenterLayout } from './center-layout'

export const BasicCenterLayout = (): React.ReactElement => (
  <PresentationCanvas>
    <CenterLayout>Content</CenterLayout>
  </PresentationCanvas>
)
