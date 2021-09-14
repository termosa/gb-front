import React from 'react'
import styled from 'styled-components'
import SizeSelector, { SiteSelectorProps } from '../size-selector'

const SSizeSelectorModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 150;
  background: #ffffffb2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export function SizeSelectorModal(props: SiteSelectorProps): React.ReactElement {
  return (
    <SSizeSelectorModalWrapper>
      <SizeSelector {...props} />
    </SSizeSelectorModalWrapper>
  )
}
