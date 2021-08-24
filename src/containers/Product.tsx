import React, { useContext, useEffect, useRef, useState } from 'react'
import { Product as ProductType } from '../modules/normalize-product'
import ProductContext from '../modules/product-context'
import window from '../lib/window'
import { VerticalGallery } from '../components/vertical-gallery'
import styled from 'styled-components'
import { ProductInfo } from '../lib/product-info'

const SProductBreadcrumbs = styled.div`
  padding: 16px 0;

  @media (min-width: 768px) {
    padding: 28px 0 20px;
  }
`

const SProductContainer = styled.div`
  padding: 0 15px;
  max-width: 1020px;
  margin: 0 auto;
`

const SPdpRowWrapper = styled.div`
  padding-top: 10px;

  .pdp-row {
    @media (min-width: 768px) {
      display: flex;
      width: 100%;
    }
  }
`

const Product = (): null | React.ReactElement => {
  const product = useContext<ProductType | undefined>(ProductContext)

  const [activeGalleryItem, setActiveGalleryItem] = useState<number | null>(0)
  const addToCartRef = useRef<HTMLButtonElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const handlePosition = () => {
    const position = addToCartRef.current?.getBoundingClientRect()
    if (!position) {
      return
    }
    localStorage.setItem('isFloatingCtaVisible', JSON.stringify(position.top <= 150))
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
      <SProductContainer>
        <SProductBreadcrumbs>
          Home / All / Bundles / <span>{product.title.split('-')[0]}</span>
        </SProductBreadcrumbs>
      </SProductContainer>
      <SProductContainer>
        <SPdpRowWrapper>
          <div className="pdp-row">
            <VerticalGallery
              activeGalleryItem={activeGalleryItem}
              setActiveGalleryItem={setActiveGalleryItem}
              galleryRef={galleryRef}
            />
            <ProductInfo addToCartRef={addToCartRef} />
          </div>
        </SPdpRowWrapper>
      </SProductContainer>
    </>
  )
}

export default Product
