import React from 'react'
import cn, { Argument as ClassName } from 'classnames'

export type LinksColumnGroupArrowProps = {
  className?: ClassName
  opened?: boolean
}

export const LinksColumnGroupArrow = ({ className }: LinksColumnGroupArrowProps): React.ReactElement => (
  <svg
    className={cn('LinksColumnGroupArrow', className)}
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0.950195L9 8.9502L17 0.950195"
      stroke="white"
      strokeWidth="0.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)
