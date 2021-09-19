import NextImage from 'next/image'
import styled from 'styled-components'
import React, { useMemo } from 'react'

type ImageProps = {
  src: string
  alt?: string
  size?: string
  width?: string
  height?: string
  shopifySize?: 'pico' | 'icon' | 'thumb' | 'small' | 'compact' | 'medium' | 'large' | 'grande'
  draggable?: boolean
}

const SImageContainer = styled.figure<{
  size?: string
  width?: string
  height?: string
}>`
  width: ${(props) => (props.size ? `${props.size}px` : 'inherit')};
  margin: 5px;
`

export const Image = ({ src, alt, size, width, height, shopifySize, draggable }: ImageProps): React.ReactElement => {
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
    <SImageContainer size={size} width={width} height={height}>
      <NextImage
        src={imagePatchedSrc}
        alt={alt}
        draggable={draggable}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit={'contain'}
      />
    </SImageContainer>
  )
}
