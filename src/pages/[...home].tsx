import { builder, Builder } from '@builder.io/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Header } from '@fragrantjewels/gravity-brands.components.header'
import builderIoProps from './resolvers/builderIoProps'
import builderIoPaths from './resolvers/builderIoPaths'
import BuilderIoPage from './BuilderIoPage'
import config from 'config/builder'
import { HeroGallery } from '@fragrantjewels/gravity-brands.components.hero-gallery'
import { InformationOverview } from '@fragrantjewels/gravity-brands.components.information-overview'
import { CategoryShopCard } from '@fragrantjewels/gravity-brands.components.category-shop-card'
import { ReviewsSection } from '@fragrantjewels/gravity-brands.components.reviews-section'
import { ShopByProductsOverview } from '@fragrantjewels/gravity-brands.components.shop-by-products-overview'
import { PromiseBar } from '@fragrantjewels/gravity-brands.components.promise-bar'
import { InlineSignupForm } from '@fragrantjewels/gravity-brands.components.inline-signup-form'
import { FollowUs } from '../../gravity-brands/components/follow-us'
import { Footer } from '@fragrantjewels/gravity-brands.components.footer'

builder.init(config.apiKey)

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
  inputs: [
    {
      name: 'slides',
      type: 'list',
      subFields: [
        {
          name: 'topText',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'centerFirstText',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'centerSecondText',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'bottomText',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'buttonText',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'buttonLink',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'backgroundImg',
          type: 'string',
          defaultValue: '',
        },
      ],
      defaultValue: [
        {
          topText: 'MINISUBLINER',
          centerFirstText: 'SAVOR the',
          centerSecondText: 'quiet MOMENTS',
          bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
          buttonText: 'SHOP NOW',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          backgroundImg: '',
        },
      ],
    },
  ],
})

Builder.registerComponent(CategoryShopCard, {
  name: 'Category Shop Card',
  inputs: [
    {
      name: 'image',
      type: 'string',
      defaultValue: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Subtitle',
    },
    {
      name: 'link',
      type: 'string',
      defaultValue: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
    },
  ],
})

Builder.registerComponent(InformationOverview, {
  name: 'Information Overview',
  inputs: [
    {
      name: 'cards',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: '',
        },
      ],
      defaultValue: [
        {
          image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          title: 'Info Card Title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
        },
        {
          image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          title: 'Info Card Title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
        },
        {
          image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
          title: 'Info Card Title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
        },
      ],
    },
  ],
})

Builder.registerComponent(ReviewsSection, {
  name: 'Review Section',
  inputs: [
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
    {
      name: 'images',
      type: 'list',
      defaultValue: [
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeed.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitan.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allure.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beauty-insider.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/popsugar.png',
      ],
    },
  ],
})

Builder.registerComponent(ShopByProductsOverview, {
  name: 'Shop By Product Overview',
  inputs: [
    {
      name: 'image',
      type: 'string',
      defaultValue: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
    },
    {
      name: 'buttonLink',
      type: 'string',
      defaultValue: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Title',
    },
  ],
})

Builder.registerComponent(PromiseBar, {
  name: 'Promise Bar',
})

Builder.registerComponent(InlineSignupForm, {
  name: 'Inline Signup Form',
  inputs: [
    {
      name: 'onSignup',
      type: 'func',
      defaultValue: '(email) => console.log(email)',
    },
  ],
})

Builder.registerComponent(FollowUs, {
  name: 'Follow Us',
})

Builder.registerComponent(Footer, {
  name: 'Footer',
})

export const getStaticProps: GetStaticProps = builderIoProps('home', 5)

export const getStaticPaths: GetStaticPaths = builderIoPaths('home', true)

export default BuilderIoPage
