import React, { ReactNode } from 'react'
import theme from './theme'
import { ThemeProvider as Provider } from 'styled-components'

export const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => (
  <Provider theme={theme}>{children}</Provider>
)

export type ThemeProviderProps = {
  children?: ReactNode
}
