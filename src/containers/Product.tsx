import React, { useContext, useEffect, useRef } from 'react'
import { Product as ProductType } from '../modules/normalize-product'
import ProductContext from '../modules/product-context'
import window from '../lib/window'
import { VerticalGallery } from '../components/vertical-gallery'
import styled from 'styled-components'
import { ProductInfo } from '../lib/product-info'

/*const SProductBreadcrumbs = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 28px 16px 20px;
  }

  & > span {
    font-weight: 400;
  }
`*/

const SProductContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`

const SPdpRowWrapper = styled.div`
  padding: 10px 16px 0;
`

const SPdpRow = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`

const Product = (): null | React.ReactElement => {
  const product = useContext<ProductType | undefined>(ProductContext)

  const addToCartRef = useRef<HTMLButtonElement>(null)

  const handlePosition = () => {
    const position = addToCartRef.current?.getBoundingClientRect()
    if (!position) {
      return
    }
    localStorage.setItem(
      'isFloatingCtaVisible',
      JSON.stringify(position.top <= 150 && window?.location.pathname.includes('/products/'))
    )
  }

  useEffect(() => {
    window?.addEventListener('scroll', handlePosition)
    return () => {
      window?.removeEventListener('scroll', handlePosition)
    }
  }, [])

  useEffect(() => {
    handlePosition()
  }, [])

  if (!product) {
    return null
  }

  return (
    <>
      {/*<SProductContainer>
        <SProductBreadcrumbs>
          Home / All / Bundles / <span>{product.title.split('-')[0]}</span>
        </SProductBreadcrumbs>
      </SProductContainer>*/}
      <SProductContainer>
        <SPdpRowWrapper>
          <SPdpRow>
            <VerticalGallery />
            <ProductInfo addToCartRef={addToCartRef} />
          </SPdpRow>
        </SPdpRowWrapper>
      </SProductContainer>
    </>
  )
}

export default Product
