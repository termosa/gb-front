import React, { useEffect, useRef, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useYotpo from '../use-yotpo'
import SiteSection from '../../components/site-section'
import FjWild from '../../components/fj-wild'

let GALLERY_CHECK_TIMEOUT = 100
const GALLERY_CHECK_DELAY = 100
const GALLERY_MAX_TRIES = GALLERY_CHECK_DELAY * 100

const Container = styled(SiteSection)`
  max-width: 990px;
  text-align: center;
  margin: 0 auto;

  .yotpo-slider-wrapper {
    margin-bottom: 50px !important;
    max-width: 100% !important;

    @media (min-width: 992px) {
      margin-bottom: 60px !important;
    }
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
  productId: number
}

export function YotpoProductGallery({ className, style, galleryId, productId }: YotpoGalleryProps): React.ReactElement {
  useYotpo([galleryId])

  const [isGalleryVisible, setIsGalleryVisible] = useState(false)

  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current?.children.length) {
        setIsGalleryVisible(true)
        clearInterval(interval)
      }
      GALLERY_CHECK_TIMEOUT += GALLERY_CHECK_DELAY
      if (GALLERY_CHECK_TIMEOUT >= GALLERY_MAX_TRIES) {
        clearInterval(interval)
      }
    }, GALLERY_CHECK_DELAY)

    return () => clearInterval(interval)
  })

  return (
    <Container>
      {isGalleryVisible ? (
        <FjWild
          title="FJ in the wild"
          textFirstPart="See our products in action on"
          textSecondPart="customers just like you."
        />
      ) : null}
      <div
        ref={galleryRef}
        className={cn(className, 'yotpo', 'yotpo-pictures-widget')}
        style={style}
        data-gallery-id={galleryId}
        data-product-id={productId}
      />
    </Container>
  )
}
