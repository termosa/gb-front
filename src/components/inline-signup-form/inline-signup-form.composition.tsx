import React from 'react'
import { InlineSignupForm } from './inline-signup-form'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicInlineSignupForm = (): React.ReactElement => (
  <PresentationCanvas>
    <InlineSignupForm onSignup={() => Promise.resolve()} />
  </PresentationCanvas>
)

export const FailingInlineSignupForm = (): React.ReactElement => (
  <PresentationCanvas>
    <InlineSignupForm onSignup={() => Promise.reject()} />
  </PresentationCanvas>
)
