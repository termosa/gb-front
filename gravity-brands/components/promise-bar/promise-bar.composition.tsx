import React from 'react'
import { PromiseBar } from './promise-bar'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicPromiseBar = (): React.ReactElement => (
  <PresentationCanvas>
    <PromiseBar />
  </PresentationCanvas>
)
