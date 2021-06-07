import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type SearchFieldProps = {
  className?: ClassName
}

const SWrapper = styled.div`
  font-size: 0.9em;
  text-align: left;

  @media (min-width: 1200px) {
    font-size: 0.9em;
    text-align: right;
  }
`

const SLabel = styled.a`
  color: #000;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`

export function SigninSignup({ className }: SearchFieldProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('SigninSignup', className)}>
      <SLabel>Sign in</SLabel>
      &nbsp;/&nbsp;
      <SLabel>Sign up</SLabel>
    </SWrapper>
  )
}
