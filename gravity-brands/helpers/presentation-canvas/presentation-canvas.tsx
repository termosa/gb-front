import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'

const name = 'PresentationCanvas'

export type PresentationCanvasProps = {
  className?: ClassName
  children: React.ReactNode
  centered?: boolean
  dark?: boolean
  nowrap?: boolean
}

export const PresentationCanvasWrapper = styled.div<PresentationCanvasProps>`
  background-color: ${(props) => (props.dark ? '#000' : '#fff')};
  padding: 10px;
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
    <PresentationCanvasWrapper className={cn(name, className)} {...props}>
      {props.nowrap ? children : <div>{children}</div>}
    </PresentationCanvasWrapper>
  );
}
