import React from 'react'
import { Builder, BuilderComponent } from '@builder.io/react'
import productPageProps, { ProductPageProps } from 'src/resolvers/productPageProps'
import 'src/builder/register-components'
import FjWild from '@components/FjWild'
import PotentialProducts from '@containers/PotentianProducts'
import RecommendedProducts from '@containers/RecommendedProducts'
import Product from '@containers/Product'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'

Builder.registerComponent(FjWild, {
  name: 'FJ Wild',
})

Builder.registerComponent(PotentialProducts, {
  name: 'Potential Products',
})

Builder.registerComponent(RecommendedProducts, {
  name: 'Recommended Products',
})

Builder.registerComponent(Product, {
  name: 'Product',
})

export default function ProductPage({ product, builderContent }: ProductPageProps): React.ReactElement {
  if (!product) {
    console.error('Product is missing')
    return <h1>404 Not found</h1>
  }

  if (!builderContent) {
    console.error('Builder content is missing')
    return <h1>404 Not found</h1>
  }

  return (
    <ProductContext.Provider value={product}>
      <BuilderComponent model="Product" content={builderContent} />
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
