import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
import addCartItem from '../lib/add-cart-item'
import trackAddedToCart from '../lib/track-added-to-cart'
import createLink from '../lib/create-link'
import HeroBanner from '../lib/hero-banner'

export default function HomePage({
  trendingProducts,
  innerCircleSubscriptionProduct,
  innerCircleMembershipProduct,
}: HomePageProps): React.ReactElement {
  const router = useRouter()
  const isHeroGallery = true

  return (
    <>
      <Head>
        <title>Fragrant Jewels | Home</title>
        <meta
          name="description"
          content="A hidden ring in each product and a chance to win a $10,000 ring! New products now available for a limited time."
        />
      </Head>
      <MainPageLayout>
        {isHeroGallery ? (
          <HeroGallery
            slides={[
              {
                topText: '925 STERLING SILVER',
                centerFirstText: 'Wicked Unicorn',
                centerSecondText: '',
                bottomText:
                  'Indulge in your deepest desires with a brand new, tantalizing 925 sterling silver collection.',
                buttonText: 'Reveal the Collection',
                buttonLink: createLink.forCollection('fantasy'),
                backgroundImg:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/hero-wicked-unicorn-dt.jpg',
                backgroundImgMobile:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/hero-wicked-unicorn-mb.jpg',
                transparentPlaceholder: true,
                desktopPosition: 'right',
              },
              {
                topText: '925 STERLING SILVER',
                centerFirstText: 'Wicked Fairy',
                centerSecondText: '',
                bottomText:
                  'Get lost in the fairy???s spell and become hypnotized by these wicked-fairy inspired sterling silver rings!??',
                buttonText: 'Reveal the Collection',
                buttonLink: createLink.forCollection('fantasy'),
                backgroundImg:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/hero-wicked-fairy-2-dt.jpg',
                backgroundImgMobile:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/hero-wicked-fairy-2-mb.jpg',
                transparentPlaceholder: true,
                desktopPosition: 'right',
              },
              {
                topText: 'NEW',
                centerFirstText: 'The October Box',
                centerSecondText: '',
                bottomText:
                  'Join Inner Circle today for an exclusive discount on this new collection which reminds you to bloom in the darkness.',
                buttonText: 'Reserve Now',
                buttonLink: createLink.forPage('inner-circle'),
                backgroundImg:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/moonflowers-banner-dt.jpg',
                backgroundImgMobile:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/moonflowers-banner-mb.jpg',
                transparentPlaceholder: true,
              },
              {
                topText: 'SATIN COLLECTION',
                centerFirstText: 'Coven Light or Coven Dark?',
                centerSecondText: '',
                bottomText: 'The fate of humanity lies in your hands. What will it be?',
                buttonText: 'Decide',
                buttonLink: createLink.forCollection('spooky'),
                backgroundImg:
                  'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/the-coven-banner-dt.jpg',
                backgroundImgMobile: 'https://fragrantjewels-assets.s3.amazonaws.com/images/banners-2/the-coven-mb.jpg',
                transparentPlaceholder: true,
              },
            ]}
          />
        ) : (
          <HeroBanner
            properties={{
              desktop:
                'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/ww-banner-fri-27929-dt.jpg',
              medium:
                'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/ww-banner-fri-27929-ipad.jpg',
              mobile:
                'https://fragrantjewels-assets.s3.amazonaws.com/images/banners/wicked-week-2/ww-banner-fri-27929-mb.jpg',
              link: '/collections/all-products',
            }}
          />
        )}
        {trendingProducts && (
          <ProductsCarousel
            products={trendingProducts}
            title="Today's Top Picks"
            subTitle="Indulge in luxurious new and best selling collections."
            onSelectProduct={(product) => router.push(createLink.forProduct(product.handle))}
          />
        )}
        {innerCircleSubscriptionProduct && innerCircleMembershipProduct && (
          <InnerCircleExclusive
            product={innerCircleSubscriptionProduct}
            membershipProductVariants={innerCircleMembershipProduct.variants}
            slideImages={[
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/jewelry.jpg',
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/product.jpg',
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/story.jpg',
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/jewelry-2.jpg',
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/jewelry-3.jpg',
              'https://fragrantjewels-assets.s3.amazonaws.com/images/moonflowers/jewelry-4.jpg',
            ]}
            title="Get addicted to me-time"
            subTitle="Join the Inner Circle for exclusive savings on exciting new collections every month. It's happiness, delivered. "
            topButtonText="Get Started"
            buttonLink={createLink.forPage('inner-circle')}
            onReserve={(variant) => {
              addCartItem(variant.variant_id)
                .then(() => trackAddedToCart(innerCircleSubscriptionProduct))
                .then(() => router.push('/cart'))
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
                'When did self-care become so freakin??? exciting? Each product includes a secret code you can enter into our Vault for your chance to win a ring worth $100, $1,000, or $10,000! That???s a lot of zeros.',
            },
            {
              title: 'Feel Good Ingredients',
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/hiw-ingredients.png',
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
            link: createLink.forPage('time-travel-series'),
          }}
          rightCard={{
            image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/selfless-care.png',
            title: 'Self (less) Care',
            subTitle:
              'Self care is anything but selfish! We???ve partnered with amazing charities to bring you collections that give back. ',
            link: createLink.forPage('charity-collections'),
          }}
        />
        <ReviewsSection
          quote="I finally found a new way to treat myself for all the hard work I do. As a single mother and assistant teacher, it is past time I indulge in a little me-time. Love the jewelry and love the bath bombs! My skin feels better with Fragrant Jewels in my life. Recommend to everyone!"
          author="ATHENA F."
        />
        <ShopByProductsOverview
          title="Shop by Product"
          products={[
            {
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/bath-bombs.png',
              buttonLink: createLink.forCollection('bath-bombs'),
              buttonText: 'BATH BOMBS',
            },
            {
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/prod-candles.png',
              buttonLink: createLink.forCollection('jewel-candles'),
              buttonText: 'CANDLES',
            },
            {
              image: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/prod-bundles.png',
              buttonLink: createLink.forCollection('gift-sets'),
              buttonText: 'BUNDLES',
            },
          ]}
        />
        <PromiseBar />
        <InlineSignupForm />
      </MainPageLayout>
    </>
  )
}

export const getServerSideProps = homePageProps()
