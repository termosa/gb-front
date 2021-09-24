import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export type LazyLoadProps = {
  children: React.ReactNode
  afterLoad?: () => unknown
  beforeLoad?: () => unknown
  delayMethod?: 'throttle' | 'debounce'
  delayTime?: number
  placeholder?: React.ReactElement
  threshold?: number
  useIntersectionObserver?: boolean
  visibleByDefault?: boolean
}

export function LazyLoad(props: LazyLoadProps): React.ReactElement {
  return <LazyLoadComponent {...props} />
}
