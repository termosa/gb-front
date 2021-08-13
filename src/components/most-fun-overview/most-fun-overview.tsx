import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'

export interface MostFunOverviewProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
}

const SMostFunSection = styled.section`
  background: rgba(253, 251, 249, 1);
  background: linear-gradient(
    0deg,
    rgba(253, 251, 249, 1) 0%,
    rgba(253, 251, 249, 1) 50%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  padding-top: 34px;
  @media (min-width: 768px) {
    padding: 76px 0 48px;
  }
`

const SMostFunContainer = styled.div`
  max-width: 990px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const PrevArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  top: 50%;
  cursor: pointer;

  transform: rotate(45deg);
  left: -12px;

  @media (min-width: 768px) {
    left: -15px;
  }
`
const NextArrow = styled.button`
  font-size: 0;
  line-height: 1;
  position: absolute;
  width: 17px;
  height: 17px;
  border: 0;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  top: 50%;
  cursor: pointer;
  transform: rotate(-135deg);
  right: -12px;

  @media (min-width: 768px) {
    right: -15px;
  }
`

const StyledSlider = styled(Slider)`
  margin: 0 auto;

  @media (min-width: 420px) {
    max-width: 75vw;
  }

  @media (min-width: 768px) {
    max-width: 60vw;
  }

  @media (min-width: 991px) {
    max-width: unset;
  }

  .slick-list {
    @media (min-width: 500px) {
      padding: 0;
    }
  }

  .slick-slider {
    padding: 0 10px;
  }

  .slick-track {
    display: flex;
  }

  .app-h-product-card {
    float: none;
    height: auto;
    display: flex;
  }

  .slick-slide {
    img {
      display: block;
      margin: 0 auto 17px;
      height: 80vw;

      @media (min-width: 420px) {
        height: 60vw;
      }

      @media (min-width: 768px) {
        height: 50vw;
      }

      @media (min-width: 991px) {
        height: auto;
        margin-bottom: 20px;
      }
    }
  }

  & > button {
    top: 40vw !important;

    @media (min-width: 420px) {
      top: 30vw !important;
    }

    @media (min-width: 768px) {
      top: 25vw !important;
    }
  }

  .slick-dots {
    display: flex !important;
    position: initial;
    padding: 22px 0;

    button:before {
      background-color: #4dbeba;
      opacity: 0.3;
    }

    .slick-active button:before {
      background-color: #4dbeba;
      opacity: 0.6;
    }
  }

  .slick-prev {
    left: 9px;
    @media (min-width: 420px) {
      left: -12px;
    }
  }

  .slick-next {
    right: 9px;
    @media (min-width: 420px) {
      right: -12px;
    }
  }
`

const SSectionTitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 24px;
`

const SSectionTitlePart = styled.span`
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    width: 100%;
    height: 10px;
    background: rgba(77, 190, 186, 0.3);
    position: absolute;
    bottom: 6px;
    left: 0;
  }
`

const SSlideTitle = styled.h4`
  margin: 0 auto 15px;
  padding: 0 0 12px;
  text-align: center;
  position: relative;
  font: 700 28px/1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  font-variant-numeric: lining-nums;
  &:after {
    content: '';
    background-color: #9059c8;
    height: 1px;
    width: 52px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 823px) {
    width: 100%;
  }
`

const SSlideText = styled.div`
  font: 400 16px/1.5 'Montserrat', serif;
  line-height: 1.5;
  text-align: center;
  p {
    margin: 0;
  }
`

export function MostFunOverview({ className }: MostFunOverviewProps): React.ReactElement {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 0,
    dots: false,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  }

  return (
    <SMostFunSection className={cn('MostFunOverview', className)}>
      <SMostFunContainer>
        <SSectionTitle>
          The{' '}
          <span>
            <SSectionTitlePart>most fun</SSectionTitlePart>
          </span>{' '}
          you’ve <br />
          ever had relaxing
        </SSectionTitle>
        <StyledSlider {...settings}>
          <div>
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-1.jpg" alt="" />
            <SSlideTitle>Guilt Free Ingredients</SSlideTitle>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>

          <div>
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-2.jpg" alt="" />
            <SSlideTitle>Win $10,000 Ring</SSlideTitle>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>

          <div>
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-3.jpg" alt="" />
            <SSlideTitle>Collectible Jewelry</SSlideTitle>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>
        </StyledSlider>
      </SMostFunContainer>
    </SMostFunSection>
  )
}
