import { builder, Builder } from '@builder.io/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CategoryShopCard } from '@fragrantjewels/gravity-brands.components.category-shop-card/category-shop-card'
import builderIoProps from './resolvers/builderIoProps'
import builderIoPaths from './resolvers/builderIoPaths'
import BuilderIoPage from './BuilderIoPage'
import { PromiseBar } from '@fragrantjewels/gravity-brands.components.promise-bar/promise-bar'
import { HeroGallery } from '@fragrantjewels/gravity-brands.components.hero-gallery/hero-gallery'
import { TrendingSection } from '@fragrantjewels/gravity-brands.components.trending-section/trending-section'
import { InnerCircleExclusive } from '../../gravity-brands/components/inner-circle-exclusive'
import { ReviewsSection } from '@fragrantjewels/gravity-brands.components.reviews-section/reviews-section'
import { ShopByProductsOverview } from '@fragrantjewels/gravity-brands.components.shop-by-products-overview/shop-by-products-overview'
import { InlineSignupForm } from '@fragrantjewels/gravity-brands.components.inline-signup-form/inline-signup-form'
import { Footer } from '@fragrantjewels/gravity-brands.components.footer/footer'
import { Header } from '../../gravity-brands/components/header'

builder.init('11f0313bca7a437dbb8b37ee02351718')

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'onSearch',
      type: 'function',
      defaultValue: '',
    },
  ],
})

Builder.registerComponent(HeroGallery, {
  name: 'Hero Gallery',
})

Builder.registerComponent(TrendingSection, {
  name: 'Trending Section',
  inputs: [
    {
      name: 'products',
      type: 'object',
      defaultValue: '',
    },
  ],
})

Builder.registerComponent(InnerCircleExclusive, {
  name: 'Inner Circle Exclusive',
  inputs: [
    {
      name: 'productTitle',
      type: 'string',
      defaultValue: 'Moon Magic',
    },
    {
      name: 'price',
      type: 'string',
      defaultValue: '$35.49',
    },
    {
      name: 'discountPrice',
      type: 'string',
      defaultValue: '$30.99',
    },
  ],
})

Builder.registerComponent(ReviewsSection, {
  name: 'Review Section',
  inputs: [
    {
      name: 'images',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'quote',
      type: 'string',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'author',
      type: 'string',
      defaultValue: 'Samanta H.',
    },
  ],
})

Builder.registerComponent(CategoryShopCard, {
  name: 'Category Shop Card',
  inputs: [
    {
      name: 'image',
      type: 'file',
      defaultValue: '',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Sample Title',
    },
    {
      name: 'subTitle',
      type: 'string',
      defaultValue: 'Sample Subtitle',
    },
  ],
})

Builder.registerComponent(PromiseBar, {
  name: 'Promise Bar',
})

Builder.registerComponent(ShopByProductsOverview, {
  name: 'Shop By Product Section',
  inputs: [
    {
      name: 'products',
      type: 'list',
      defaultValue: [
        { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg', product_id: 1 },
        { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg', product_id: 2 },
        { image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg', product_id: 3 },
      ],
      subFields: [
        {
          name: 'image',
          type: 'file',
          defaultValue: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
        },
        {
          name: 'product_id',
          type: 'string',
          defaultValue: 1,
        },
      ],
    },
  ],
})

Builder.registerComponent(InlineSignupForm, {
  name: 'Inline Signup Form',
})

Builder.registerComponent(Footer, {
  name: 'Footer',
})

export const getStaticProps: GetStaticProps = builderIoProps('home', 5)

export const getStaticPaths: GetStaticPaths = builderIoPaths('home', true)

export default BuilderIoPage
