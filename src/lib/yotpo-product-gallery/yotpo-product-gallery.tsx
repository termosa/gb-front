import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useYotpo from '../use-yotpo'
import SiteSection from '../../components/site-section'

const Container = styled(SiteSection)`
  max-width: 960px;
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

export type YotpoGalleryProps = {
  className?: ClassName
  style?: React.CSSProperties
  galleryId: string
  productId: string
}

export function YotpoProductGallery({ className, style, galleryId, productId }: YotpoGalleryProps): React.ReactElement {
  useYotpo([galleryId])
  return (
    <Container>
      <div
        className={cn(className, 'yotpo', 'yotpo-pictures-widget')}
        style={style}
        data-gallery-id={galleryId}
        data-product-id={productId}
      />
    </Container>
  )
}
