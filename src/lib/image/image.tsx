import styled from 'styled-components'
import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import { LazyLoadImage, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component'

type ImageProps = {
  className?: ClassName
  style?: React.CSSProperties
  src?: string
  alt?: string
  width?: string
  height?: string
  shopifySize?: 'pico' | 'icon' | 'thumb' | 'small' | 'compact' | 'medium' | 'large' | 'grande'
  draggable?: boolean
  scrollPosition?: ScrollPosition
}

const SImageContainer = styled.figure`
  margin: 0;
  @media (min-width: 768px) {
    margin: 0 12px;
  }
  @media (min-width: 992px) {
    margin: 0;
  }
  img {
    object-fit: cover;
  }
`

export function Image({
  className,
  style,
  src,
  alt,
  width,
  height,
  shopifySize,
  draggable,
  scrollPosition,
}: ImageProps): React.ReactElement {
  const imagePatchedSrc = useMemo<string>(() => {
    if (!src) return ''
    if (!shopifySize) return src
    try {
      const url = new URL(src)
      if (!~url.pathname.indexOf('.')) return src
      const pathParts = url.pathname.split('.')
      pathParts[pathParts.length - 2] += `_${shopifySize}`
      url.pathname = pathParts.join('.')
      return url.toString()
    } catch (error) {
      return src
    }
  }, [src, shopifySize])
  return (
    <SImageContainer className={cn(className)} style={style}>
      <LazyLoadImage
        src={imagePatchedSrc}
        alt={alt}
        scrollPosition={scrollPosition}
        width={width || '100%'}
        height={height || '100%'}
        draggable={draggable}
      />
    </SImageContainer>
  )
}

export default trackWindowScroll(Image)
