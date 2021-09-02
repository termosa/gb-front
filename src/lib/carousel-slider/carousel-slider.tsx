import React, { useRef } from 'react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import styled from 'styled-components'

const getResponsive = (isPartiallyVisible: boolean): ResponsiveType => {
  return {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: isPartiallyVisible ? 3 : 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: isPartiallyVisible ? 2.5 : 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: isPartiallyVisible ? 1.5 : 1,
    },
  }
}

const SImageContainer = styled.div`
  padding: 15px 0;

  input[type='range'] {
    -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #efefef;
    border: none;
    border-radius: 2px;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
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
    padding-bottom: 20px;
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
  bottom: 0;
  width: 100%;
  padding: 0 20px 0 22px;

  & > input {
    width: 100%;
  }
`

const SCustomDot = styled.div<{
  isActive: boolean
}>`
  background-color: #ffffff;
  opacity: ${(props) => (props.isActive ? 0.95 : 0.6)};
  width: 10px;
  height: 10px;
`

const SPrevArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  transform: rotate(45deg);
  left: 3px;
`
const SNextArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  transform: rotate(-135deg);
  right: 3px;
`

type SliderProps = {
  partiallyVisible: boolean
  scrollbarPresent?: boolean
  dotsPresent?: boolean
  arrows: boolean | null
  itemClass?: string
  children?: JSX.Element[]
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

export const CarouselSlider = ({
  scrollbarPresent,
  dotsPresent,
  partiallyVisible,
  arrows,
  itemClass,
  children,
}: SliderProps): React.ReactElement => {
  const carouselRef = useRef<Carousel | null>(null)

  const CustomSlider = ({ carouselState }: CarouselState) => {
    let value = 0
    const carouselItemWidth = carouselRef.current?.state?.itemWidth || 0
    if (!carouselRef.current) {
      return null
    }
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
        ssr={false}
        ref={carouselRef}
        arrows={!!arrows}
        customLeftArrow={<SPrevArrow />}
        customRightArrow={<SNextArrow />}
        customButtonGroup={scrollbarPresent ? <CustomSlider /> : null}
        customDot={dotsPresent ? <CustomDot /> : null}
        itemClass={itemClass || 'slider-image-item'}
        infinite={!scrollbarPresent}
        responsive={getResponsive(partiallyVisible)}
        containerClass={partiallyVisible ? 'carousel-container-with-scrollbar' : 'container-with-dots'}
      >
        {children}
      </Carousel>
    </SImageContainer>
  )
}
