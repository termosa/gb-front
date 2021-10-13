import React from 'react'
import styled from 'styled-components'
import ProductCard from '../product-card'
import SiteSection from '../site-section'
import { Product } from '../../modules/normalize-product'

export type ProductsListProps = {
  products: Array<Product>
  onSelectProduct?: (product: Product) => void
}

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 16px;
  margin: 0 0 80px;

  @media (max-width: 1033px) {
    grid-gap: 32px 20px;
    margin: 0 20px 48px;
  }

  @media (max-width: 600px) {
    grid-gap: 12px 12px;
    margin: 0 22px 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const SProductCard = styled(ProductCard)`
  display: flex;
  padding: 0;
  min-width: 100px;
`

export const ProductsList = ({ products, onSelectProduct }: ProductsListProps): React.ReactElement => {
  return (
    <div>
      <SiteSection>
        <ProductsListContainer>
          {products.map((product) => (
            <SProductCard
              key={product.product_id}
              product={product}
              onClick={() => onSelectProduct && onSelectProduct(product)}
            />
          ))}
        </ProductsListContainer>
      </SiteSection>
    </div>
  )
}
