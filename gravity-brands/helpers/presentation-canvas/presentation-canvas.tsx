import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
import { ThemeProvider } from '@fragrantjewels/gravity-brands.helpers.theme-provider'

const name = 'PresentationCanvas'

export type PresentationCanvasProps = {
  className?: ClassName
  children: React.ReactNode
  centered?: boolean
  dark?: boolean
  nowrap?: boolean
}

export const PresentationCanvasWrapper = styled.div<PresentationCanvasProps>`
  background-color: ${(props) => (props.dark ? props.theme.colors.black : props.theme.colors.white)};
  padding: 10px;
  box-sizing: border-box;
  min-height: 100px;
  overflow: auto;
  ${(props: PresentationCanvasProps) =>
    props.centered
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ''}
`

export function PresentationCanvas({ children, className, ...props }: PresentationCanvasProps): React.ReactElement {
  return (
    <ThemeProvider>
      <PresentationCanvasWrapper className={cn(name, className)} {...props}>
        {props.nowrap ? children : <div>{children}</div>}
      </PresentationCanvasWrapper>
    </ThemeProvider>
  )
}
