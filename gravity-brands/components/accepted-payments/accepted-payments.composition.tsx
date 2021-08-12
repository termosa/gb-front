import React from 'react'
import PresentationCanvas from 'gravity-brands/helpers/presentation-canvas'
import { AcceptedPayments } from './accepted-payments'

export const BasicAcceptedPayments = (): React.ReactElement => (
  <PresentationCanvas dark>
    <AcceptedPayments />
  </PresentationCanvas>
)
