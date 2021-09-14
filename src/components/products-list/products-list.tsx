import React from 'react'
import styled from 'styled-components'
import ProductCard from '../product-card'
import SiteSection from '../site-section'
import { Product } from '../../modules/normalize-product'

export type ProductsListProps = {
  products: Array<Product>
  onSelectProduct?: (handle: string) => void
}

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 16px;
  }
`

const SProductCard = styled(ProductCard)`
  display: flex;
  padding: 0;
`

export const ProductsList = ({ products, onSelectProduct }: ProductsListProps): React.ReactElement => (
  <SiteSection>
    <ProductsListContainer>
      {products.map((product) => (
        <SProductCard
          key={product.product_id}
          product={product}
          onClick={() => onSelectProduct && onSelectProduct(product.handle)}
        />
      ))}
    </ProductsListContainer>
  </SiteSection>
)
