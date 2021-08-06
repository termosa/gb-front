import React from 'react'
import { Builder, BuilderComponent } from '@builder.io/react'
import productPageProps, {
  ProductPageProps,
} from 'src/resolvers/productPageProps'
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
  //if (!product) throw new Error('Product not found')
  //if (!builderContent) throw new Error('Builder content is missing')

  return (
    <ProductContext.Provider value={product}>
      <BuilderComponent model="Product" content={builderContent} />
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
