import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useYotpo from '../use-yotpo'
import SiteSection from '../../components/site-section'

const Container = styled(SiteSection)`
  max-width: 990px;
  text-align: center;
  margin: 0 auto 36px;
  padding: 0 15px;

  @media (min-width: 768px) {
    margin-bottom: 36px;
  }

  @media (min-width: 992px) {
    margin-bottom: 95px;
  }

  .yotpo .yotpo-pictures-collage-wrapper.yotpo-image-spacing-5 .y-image-wrapper {
    margin: 0;
  }

  .yotpo-hover-enable .yotpo-single-image-container .y-image-wrapper:hover .yotpo-hover-cta,
  .yotpo-hover-enable .yotpo-single-image-container .hover-preview .yotpo-hover-cta {
    background-color: rgb(144, 89, 200);
  }
`

const SPreTitle = styled.strong`
  display: block;
  font: 500 16px/1.3 'Montserrat', sans-serif;
  margin: 0 0 8px;
  letter-spacing: 0.05em;

  @media (min-width: 992px) {
    margin: 0 0 16px;
  }
`

const STitleWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 100%;
  }
`

const STitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 32px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto 25px;
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
    z-index: -1;
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
