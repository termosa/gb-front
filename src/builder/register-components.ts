import { Builder, withChildren } from '@builder.io/react'
import Header from 'gravity-brands/components/header'
import HeroGallery from 'gravity-brands/components/hero-gallery'
import InformationOverview from 'gravity-brands/components/information-overview'
import CategoryShopCard from 'gravity-brands/components/category-shop-card'
import ReviewsSection from 'gravity-brands/components/reviews-section'
import ShopByProductsOverview from 'gravity-brands/components/shop-by-products-overview'
import PromiseBar from 'gravity-brands/components/promise-bar'
import InlineSignupForm from 'gravity-brands/components/inline-signup-form'
import FollowUs from 'gravity-brands/components/follow-us'
import Footer from 'gravity-brands/components/footer'
import SiteSection from 'gravity-brands/components/site-section'
import InnerCircleExclusiveContainer from '../containers/InnerCircleExclusive'
import ProductCarouselContainer from '@containers/ProductCarousel'
import MainPageLayout from 'gravity-brands/components/main-page-layout'
import YotpoComments from 'gravity-brands/components/yotpo-comments'

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
          type: 'file',
          defaultValue: '',
        },
      ],
      defaultValue: [
        {
          topText: 'MINISUBLINER',
          centerFirstText: 'SAVOR the',
          centerSecondText: 'MOMENTS',
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
      type: 'file',
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
      name: 'titleFirst',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'titleSecond',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'cards',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
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
      name: 'products',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
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

Builder.registerComponent(InnerCircleExclusiveContainer, {
  name: 'Inner Circle Exclusive',
  inputs: [
    {
      name: 'productId',
      type: 'number',
      defaultValue: 10419937998,
    },
    {
      name: 'frontImage',
      type: 'string',
      defaultValue: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img.jpg',
    },
    {
      name: 'sideImage',
      type: 'string',
      defaultValue: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img-jewelry.jpg',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Get addicted to me-time',
    },
    {
      name: 'subTitle',
      type: 'string',
      defaultValue: 'Join the Inner Circle for exciting new collections every month, available exclusively to members',
    },
    {
      name: 'topButtonText',
      type: 'string',
      defaultValue: 'GET STARTED',
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

Builder.registerComponent(withChildren(MainPageLayout), {
  name: 'MainPageLayout',
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: { text: 'Put page content here' },
      },
    },
  ],
})

Builder.registerComponent(YotpoComments, {
  name: 'YotpoComments',
  inputs: [
    {
      name: 'id',
      type: 'number',
      defaultValue: '',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Product name',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'string',
      defaultValue: '',
      required: true,
    },
    {
      name: 'productUrl',
      type: 'string',
      defaultValue: '',
      required: false,
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: '',
      required: false,
    },
  ],
})
