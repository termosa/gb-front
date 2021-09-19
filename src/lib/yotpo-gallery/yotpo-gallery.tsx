import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useYotpo from '../use-yotpo'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 970px;
  text-align: center;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }

  .yotpo .yotpo-pictures-collage-wrapper.yotpo-image-spacing-5 .y-image-wrapper {
    margin: 0;
  }
`

const SPreTitle = styled.strong`
  display: block;
  font: 500 14px/1.3 'Montserrat', sans-serif;
  margin: 0 0 10px;
  letter-spacing: 0.7px;

  @media (min-width: 768px) {
    margin: 0 0 15px;
  }
`

const STitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 100%;
  }
`

const STitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 16px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    font-size: 32px;
  }
`

const STitleUnderline = styled.span`
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 8px;
    background: rgba(77, 190, 186, 0.3);
    position: absolute;
    bottom: 6px;
    left: 0;
  }
`

export type YotpoGalleryProps = {
  className?: ClassName
  style?: React.CSSProperties
  galleryId: string
}

export function YotpoGallery({ className, style, galleryId }: YotpoGalleryProps): React.ReactElement {
  useYotpo([galleryId])
  return (
    <Container>
      <SPreTitle>FOLLOW US</SPreTitle>
      <STitleWrapper>
        <STitle>
          <span>
            <STitleUnderline>@Fragrant_Jewels</STitleUnderline>
          </span>
        </STitle>
      </STitleWrapper>
      <div className={cn(className, 'yotpo', 'yotpo-pictures-widget')} style={style} data-gallery-id={galleryId} />
    </Container>
  )
}
