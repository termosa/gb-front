import React from 'react'
import { Builder, BuilderComponent } from '@builder.io/react'
import productPageProps, { ProductPageProps } from '../../resolvers/productPageProps'
import registerComponents from '../../builder/register-components'
import FjWild from '../../components/fj-wild'
import PotentialProducts from '../../containers/PotentianProducts'
import RecommendedProducts from '../../containers/RecommendedProducts'
import Product from '../../containers/Product'
import ProductContext from '../../modules/product-context'

registerComponents()

Builder.registerComponent(FjWild, {
  name: 'Product Yotpo Instagram Tool',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'FJ in the wild',
    },
    {
      name: 'subTitle',
      type: 'string',
      defaultValue: 'See our products in action on customers just like you.',
    },
  ],
})

Builder.registerComponent(PotentialProducts, {
  name: 'Potential Products',
})

Builder.registerComponent(RecommendedProducts, {
  name: 'Product Recommendation Carousel',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Recommended for you',
    },
    {
      name: 'collectionId',
      type: 'number',
      required: false,
      defaultValue: '',
    },
  ],
})

Builder.registerComponent(Product, {
  name: 'Product',
})

export default function ProductPage({ product, builderContent }: ProductPageProps): React.ReactElement {
  if (!product) throw new Error('Product not found')

  return (
    <ProductContext.Provider value={product}>
      <BuilderComponent model="Product" content={builderContent} />
    </ProductContext.Provider>
  )
}

export const getServerSideProps = productPageProps()
