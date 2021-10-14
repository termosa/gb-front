import React, { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { ProductImage } from '../../modules/normalize-product-image'
import window from '../../lib/window/window'
import useScreenSize from '../../lib/use-screen-size'
import { Product as ProductType } from '../../modules/normalize-product'
import ProductContext from '../../modules/product-context'
import Slider from '../../lib/slider'
import Carousel from 'react-multi-carousel'
import Image from '../../lib/image'

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const SPdpCarouselContainer = styled.div`
  @media (max-width: 767px) {
    max-width: 350px;
    margin: 0 auto 14px;
  }
`

const SPdpCarouselItem = styled.div<{
  width?: string
  height?: string
}>`
  display: flex;
  align-items: center;
  margin: 0 auto 20px;
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
    //width: 85.5%;
    //margin: 0 20px;
    margin: 0 auto;
  }
`

const SCarouselIcons = styled.div<{
  top?: number
}>`
  width: 100%;
  position: sticky;
  top: ${(props) => props.top + 'px' || '0'};
  height: fit-content;
  order: 1;

  @media (min-width: 768px) {
    order: 0;
    //width: 14.5%;
    width: 92.5px;
  }
`

const SCarouselThumbnails = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  position: absolute;
  width: calc(100vw - 35px);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 350px) {
    width: calc(330px + (100vw - 350px) / 2);
  }

  @media (min-width: 400px) {
    width: calc(335px + (100vw - 350px) / 2);
  }

  @media (max-width: 767px) {
    // flex-wrap: wrap;
    position: static;
    width: 100%;
    gap: 2px;
    margin: 2px 0;
  }
`

const SCarouselThumbnailsHolder = styled.div`
  @media (max-width: 767px) {
    overflow: auto;
    padding: 0;
    margin: 0;
    display: block;
    & > div {
      a {
        display: block;
        width: auto;
        height: auto;

        figure {
          width: 66px;
          height: 66px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 370px) {
    margin: 0 -16px;

    & > div {
      width: fit-content;
      padding: 0 16px 10px;
    }
  }
`

const SCarouselThumbnailItem = styled.a<{
  isActive?: boolean
}>`
  width: 66px;
  height: 66px;
  border: ${(props) => (props.isActive ? '1px solid #000000' : '1px solid #ffffff')};
  margin-right: 4px;
  cursor: pointer;
  display: flex;

  img {
    margin: 0;

    @media (min-width: 768px) {
      margin: 3px;
    }
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-left: 0;
  }
`

const SPdpRowWrapper = styled.div`
  // height: 372px;

  @media (min-width: 768px) {
    height: auto;
  }
`

const SCarouselIconsList = styled.ul`
  padding: 0;
  margin: 3px 0 16px;
  list-style: none;
  display: block;
`

const SCarouselIconsItem = styled.li<{
  isActive?: boolean
}>`
  cursor: pointer;
  margin: 0 0 8px;
  position: relative;
  width: 100%;
  border: ${(props) => (props.isActive ? '1px solid #000000' : '1px solid #ffffff')};
  display: flex;
  align-items: center;
  min-width: 75px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    margin: 0 0.5% 0 0;
    width: 23%;
  }

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    width: 73px;
    height: 73px;
    object-fit: contain;
    display: block;

    @media (min-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`

const SPdpRow = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`

const SPdpCarouselItemMobile = styled.div`
  outline: none;
  display: flex !important;
  justify-content: center;
  width: 344px;
  height: 344px;
  margin: 0 auto;

  @media (max-width: 382px) {
    height: calc(100vw - 32px);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    @media (min-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
`

const SliderHolder = styled.div`
  .react-multi-carousel-item {
    display: flex;
    align-items: center;
  }
`

const SImage = styled(Image)`
  width: 100%;
`

export type VerticalGalleryProps = {
  className?: ClassName
}

export function VerticalGallery({ className }: VerticalGalleryProps): React.ReactElement | null {
  const screenSize = useScreenSize()

  const galleryRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<Carousel>(null)
  const [activeGalleryItem, setActiveGalleryItem] = useState<number | null>(0)
  const [galleryImageWidth, setGalleryImageWidth] = useState<number>(465)
  const product = useContext<ProductType | undefined>(ProductContext)

  useEffect(() => {
    const scrollHandler = () => {
      if (!product?.images) return
      if (!screenSize.greaterThanMedium) return
      handleGalleryScrolling(galleryRef, product.images, setActiveGalleryItem)
    }
    window?.addEventListener('scroll', scrollHandler)
    return () => window?.removeEventListener('scroll', scrollHandler)
  }, [product, screenSize])

  useEffect(() => {
    setGalleryImageWidth(screenSize.greaterThanExtraLarge ? 465 : screenSize.greaterThanLarge ? 400 : 300)
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
    const initialDistance = JSON.parse(localStorage.getItem('headerHeight') || '{}') + 50
    let distanceFromTop = 0

    const listOfCheckpoints = images
      ?.reduce((arr: Array<number>, curr: ProductImage) => {
        const galleryImageHeight = getImageHeight(curr)
        arr.push(initialDistance - distanceFromTop)
        distanceFromTop = distanceFromTop + galleryImageHeight
        return arr
      }, [])
      .filter((el: number) => myRef?.current && el >= myRef.current.getBoundingClientRect().top - 160)
    setActiveGalleryItem(listOfCheckpoints.length - 1)
  }

  return (
    <Wrapper className={cn(className)}>
      <SPdpCarouselContainer>
        <SPdpRowWrapper>
          {screenSize.greaterThanMedium ? (
            <SPdpRow>
              <SCarouselIcons top={JSON.parse(localStorage.getItem('headerHeight') || '{}') + 50}>
                <SCarouselIconsList>
                  {product?.images?.map((image: ProductImage, i: number) => (
                    <SCarouselIconsItem
                      key={image.src}
                      isActive={activeGalleryItem === i}
                      onClick={() => {
                        if (!product.images) return
                        const heightOfImages = product.images.reduce(
                          (prev: number, curr: ProductImage, index: number) => {
                            return index < i ? prev + getImageHeight(curr) : prev
                          },
                          0
                        )
                        galleryRef.current &&
                          window?.scrollTo({
                            top: 75 + heightOfImages,
                            behavior: 'smooth',
                          })
                      }}
                    >
                      <SImage src={image.src} alt={image.alt} width={90} height={90} quality={100} />
                    </SCarouselIconsItem>
                  ))}
                </SCarouselIconsList>
              </SCarouselIcons>
              <SVerticalImagesColumn ref={galleryRef}>
                {product?.images?.map((image: ProductImage) => (
                  <SPdpCarouselItem
                    width={`${galleryImageWidth}px`}
                    height={`${getImageHeight(image)}px`}
                    key={image.src}
                  >
                    <SImage src={image.src} alt={image.alt} width={600} quality={100} />
                  </SPdpCarouselItem>
                ))}
              </SVerticalImagesColumn>
            </SPdpRow>
          ) : (
            <>
              <SliderHolder>
                <Slider
                  partiallyVisible={false}
                  arrows={false}
                  /*carouselRef={carouselRef}*/
                  setActiveGalleryItem={setActiveGalleryItem}
                >
                  {product?.images?.map((image) => (
                    <SPdpCarouselItemMobile key={image?.src}>
                      {product?.images && (
                        <SImage
                          src={product.images && image?.src}
                          alt={(product.images && image?.alt) || ''}
                          width={500}
                          height={500}
                          quality={100}
                        />
                      )}
                    </SPdpCarouselItemMobile>
                  ))}
                </Slider>
              </SliderHolder>
              <SCarouselThumbnailsHolder>
                <SCarouselThumbnails>
                  {product?.images?.map((image, i) => (
                    <SCarouselThumbnailItem
                      key={image?.src}
                      isActive={activeGalleryItem === i}
                      onClick={() => {
                        setActiveGalleryItem(i)
                        carouselRef.current && carouselRef.current.goToSlide(i)
                      }}
                    >
                      {product?.images && (
                        <SImage
                          src={product.images && image?.src}
                          alt={(product.images && image?.alt) || ''}
                          fit="contain"
                          width={100}
                          height={100}
                          quality={100}
                        />
                      )}
                    </SCarouselThumbnailItem>
                  ))}
                </SCarouselThumbnails>
              </SCarouselThumbnailsHolder>
            </>
          )}
        </SPdpRowWrapper>
      </SPdpCarouselContainer>
    </Wrapper>
  )
}
