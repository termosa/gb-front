import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components';

export interface SoaringModalLayoutProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'ref' | 'as'> {
  className?: ClassName
  children?: React.ReactNode
}

const SSoarModalLayout = styled.div`
  background: rgba(255, 255, 255, 0.85);
  max-width: 480px;
  width: 90%;
  margin: 0;
  padding: 25px;
  text-align: center;
`

export function SoaringModalLayout({ className, ...props }: SoaringModalLayoutProps): React.ReactElement {
  return <SSoarModalLayout className={cn('SoaringModalLayout', className)} {...props} />
}
