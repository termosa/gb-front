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
  margin-bottom: 33px;
  @media (min-width: 768px) {
    padding: 76px 0 48px;
    margin-bottom: 100px;
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
    max-width: 55vw;
  }

  @media (min-width: 991px) {
    max-width: unset;
  }

  .slick-list {
    @media (min-width: 500px) {
      padding: 0;
    }
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
      <div className="app-h-container">
        <h2 className="app-h-section__title">
          The{' '}
          <span>
            <span className="app-h-section__title_part">most fun</span>
          </span>{' '}
          you’ve <br />
          ever had relaxing
        </h2>
        <StyledSlider {...settings}>
          <div className="app-h-mf-slider_slide">
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-1.jpg" alt="" />
            <h4 className="app-h-mf-card__title">Guilt Free Ingredients</h4>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>

          <div className="app-h-mf-slider_slide">
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-2.jpg" alt="" />
            <h4 className="app-h-mf-card__title">Win $10,000 Ring</h4>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>

          <div className="app-h-mf-slider_slide">
            <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-3.jpg" alt="" />
            <h4 className="app-h-mf-card__title">Collectible Jewelry</h4>
            <SSlideText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                placerat arcu. Ipsum est felis varius faucibus praesent convallis.
              </p>
            </SSlideText>
          </div>
        </StyledSlider>
      </div>
    </SMostFunSection>
  )
}
