import React from 'react'
import homePageProps, { HomePageProps } from '../resolvers/homePageProps'
import CustomerContext from '../modules/customer-context'
import MainPageLayout from '../lib/main-page-layout'
import HeroGallery from '../lib/hero-gallery'
import ReviewsSection from '../components/reviews-section'
import ProductCarouselContainer from '../containers/ProductCarousel'
import InnerCircleExclusiveContainer from '../containers/InnerCircleExclusive'
import InformationOverview from '../lib/information-overview'
import ShopByProductsOverview from '../components/shop-by-products-overview'
import { CategoryShopCardsOverview } from '../lib/category-shop-overview'
import { PromiseBar } from '../components/promise-bar'
import { InlineSignupForm } from '../components/inline-signup-form'
import YotpoGallery from '../lib/yotpo-gallery'

export default function HomePage({ activeCustomer }: HomePageProps): React.ReactElement {
  return (
    <CustomerContext.Provider value={activeCustomer || undefined}>
      <MainPageLayout>
        <HeroGallery
          slides={[
            {
              topText: 'MINISUBLINER',
              centerFirstText: 'SAVOR the',
              centerSecondText: 'MOMENTS',
              bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
              buttonText: 'SHOP NOW',
              buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
              backgroundImg: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg',
            },
          ]}
        />
        <ProductCarouselContainer
          collectionId={261358780494}
          title="Today's Top Picks"
          subTitle="Indulge in luxurious new and best selling collections."
        />
        <InnerCircleExclusiveContainer
          productId={6542141194318}
          slideImages={[
            { slide: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg' },
            { slide: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg' },
          ]}
          title="Get addicted to me-time"
          subTitle="Join the Inner Circle for exciting new collections every month, available exclusively to members."
          topButtonText="Get Started"
          buttonLink="/products/6542141194318"
        />
        <InformationOverview
          title="The most fun you've ever had relaxing"
          cards={[
            {
              title: 'Guilt Free Ingredients',
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
            },
            {
              title: 'Win $10,000 Ring',
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
            },
            {
              title: 'Collectible Jewelry',
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
            },
          ]}
        />
        <CategoryShopCardsOverview
          leftCard={{
            image:
              'https://cdn.shopify.com/s/files/1/0548/5721/products/ScreenShot2021-02-02at12.52.00PMcopy_grande.jpg?v=1629301723',
            title: 'August Box',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          }}
          rightCard={{
            image:
              'https://cdn.shopify.com/s/files/1/0548/5721/products/ScreenShot2021-02-02at12.47.24PMcopy_grande.jpg?v=1629301723',
            title: 'The Jewelry',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          }}
        />
        <ReviewsSection
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          author="Samanta H."
        />
        <ShopByProductsOverview
          title="Shop by Product"
          products={[
            {
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
              buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
              buttonText: 'CANDLES',
            },
            {
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
              buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
              buttonText: 'BODY SCRUBS',
            },
            {
              image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
              buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
              buttonText: 'BUNDLES',
            },
          ]}
        />
        <PromiseBar />
        <InlineSignupForm onSignup={() => Promise.resolve()} />
        <YotpoGallery galleryId="5dd5da2416fa290bf56b2085" />
      </MainPageLayout>
    </CustomerContext.Provider>
  )
}

export const getServerSideProps = homePageProps()
