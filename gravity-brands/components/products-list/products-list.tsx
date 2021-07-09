import React from 'react'
import ProductCard, { Product } from '@fragrantjewels/gravity-brands.components.product-card'
import SiteSection from '@fragrantjewels/gravity-brands.components.site-section'
import styled from 'styled-components'

export type { Product } from '@fragrantjewels/gravity-brands.components.product-card'

export type ProductsListProps = {
  products: Array<Product>
  onSelectProduct?: (productId: number) => void
}

const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const SProductCard = styled(ProductCard)`
  width: 30%;

  @media (min-width: 500px) {
    padding: 0 0 40px 0;
  }

  @media (max-width: 900px) {
    width: 48%;
  }
`

export const ProductsList = ({ products, onSelectProduct }: ProductsListProps): React.ReactElement => (
  <SiteSection>
    <ProductsListContainer>
      {products.map((product) => (
        <SProductCard
          key={product.product_id}
          product={product}
          onClick={() => onSelectProduct && onSelectProduct(product.product_id)}
        />
      ))}
    </ProductsListContainer>
  </SiteSection>
)
