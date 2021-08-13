import React from 'react'
import { ThemeProvider } from './theme-provider'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.frontColor};
  color: ${({ theme }) => theme.backColor};
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
`

export const BasicThemeProvider = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <Button>Button with themed styles</Button>
    </ThemeProvider>
  )
}
