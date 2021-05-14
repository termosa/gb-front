import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface CenterLayoutProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'ref' | 'as'> {
  className?: ClassName
  children?: React.ReactNode
}

const SCenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
  overflow: visible;
`

export function CenterLayout({ className, ...props }: CenterLayoutProps): React.ReactElement {
  return <SCenterLayout className={cn('CenterLayout', className)} {...props} />
}
