import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import ProductCard from '../product-card'
import { Product } from '../../modules/normalize-product'
import useScreenSize from '../../lib/use-screen-size'
import window from '../../lib/window'

const Section = styled.section`
  margin: 0 0 48px;

  @media (min-width: 768px) {
    margin: 0 0 92px;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  max-width: 990px;
  padding: 0 0 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const SectionTitle = styled.div<{
  isMobile: boolean
}>`
  font: ${(props) => (props.isMobile ? `600 16px/1.5 'Montserrat', serif` : `700 40px/1 'Cormorant Garamond', serif`)};
  text-transform: ${(props) => (props.isMobile ? `uppercase` : `initial`)};
  text-align: center;
  margin: 0 0 12px -15px;

  & > span {
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: ${(props) => (props.isMobile ? `9px` : `10px`)};
      background: rgba(77, 190, 186, 0.3);
      position: absolute;
      bottom: ${(props) => (props.isMobile ? `0` : `6px`)};
      left: 0;
    }
  }
`

const SectionText = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;

  p {
    margin: 0 0 24px;
    @media (min-width: 768px) {
      margin: 0 0 28px;
    }
  }

  &_narrow {
    max-width: 400px;
    margin: 0 auto;
  }
`

const ProductCards = styled.div`
  max-width: 100%;
  margin: 10px auto 0;
  position: relative;

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
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

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
    height: auto;
    & > div {
      height: 100%;
    }
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`

const StyledSlider = styled(Slider)`
  margin: 0 -15px;
  padding-left: 10px;

  @media (min-width: 500px) {
    margin: 0;
    padding-left: 0;
  }

  .slick-list {
    padding: 0 20% 0 0 !important;
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
`

const ProgressWrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 36px 23px 0;

  @media (min-width: 768px) {
    max-width: 1020px;
    padding: 40px 38px 0;
  }
`

const Progress = styled.div`
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  background-image: linear-gradient(to right, #bdbdbd, #bdbdbd);
  background-repeat: no-repeat;
  background-size: ${(props: { progress: number }) => (props?.progress ? `${props?.progress}% 100%` : '0 100%')};
  transition: background-size 0.4s ease-in-out;
`

const ProgressLabel = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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

export type ProductsCarouselProps = {
  products: Array<Product>
  className?: ClassName
  title?: string
  titleHighlighted?: string
  subTitle?: string
  onSelectProduct: (product: Product) => void
}

export const ProductsCarousel = ({
  products,
  className,
  onSelectProduct,
  title,
  titleHighlighted,
  subTitle,
}: ProductsCarouselProps): React.ReactElement => {
  const screenSize = useScreenSize()
  const [progress, setProgress] = useState(0)

  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 832,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          /*centerMode: true,*/
        },
      },
    ],
    beforeChange(_: number, nextSlide: number) {
      const mockedProductLengthValue = 4
      const progressCalc = (nextSlide / (mockedProductLengthValue - 1)) * 100
      setProgress(progressCalc)
    },
  }

  return (
    <Section className={cn('ProductsCarousel', className)}>
      <Container>
        {!screenSize.greaterThenMedium && window?.location.pathname.match(/^\/products\/[^/]++$/i) ? (
          <SectionTitle isMobile={true}>
            <span>
              {title} {titleHighlighted}
            </span>
          </SectionTitle>
        ) : (
          <SectionTitle isMobile={false}>
            {title + ' '}
            <span>{titleHighlighted}</span>
          </SectionTitle>
        )}
        <SectionText>
          <p>{subTitle}</p>
        </SectionText>
        <ProductCards>
          <StyledSlider {...settings}>
            {products
              .filter((product) => product.image)
              .map((product) => (
                <ProductCard key={product.product_id} product={product} onClick={() => onSelectProduct(product)} />
              ))}
          </StyledSlider>
        </ProductCards>
      </Container>
      <ProgressWrapper>
        <Progress progress={progress}>
          <ProgressLabel>{`${progress}% completed`}</ProgressLabel>
        </Progress>
      </ProgressWrapper>
    </Section>
  )
}
