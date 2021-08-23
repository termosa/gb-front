import React from 'react'
import { Button } from './button'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const BasicButton = (): React.ReactElement => (
  <PresentationCanvas>
    <Button>Basic Button</Button>
  </PresentationCanvas>
)

export const DisabledButton = (): React.ReactElement => (
  <PresentationCanvas>
    <Button disabled>Disabled Button</Button>
  </PresentationCanvas>
)

export const CompactButton = (): React.ReactElement => (
  <PresentationCanvas>
    <Button compact>9</Button>
  </PresentationCanvas>
)

export const BlackButton = (): React.ReactElement => (
  <PresentationCanvas>
    <Button frontColor="#fff" backColor="#000">
      Black Button
    </Button>
  </PresentationCanvas>
)