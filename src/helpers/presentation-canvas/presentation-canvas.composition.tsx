import React from 'react'
import styled from 'styled-components'
import { PresentationCanvas } from './presentation-canvas'

export const BasicPresentationCanvas = (): React.ReactElement => (
  <PresentationCanvas>PresentationCanvas content</PresentationCanvas>
)

export const PresentationCanvasWithThemedStyles = (): React.ReactElement => {
  const Button = styled.button`
    background-color: ${({ theme }) => theme.frontColor};
    color: ${({ theme }) => theme.backColor};
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-family: 'Cormorant Garamond', serif;
  `

  return (
    <PresentationCanvas>
      <Button>Button with themed styles</Button>
    </PresentationCanvas>
  )
}
