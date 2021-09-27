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
import Head from 'next/head'
import LazyLoad from '../lib/lazy-load'

export default function HomePage({
  trendingProducts,
  innerCircleSubscriptionProduct,
  innerCircleMembershipProduct,
}: HomePageProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>Fragrant Jewels | Home</title>
      </Head>
      <MainPageLayout>
        <HeroGallery
          slides={[
            {
              topText: 'NEW',
              centerFirstText: 'DEEP SLEEP',
              centerSecondText: '',
              bottomText: 'Relax your weary bones with a collection to die for...',
              buttonText: 'SHOP HALLOWEEN',
              buttonLink: 'https://www.fragrantjewels.com/ws30/collections/spooky',
              backgroundImg: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/home-banner.jpg',
              backgroundImgMobile:
                'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/home-banner-mobile.jpg',
              transparentPlaceholder: true,
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
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/skull-ring.jpg',
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/monthly-subscription.jpg',
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/bones-ring.jpg',
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/bone-band.jpg',
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/jewel-candle.jpg',
              'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/epsom-salt.jpg',
            ]}
            title="Get addicted to me-time"
            subTitle="Join the Inner Circle for exclusive savings on exciting new collections every month. It's happiness, delivered. "
            topButtonText="Get Started"
            buttonLink={`https://www.fragrantjewels.com/pages/inner-circle`}
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
              title: 'Collectable Jewelry',
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/collectable-jewerly.png',
              description:
                "Choose a collection that speaks to your personality and discover surprise jewelry hidden in each product! Collect all the unique designs and join our 500,000+ customers who can't get enough!",
            },
            {
              title: 'Win a $10,000 Ring',
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/win-a-ring.png',
              description:
                'When did self-care become so freakin’ exciting? Each product includes a secret code you can enter into our Vault for your chance to win a ring worth $100, $1,000, or $10,000! That’s a lot of zeros.',
            },
            {
              title: 'Feel Good Ingredients',
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/clean-ingredients.png',
              description:
                "Call us crazy, but harmful chemicals and self-care don't really go hand-in-hand. We only use clean ingredients, so you (and your lady parts) can enjoy worry-free relaxation.",
            },
          ]}
        />
        <CategoryShopCardsOverview
          leftCard={{
            image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/time-travel.png',
            title: 'Time Travel Series',
            subTitle:
              'Transport your mind to peculiar moments in history with signature scents and unique 925 sterling silver rings.',
            link: 'https://www.fragrantjewels.com/pages/time-travel-series',
          }}
          rightCard={{
            image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/selfless-care.png',
            title: 'Self (less) Care',
            subTitle:
              'Self care is anything but selfish! We’ve partnered with amazing charities to bring you collections that give back. ',
            link: 'https://www.fragrantjewels.com/pages/charity-collections',
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
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/prod-bath-bombs.png',
              buttonLink: 'https://www.fragrantjewels.com/collections/bath-bombs',
              buttonText: 'BATH BOMBS',
            },
            {
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/prod-candles.png',
              buttonLink: 'https://www.fragrantjewels.com/collections/jewel-candles',
              buttonText: 'CANDLES',
            },
            {
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/prod-bundles.png',
              buttonLink: 'https://www.fragrantjewels.com/collections/gift-sets',
              buttonText: 'BUNDLES',
            },
          ]}
        />
        <PromiseBar />
        <InlineSignupForm />
        <LazyLoad threshold={1000}>
          <YotpoGallery galleryId="5dd5da2416fa290bf56b2085" />
        </LazyLoad>
      </MainPageLayout>
    </>
  )
}

export const getServerSideProps = homePageProps()
