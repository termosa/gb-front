import React from 'react'
import { Button } from './button'

export const BasicButton = (): React.ReactElement => <Button>Basic Button</Button>

export const DisabledButton = (): React.ReactElement => <Button disabled>Disabled Button</Button>

export const CompactButton = (): React.ReactElement => <Button compact>9</Button>

export const BlackButton = (): React.ReactElement => (
  <Button frontColor="#fff" backColor="#000">
    Black Button
  </Button>
)
