import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type SearchFieldProps = {
  className?: ClassName
  userName?: string
}

const SWrapper = styled.div`
  font: 400 12px/17px 'Montserrat', sans-serif;
  // letter-spacing: 0.05em;
  text-align: left;
  @media (min-width: 375px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    text-align: right;
  }
`

const SLabel = styled.a`
  color: #000;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    // font-weight: 600;
    text-shadow: 0 0 #000;
  }
`

export function SigninSignup({ className, userName }: SearchFieldProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('SigninSignup', className)}>
      {userName ? (
        <>
          <div>Hi, {userName}</div>
          <div>
            <SLabel href="/">Log out</SLabel>
          </div>
        </>
      ) : (
        <span>
          <SLabel href="/account/login?return_url=/">Sign in</SLabel>
          {' / '}
          <SLabel href="/account/register">Sign up</SLabel>
        </span>
      )}
    </SWrapper>
  )
}
