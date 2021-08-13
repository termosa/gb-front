import React from 'react'
import { MostFunOverview } from './most-fun-overview'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicMostFunOverview = (): React.ReactElement => (
  <PresentationCanvas>
    <MostFunOverview />
  </PresentationCanvas>
)
