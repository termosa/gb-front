import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'className' | 'ref' | 'as' | 'type'> {
  className?: ClassName
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  compact?: boolean
  frontColor?: string
  backColor?: string
  borderColor?: string
  disabledColor?: string
}

const SButton = styled.button<{
  disabled?: boolean
  compact?: boolean
  inverse?: boolean
  frontColor?: string
  backColor?: string
  borderColor?: string
  disabledColor?: string
}>`
  display: inline-block;
  padding: 13px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0.5px solid ${(props) => props.borderColor || '#000'};
  border-radius: 0;
  font: 500 12px/1 'Montserrat', sans-serif;
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
