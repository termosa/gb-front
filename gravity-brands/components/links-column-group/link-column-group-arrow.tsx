import React from 'react'
import cn, { Argument as ClassName } from 'classnames'

export type LinkColumnGroupArrowProps = {
  className?: ClassName
  opened?: boolean
}

export const LinkColumnGroupArrow = ({ className }: LinkColumnGroupArrowProps): React.ReactElement => (
  <svg
    className={cn('LinkColumnGroupArrow', className)}
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0.950195L9 8.9502L17 0.950195"
      stroke="white"
      stroke-width="0.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
)
