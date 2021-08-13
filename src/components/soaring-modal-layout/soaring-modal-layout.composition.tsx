import React from 'react'
import { SoaringModalLayout } from './soaring-modal-layout'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicSoaringModalLayout = (): React.ReactElement => (
  <PresentationCanvas>
    <SoaringModalLayout>SoaringModalLayout content</SoaringModalLayout>
  </PresentationCanvas>
)
