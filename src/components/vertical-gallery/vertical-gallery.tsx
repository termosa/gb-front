import React, { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { ProductImage } from '../../modules/normalize-product-image'
import window from '../../lib/window/window'
import Slider, { Settings } from 'react-slick'
import { useScreenSize } from '../../lib/use-screen-size'
import { Product as ProductType } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'

const Wrapper = styled.div`
  width: 100%;
`

const SPdpCarouselItem = styled.div<{
  width?: string
  height?: string
}>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: ${(props) => props.width || '465px'};
  height: ${(props) => props.height || '465px'};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const SVerticalImagesColumn = styled.div`
  @media (min-width: 768px) {
    width: 81%;
    margin: 0 20px;
  }
`

const SCarouselIcons = styled.div`
  width: 100%;
  position: sticky;
  top: 183px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 19%;
`

const SPdpRowWrapper = styled.div`
  height: 355px;

  @media (min-width: 768px) {
    height: auto;
  }
`

const SPdpRow = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`

export type VerticalGalleryProps = {
  className?: ClassName
  activeGalleryItem: number | null
  setActiveGalleryItem: Dispatch<SetStateAction<number | null>>
  galleryRef: MutableRefObject<HTMLDivElement | null>
}

export function VerticalGallery({
  className,
  activeGalleryItem,
  setActiveGalleryItem,
  galleryRef,
}: VerticalGalleryProps): React.ReactElement | null {
  const screenSize = useScreenSize()
  const [galleryImageWidth, setGalleryImageWidth] = useState<number>(465)
  const [distanceFromTop, setDistanceFromTop] = useState<number>(0)
  const product = useContext<ProductType | undefined>(ProductContext)

  if (!product) {
    return null
  }

  useEffect(() => {
    window?.addEventListener('scroll', () => {
      product && product.images && handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem)
    })
    return () => {
      window?.removeEventListener('scroll', () => {
        product && product.images && handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem)
      })
    }
  }, [product])

  useEffect(() => {
    setGalleryImageWidth(screenSize.greaterThenExtraLarge ? 465 : screenSize.greaterThenLarge ? 400 : 300)
  }, [screenSize])

  const getImageHeight = (image: ProductImage): number => {
    const ratio = (Math.round(image.height / 10) * 10) / (Math.round(image.width / 10) * 10)
    return ratio === 1 ? galleryImageWidth : Math.round(galleryImageWidth * ratio)
  }

  const handleGalleryScrolling = (
    myRef: MutableRefObject<HTMLDivElement | null> | null,
    images: Array<ProductImage>,
    setActiveGalleryItem: Dispatch<SetStateAction<number | null>>
  ): void => {
    const initialDistance = 160

    const listOfCheckpoints = images
      ?.reduce((arr: Array<number>, curr: ProductImage) => {
        const galleryImageHeight = getImageHeight(curr)
        arr.push(initialDistance - distanceFromTop)
        setDistanceFromTop(distanceFromTop + galleryImageHeight)
        return arr
      }, [])
      .filter((el: number) => myRef?.current && el >= myRef.current.getBoundingClientRect().top - 160)
    setActiveGalleryItem(listOfCheckpoints.length - 1)
  }

  const sliderSettings: Settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.images && product.images[i]?.src} alt={product.images && product.images[i]?.alt} />
        </a>
      )
    },
    arrows: false,
    dots: true,
    dotsClass: 'pdp-carousel-icons__list slick-tdhumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper className={cn(className)}>
      <div className="pdp-s-carousel-wrapper">
        <SPdpRowWrapper>
          {screenSize.greaterThenMedium ? (
            <SPdpRow>
              <SCarouselIcons className="pdp-carousel-icons">
                <ul className="pdp-carousel-icons__list" id="pdp-carousel-icons__list">
                  {product.images?.map((image: ProductImage, i: number) => (
                    <li
                      key={image.src}
                      className={activeGalleryItem === i ? 'active' : ''}
                      onClick={() => {
                        if (!product.images) {
                          return
                        }
                        galleryRef.current &&
                          window?.scrollTo({
                            top: 51 + getImageHeight(image) * i,
                            behavior: 'smooth',
                          })
                      }}
                    >
                      <img src={image.src} alt={image.alt} />
                    </li>
                  ))}
                </ul>
              </SCarouselIcons>
              <SVerticalImagesColumn ref={galleryRef}>
                {product.images?.map((image: ProductImage) => (
                  <SPdpCarouselItem width={`${galleryImageWidth}px`} height={`${getImageHeight(image)}px`}>
                    <img src={image?.src} alt={image?.alt} />
                  </SPdpCarouselItem>
                ))}
              </SVerticalImagesColumn>
            </SPdpRow>
          ) : (
            <>
              <Slider {...sliderSettings}>
                {product.images?.map((image) => (
                  <div className="pdp-carousel-item-mobile" key={image?.src}>
                    <img src={image?.src} alt={image?.alt} />
                  </div>
                ))}
              </Slider>
            </>
          )}
        </SPdpRowWrapper>
      </div>
    </Wrapper>
  )
}
