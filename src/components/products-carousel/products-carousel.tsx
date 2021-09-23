import React, { useRef } from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import { Product } from '../../modules/normalize-product'
import useScreenSize from '../../lib/use-screen-size'
import window from '../../lib/window'
import Slider from '../../lib/slider'
import ProductCard from '../product-card'
import Carousel from 'react-multi-carousel'

const Section = styled.section`
  margin: 0 0 48px;

  @media (min-width: 768px) {
    margin: 30px 0 92px;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  position: relative;
  max-width: 990px;
  padding: 0 0 0 15px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 960px;
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
  left: -8px;
  button {
    transform: translateX(5px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -8px;
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
  const carouselRef = useRef<Carousel>(null)
  const sliderSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2.6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.6,
    },
  }

  return (
    <Section className={cn('ProductsCarousel', className)}>
      <Container>
        {!screenSize.greaterThanMedium &&
        window?.location.pathname &&
        window?.location.pathname.search('products') !== -1 ? (
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
        <Slider
          responsive={sliderSettings}
          scrollbarPresent={!!screenSize.greaterThanMedium}
          arrows={!!screenSize.greaterThanMedium}
          customLeftArrow={
            <SPrevArrow>
              <SArrowButton />
            </SPrevArrow>
          }
          customRightArrow={
            <SNextArrow>
              <SArrowButton />
            </SNextArrow>
          }
          carouselRef={carouselRef}
          partiallyVisible={true}
        >
          {products
            .filter((product) => product.image)
            .map((product) => {
              return <ProductCard key={product.product_id} product={product} onClick={() => onSelectProduct(product)} />
            })}
        </Slider>
      </Container>
      {/* <ProgressWrapper>
        <Progress progress={progress}>
          <ProgressLabel>{`${progress}% completed`}</ProgressLabel>
        </Progress>
      </ProgressWrapper>*/}
    </Section>
  )
}
