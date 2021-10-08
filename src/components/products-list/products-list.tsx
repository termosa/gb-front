import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProductCard from '../product-card'
import SiteSection from '../site-section'
import { Product as ProductType, Product } from '../../modules/normalize-product'
import AddToCartModal from '../add-to-cart-modal'
import ProductContext from '../../modules/product-context'

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
    grid-gap: 32px 8px;
    margin: 0 16px 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const SProductCard = styled(ProductCard)`
  display: flex;
  padding: 0;
  min-width: 100px;
`

export const ProductsList = ({ products, onSelectProduct }: ProductsListProps): React.ReactElement => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [choosedProduct, setChoosedProduct] = useState(useContext<ProductType | undefined>(ProductContext))
  const onChooseProduct = (product: Product) => {
    setChoosedProduct(product)
    setModalVisible(true)
  }
  return (
    <div>
      <SiteSection>
        <ProductsListContainer>
          {products.map((product) => (
            <SProductCard
              key={product.product_id}
              product={product}
              onClick={() => onSelectProduct && onSelectProduct(product)}
              onProductButtonClick={() => {
                onChooseProduct(product)
              }}
            />
          ))}
        </ProductsListContainer>
      </SiteSection>
      <AddToCartModal isModalShow={isModalVisible} setModal={setModalVisible}>
        {choosedProduct && choosedProduct.product_id && (
          <div>
            <h1>Title {choosedProduct.product_id}</h1>
            <div>Text</div>
          </div>
        )}
      </AddToCartModal>
    </div>
  )
}
