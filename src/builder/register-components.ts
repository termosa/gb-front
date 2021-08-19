import { Builder, withChildren } from '@builder.io/react'

import registerSiteHeader from '../lib/site-header/site-header.builder'
import registerSiteFooter from '../lib/site-footer/site-footer.builder'
import registerHeroGallery from '../lib/hero-gallery/hero-gallery.builder'
import registerInformationOverview from '../lib/information-overview/information-overview.builder'
import registerMainPageLayout from '../lib/main-page-layout/main-page-layout.builder'
import registerYotpoReviews from '../lib/yotpo-reviews/yotpo-reviews.builder'

import ReviewsSection from '../components/reviews-section'
import ShopByProductsOverview from '../components/shop-by-products-overview'
import PromiseBar from '../components/promise-bar'
import InlineSignupForm from '../components/inline-signup-form'
import FollowUs from '../components/follow-us'
import SiteSection from '../components/site-section'
import InnerCircleExclusiveContainer from '../containers/InnerCircleExclusive'
import ProductCarouselContainer from '../containers/ProductCarousel'
import registerCategoryShopOverview from '../lib/category-shop-overview/category-shop-overview.builder'

export default function registerComponents(): void {
  registerSiteHeader()
  registerSiteFooter()
  registerHeroGallery()
  registerInformationOverview()
  registerMainPageLayout()
  registerCategoryShopOverview()
  registerYotpoReviews()

  Builder.registerComponent(ReviewsSection, {
    name: 'Social Reviews',
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
    name: 'Image Block x3',
    inputs: [
      {
        name: 'products',
        type: 'list',
        subFields: [
          {
            name: 'image',
            type: 'file',
            defaultValue: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
          },
          {
            name: 'buttonText',
            type: 'string',
            defaultValue: 'Button Text',
          },
          {
            name: 'buttonLink',
            type: 'string',
            defaultValue: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          },
        ],
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Shop by Product',
      },
    ],
  })

  Builder.registerComponent(PromiseBar, {
    name: 'Our Promise',
  })

  Builder.registerComponent(InlineSignupForm, {
    name: 'Klaviyo sign-up form',
    inputs: [
      {
        name: 'onSignup',
        type: 'func',
        defaultValue: '(email) => console.log(email)',
      },
    ],
  })

  Builder.registerComponent(FollowUs, {
    name: 'Yotpo Instagram Tool',
  })

  Builder.registerComponent(InnerCircleExclusiveContainer, {
    name: 'Member Product Highlight',
    inputs: [
      {
        name: 'productId',
        type: 'number',
        defaultValue: 10419937998,
      },
      {
        name: 'slideImages',
        type: 'list',
        subFields: [
          {
            name: 'slide',
            type: 'file',
            defaultValue: '',
          },
        ],
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Get addicted to me-time',
      },
      {
        name: 'subTitle',
        type: 'string',
        defaultValue:
          'Join the Inner Circle for exciting new collections every month, available exclusively to members',
      },
      {
        name: 'topButtonText',
        type: 'string',
        defaultValue: 'GET STARTED',
      },
      {
        name: 'buttonLink',
        type: 'string',
        defaultValue: '',
      },
    ],
  })

  Builder.registerComponent(ProductCarouselContainer, {
    name: 'Product Carousel',
    inputs: [
      {
        name: 'collectionId',
        type: 'number',
        defaultValue: '174027178074',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Collection Title',
        required: true,
      },
      {
        name: 'subTitle',
        type: 'string',
        required: false,
      },
    ],
  })

  Builder.registerComponent(withChildren(SiteSection), {
    name: 'SiteSection',
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Text',
          options: { text: 'I am child text block!' },
        },
      },
    ],
  })
}
