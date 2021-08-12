import React from 'react'
import ProductCard from 'gravity-brands/components/product-card'
import { Product } from 'gravity-brands/modules/normalize-product'
import SiteSection from 'gravity-brands/components/site-section'
import styled from 'styled-components'

export type ProductsListProps = {
  products: Array<Product>
  onSelectProduct?: (productId: number) => void
}

const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
