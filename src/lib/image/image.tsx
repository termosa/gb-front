import styled from 'styled-components'
import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'

type ImageProps = {
  className?: ClassName
  style?: React.CSSProperties
  src: string
  alt?: string
  width?: string
  height?: string
  shopifySize?: 'pico' | 'icon' | 'thumb' | 'small' | 'compact' | 'medium' | 'large' | 'grande'
  draggable?: boolean
}

const SImageContainer = styled.figure`
  width: initial;
  height: initial;
  margin: 5px;
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
}: ImageProps): React.ReactElement {
  const imagePatchedSrc = useMemo<string>(() => {
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
      <img src={imagePatchedSrc} alt={alt} draggable={draggable} width={width || '100%'} height={height || '100%'} />
    </SImageContainer>
  )
}
