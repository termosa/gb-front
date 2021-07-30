import builderConfig from 'config/builder'
import { builder, Builder, BuilderContent } from '@builder.io/react'
import { MainPageLayout } from '@fragrantjewels/gravity-brands.components.main-page-layout/main-page-layout'
import BuilderIoPage from './BuilderIoPage'
import builderProductPage from './resolvers/builderProductPage'
import FjWild from '@components/FjWild'
import PotentialProducts from '@containers/PotentianProducts'
import RecommendedProducts from '@containers/RecommendedProducts'
import Product from '@containers/Product'
import React from 'react'

builder.init(builderConfig.apiKey)

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
  name: 'Products',
})

const ProductPage = ({ content }: {content: BuilderContent}) => {
  return (
    <MainPageLayout>
      <BuilderIoPage content={content} modelName={'product'} />
    </MainPageLayout>
  )
}

export const getStaticProps = builderProductPage()

export default ProductPage
