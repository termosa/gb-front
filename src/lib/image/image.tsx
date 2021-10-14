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
  width?: number
  height?: number
  quality?: number
  shopifySize?: 'pico' | 'icon' | 'thumb' | 'small' | 'compact' | 'medium' | 'large' | 'grande'
  draggable?: boolean
  visibleByDefault?: boolean
  scrollPosition?: ScrollPosition
}

const SImageContainer = styled.figure<{ fit?: string }>`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
  img {
    -o-object-fit: ${(props) => props.fit || 'cover'};
    object-fit: ${(props) => props.fit || 'cover'};
    width: 100%;
    height: auto;
  }
`

const SLazyLoadImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
`

export function Image({
  className,
  style,
  src,
  alt,
  fit,
  width,
  height,
  quality = 80,
  shopifySize,
  draggable,
  visibleByDefault,
  scrollPosition,
}: ImageProps): React.ReactElement {
  const imagePatchedSrc = useMemo<string>(() => {
    if (!src) return ''
    const optimizerUrl = `https://www.fragrantjewels.com/cdn-cgi/image/w=${width || 'auto'},h=${
      height || 'auto'
    },q=${quality}/`
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
      <SLazyLoadImage
        src={imagePatchedSrc}
        alt={alt}
        scrollPosition={scrollPosition}
        threshold={500}
        width={width || '100%'}
        height={height || '100%'}
        draggable={draggable}
        visibleByDefault={!!visibleByDefault}
        /*visibleByDefault*/
      />
    </SImageContainer>
  )
}

export default trackWindowScroll(Image)
