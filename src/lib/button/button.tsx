import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'className' | 'ref' | 'as' | 'type'> {
  className?: ClassName
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  compact?: boolean
  font?: string
  width?: string
  frontColor?: string
  backColor?: string
  borderColor?: string
  disabledColor?: string
}

const SButton = styled.button<{
  disabled?: boolean
  compact?: boolean
  inverse?: boolean
  font?: string
  width?: string
  frontColor?: string
  backColor?: string
  borderColor?: string
  disabledColor?: string
  padding?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width === 'auto' ? '100%' : props.width || '155px')};
  height: 55px;
  margin: 0 auto;
  text-transform: uppercase;
  border: 1px solid ${(props) => props.borderColor || '#000'};
  border-radius: 0;
  font: ${(props) => props.font || `700 16px/1.25 'Montserrat', sans-serif`};
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: ${(props) => props.backColor || '#fff'};
  color: ${(props) => props.frontColor || '#000'};
  cursor: pointer;
  min-width: ${(props) => (props.compact ? '35px' : '142px')};
  font-weight: ${(props) => (props.backColor === '#000' ? '700' : '500')};
  padding: ${(props) => props.padding || '0'};

  @media (min-width: 768px) {
    width: ${(props) => props.width || '155px'};
  }

  &:hover {
    font-weight: ${(props) => (props.backColor === '#000' ? '500' : '700')};
    background-color: ${(props) => props.frontColor || '#000'};
    color: ${(props) => props.backColor || '#fff'};
  }

  &[disabled] {
    cursor: auto;
    background-color: ${(props) => props.disabledColor || '#e4e4e4'};
    color: ${(props) => props.frontColor || '#000'};
  }
`

export function Button({ className, ...props }: ButtonProps): React.ReactElement {
  return <SButton className={cn('Button', className)} {...props} />
}
