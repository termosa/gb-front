import NextImage from 'next/image'
import styled from 'styled-components'
import React from 'react'

type ImageProps = {
  src: string
  alt: string
  size?: string
  width?: string
  height?: string
  shopifySize?: string
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
  const arr = src.split('.')
  const lastVal = arr.pop()
  const firstVal = arr.join('.')
  return (
    <SImageContainer size={size} width={width} height={height}>
      <NextImage
        src={shopifySize ? `${firstVal}_${shopifySize}.${lastVal}` : src}
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
