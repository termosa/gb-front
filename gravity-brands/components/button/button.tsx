import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'className' | 'ref' | 'as' | 'type'> {
  className?: ClassName
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  compact?: boolean
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
  width?: string
  frontColor?: string
  backColor?: string
  borderColor?: string
  disabledColor?: string
}>`
  display: inline-block;
  width: ${(props) => props.width || '155px'};
  height: 55px;
  text-transform: uppercase;
  border: 0.5px solid ${(props) => props.borderColor || '#000'};
  border-radius: 0;
  font: 700 16px/20px 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: ${(props) => props.backColor || '#fff'};
  color: ${(props) => props.frontColor || '#000'};
  cursor: pointer;
  min-width: ${(props) => (props.compact ? '35px' : '142px')};

  &:hover {
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
