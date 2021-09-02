import React from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import { Product } from '../../modules/normalize-product'
import useScreenSize from '../../lib/use-screen-size'
import window from '../../lib/window'
import 'react-multi-carousel/lib/styles.css'
import { CarouselSlider } from '../../lib/carousel-slider'
import { ProductCard } from '../product-card'

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

  return (
    <Section className={cn('ProductsCarousel', className)}>
      <Container>
        {!screenSize.greaterThenMedium && window?.location.pathname.search('products') !== -1 ? (
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
        <CarouselSlider partiallyVisible={true} arrows={screenSize.greaterThenMedium}>
          {products
            .filter((product) => product.image)
            .map((product) => {
              return <ProductCard key={product.product_id} product={product} onClick={() => onSelectProduct(product)} />
            })}
        </CarouselSlider>
      </Container>
      {/* <ProgressWrapper>
        <Progress progress={progress}>
          <ProgressLabel>{`${progress}% completed`}</ProgressLabel>
        </Progress>
      </ProgressWrapper>*/}
    </Section>
  )
}
