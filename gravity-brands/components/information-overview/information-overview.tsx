import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { InformationCard } from 'gravity-brands/components/information-card'
import Slider, { Settings } from 'react-slick'

export type InformationOverviewProps = {
  className?: string
  titleFirst: string
  titleSecond: string
  cards: InformationCard[]
}

const SWrapper = styled.section`
  text-align: center;
  padding: 0 30px;
  max-width: 1020px;
  margin: 0 auto;
`

const STitle = styled.h2`
  font: 700 40px/1.1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 auto 10px;
  text-align: center;
`

const PrevArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(45deg);
  left: 1px;
  font-size: 0;
  z-index: 13;
  top: 47%;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`

const NextArrow = styled.button`
  display: block;
  transform: translateY(-50%) rotate(-135deg);
  right: 1px;
  font-size: 0;
  z-index: 13;
  top: 47%;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
`

const SCardsWrapper = styled.div`
  padding: 10px 0 38px;
  display: flex;
  justify-content: space-around;

  * {
    box-sizing: border-box;
  }

  .slick-slider {
    opacity: 1;
    padding: 10px 0 0;
    margin: 0 auto;
    max-width: 414px;
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;

    @media (min-width: 768px) {
      max-width: 100%;
      padding: 8px 0 0;
    }
  }

  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-arrow {
    top: 150px;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-slider .slick-track {
    padding: 0 0 16px;
    @media (min-width: 768px) {
      padding: 0 0 28px;
    }
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    outline: none;
    position: relative;
    margin: 0 0 50px;
    height: 100%;
    min-height: 1px;
    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .slick-slider .slick-slide {
    margin: 0 25px;
    @media (min-width: 768px) {
      margin: 0 16px;
    }
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-style: none;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .slick-prev {
    left: 9px;
    @media (min-width: 500px) {
      left: -12px;
    }
  }

  .slick-next {
    right: 9px;
    @media (min-width: 500px) {
      right: -12px;
    }
  }
`

export function InformationOverview({
  className,
  titleFirst,
  titleSecond,
  cards,
}: InformationOverviewProps): React.ReactElement {
  const [isLargeScreen, setLargeScreen] = useState<boolean>()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setLargeScreen(window.innerWidth > 992)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setLargeScreen(window.innerWidth > 992)
      })
    }
  }, [setLargeScreen])

  const sliderSettings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        },
      },
    ],
  }

  return (
    <SWrapper className={cn('InformationOverview', className)}>
      <STitle>
        {titleFirst}
        <br />
        {titleSecond}
      </STitle>
      <SCardsWrapper>
        {isLargeScreen ? (
          cards.map((card) => <InformationCard key={card.image + card.title} card={card} />)
        ) : (
          <Slider {...sliderSettings}>
            {cards.map((card) => (
              <InformationCard key={card.image + card.title} card={card} />
            ))}
          </Slider>
        )}
      </SCardsWrapper>
    </SWrapper>
  )
}
