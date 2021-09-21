import React from 'react'
import homePageProps, { HomePageProps } from '../resolvers/homePageProps'
import MainPageLayout from '../lib/main-page-layout'
import HeroGallery from '../lib/hero-gallery'
import ProductsCarousel from '../components/products-carousel'
import ReviewsSection from '../components/reviews-section'
import InnerCircleExclusive from '../components/inner-circle-exclusive'
import InformationOverview from '../lib/information-overview'
import ShopByProductsOverview from '../components/shop-by-products-overview'
import CategoryShopCardsOverview from '../lib/category-shop-overview'
import PromiseBar from '../components/promise-bar'
import InlineSignupForm from '../components/inline-signup-form'
import YotpoGallery from '../lib/yotpo-gallery'
import navigate from '../lib/navigate'
import addCartItem from '../lib/add-cart-item'
import trackAddedToCart from '../lib/track-added-to-cart'

export default function HomePage({
  trendingProducts,
  innerCircleSubscriptionProduct,
  innerCircleMembershipProduct,
}: HomePageProps): React.ReactElement {
  return (
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
      {trendingProducts && (
        <ProductsCarousel
          products={trendingProducts}
          title="Today's Top Picks"
          subTitle="Indulge in luxurious new and best selling collections."
          onSelectProduct={(product) => navigate(`/products/${product.handle}`)}
        />
      )}
      {innerCircleSubscriptionProduct && innerCircleMembershipProduct && (
        <InnerCircleExclusive
          product={innerCircleSubscriptionProduct}
          membershipProductVariants={innerCircleMembershipProduct.variants}
          slideImages={[
            'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/home-banner-img-1-dt.jpg',
            'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
            'https://i.ebayimg.com/images/g/XOYAAOSwpjxgy3-1/s-l500.jpg',
          ]}
          title="Get addicted to me-time"
          subTitle="Join the Inner Circle for exciting new collections every month, available exclusively to members."
          topButtonText="Get Started"
          buttonLink={`/products/${innerCircleSubscriptionProduct.handle}`}
          onReserve={(variant) => {
            addCartItem(variant.variant_id)
              .then(() => trackAddedToCart(innerCircleSubscriptionProduct))
              .then(() => navigate('/cart'))
          }}
        />
      )}
      <InformationOverview
        title="The most fun you've ever had relaxing"
        titleUnderline="most fun"
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
  )
}

export const getServerSideProps = homePageProps()
