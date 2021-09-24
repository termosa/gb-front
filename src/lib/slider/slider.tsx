import React, { Dispatch } from 'react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'

const MAX_VISIBLE_ITEMS = 3

const SImageContainer = styled.div`
  touch-action: pan-y;
  user-select: none;

  input[type='range'] {
    appearance: none;
  }

  .react-multi-carousel-list {
    position: initial;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #efefef;
    border: none;
    border-radius: 2px;
  }

  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    border: none;
    height: 5px;
    width: 15%;
    cursor: pointer;
    border-radius: 2px;
    background: #bdbdbd;
    margin: 0;
    outline: none;
  }

  input[type='range']:focus {
    outline: none;
    border-radius: 2px;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #efefef;
  }
  .carousel-container-with-scrollbar {
    // padding-bottom: 20px;
    overflow: visible !important;
    @media (min-width: 768px) {
      overflow: hidden !important;
    }
  }

  .slider-image-item {
    padding: 20px 4px;

    @media (min-width: 768px) {
      padding: 20px 14px;
    }
  }

  .slider-full-width-item {
    padding: 0;
  }
`

const SCustomSlider = styled.div`
  position: absolute;
  bottom: -35px;
  left: 0;
  width: 100%;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0 30px;
    bottom: -40px;
  }

  @media (min-width: 992px) {
    padding: 0 21px;
    bottom: -44px;
  }

  & > input {
    width: 100%;
  }

  input[type='range'] {
    border: 1px solid white;
  }

  input[type='range']::-moz-range-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
  }

  input[type='range']:-moz-focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  input[type='range']:focus::-moz-range-track {
    background: #ccc;
  }
`

const SCustomDot = styled.div<{
  isActive: boolean
}>`
  background: #4dbeba;
  opacity: ${(props) => (props.isActive ? 0.95 : 0.6)};
  width: 10px;
  height: 10px;
  margin: 0 7px;
  border-radius: 50%;
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  cursor: pointer;
  z-index: 5;
`

const SPrevArrow = styled(SArrow)`
  left: 8px;
  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: 8px;
  button {
    transform: translateX(-5px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

type SliderProps = {
  children: React.ReactNode
  arrows?: boolean
  customLeftArrow?: React.ReactElement
  customRightArrow?: React.ReactElement
  responsive?: ResponsiveType
  scrollbarPresent?: boolean
  customButtonGroup?: React.ReactElement
  dotsPresent?: boolean
  partiallyVisible?: boolean
  infinite?: boolean
  swipeable?: boolean
  itemClass?: string
  autoPlay?: boolean
  centerMode?: boolean
  showDots?: boolean
  carouselRef?: React.RefObject<Carousel>
  setActiveGalleryItem?: Dispatch<number>
}

interface CarouselState {
  carouselState?: {
    containerWidth: number
    currentSlide: number
    deviceType: string
    domLoaded: boolean
    itemWidth: number
    slidesToShow: number
    totalItems: number
    transform: number
  }
}

type CustomDotProps = {
  active?: boolean
}

const getResponsive = (partiallyVisible: boolean | undefined): ResponsiveType => {
  return {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: partiallyVisible ? MAX_VISIBLE_ITEMS : 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: partiallyVisible ? 2.5 : 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: partiallyVisible ? 1.5 : 1,
    },
  }
}

export const Slider = ({
  children,
  arrows,
  customLeftArrow,
  customRightArrow,
  scrollbarPresent,
  customButtonGroup,
  dotsPresent,
  partiallyVisible,
  responsive,
  infinite,
  swipeable,
  itemClass,
  carouselRef,
  autoPlay,
  centerMode,
  showDots,
  setActiveGalleryItem,
}: SliderProps): React.ReactElement => {
  const CustomSlider = ({ carouselState }: CarouselState) => {
    let value = 0
    if (!carouselRef || !carouselRef.current) {
      return null
    }
    const carouselItemWidth = carouselRef.current?.state?.itemWidth || 0
    const maxTranslateX = Math.round(
      carouselItemWidth * (carouselRef?.current?.state?.totalItems - carouselRef.current.state.slidesToShow) + 150
    )
    value = maxTranslateX / 100
    return (
      <SCustomSlider>
        <input
          type="range"
          value={Math.round(Math.abs(carouselState ? carouselState.transform : 0) / value) || 0}
          max={
            (carouselItemWidth *
              ((carouselState ? carouselState.totalItems : 0) - (carouselState ? carouselState.slidesToShow : 0))) /
            value
          }
          onChange={(e) => {
            const nextTransform = +e.target.value * value
            const nextSlide = Math.round(nextTransform / carouselItemWidth)
            carouselRef.current &&
              carouselRef.current.setState({
                transform: -nextTransform,
                currentSlide: nextSlide,
              })
          }}
        />
      </SCustomSlider>
    )
  }

  const CustomDot = ({ active }: CustomDotProps) => {
    return <SCustomDot isActive={active ? active : false} />
  }

  return (
    <SImageContainer>
      <Carousel
        ref={carouselRef}
        arrows={arrows}
        customLeftArrow={
          customLeftArrow || (
            <SPrevArrow>
              <SArrowButton />
            </SPrevArrow>
          )
        }
        customRightArrow={
          customRightArrow || (
            <SNextArrow>
              <SArrowButton />
            </SNextArrow>
          )
        }
        renderButtonGroupOutside={scrollbarPresent}
        customButtonGroup={scrollbarPresent ? <CustomSlider /> : customButtonGroup}
        customDot={dotsPresent ? <CustomDot /> : null}
        itemClass={itemClass || 'image-item'}
        infinite={infinite}
        swipeable={swipeable}
        autoPlay={!!autoPlay}
        centerMode={!!centerMode}
        showDots={!!showDots}
        responsive={responsive || getResponsive(partiallyVisible)}
        containerClass={scrollbarPresent ? 'carousel-container-with-scrollbar' : 'container-with-dots'}
        afterChange={(_, { currentSlide }) => (setActiveGalleryItem ? setActiveGalleryItem(currentSlide) : null)}
      >
        {children}
      </Carousel>
    </SImageContainer>
  )
}
