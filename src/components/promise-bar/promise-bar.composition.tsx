import React from 'react'
import { PromiseBar } from './promise-bar'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicPromiseBar = (): React.ReactElement => (
  <PresentationCanvas>
    <PromiseBar />
  </PresentationCanvas>
)
