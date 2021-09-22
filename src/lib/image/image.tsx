import styled from 'styled-components'
import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import { LazyLoadImage, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component'

type ImageProps = {
  className?: ClassName
  style?: React.CSSProperties
  src?: string
  alt?: string
  fit?: 'contain'
  width?: string
  height?: string
  shopifySize?: 'pico' | 'icon' | 'thumb' | 'small' | 'compact' | 'medium' | 'large' | 'grande'
  draggable?: boolean
  scrollPosition?: ScrollPosition
}

const SImageContainer = styled.figure<{ fit?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;

  img {
    -o-object-fit: ${(props) => props.fit || 'cover'};
    object-fit: ${(props) => props.fit || 'cover'};
  }
`

export function Image({
  className,
  style,
  src,
  alt,
  fit,
  width,
  height,
  shopifySize,
  draggable,
  scrollPosition,
}: ImageProps): React.ReactElement {
  const imagePatchedSrc = useMemo<string>(() => {
    if (!src) return ''
    const optimizerUrl = 'https://www.fragrantjewels.com/cdn-cgi/image/w=auto,q=97/'
    if (!shopifySize) return optimizerUrl + src
    try {
      const url = new URL(src)
      if (!~url.pathname.indexOf('.')) return src
      const pathParts = url.pathname.split('.')
      pathParts[pathParts.length - 2] += `_${shopifySize}`
      url.pathname = pathParts.join('.')
      return optimizerUrl + url.toString()
    } catch (error) {
      return src
    }
  }, [src, shopifySize])
  return (
    <SImageContainer className={cn(className)} style={style} fit={fit}>
      <LazyLoadImage
        src={imagePatchedSrc}
        alt={alt}
        scrollPosition={scrollPosition}
        threshold={500}
        width={width || '100%'}
        height={height || '100%'}
        draggable={draggable}
      />
    </SImageContainer>
  )
}

export default trackWindowScroll(Image)
