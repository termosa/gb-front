import React from 'react'
import HeroGallery from '@fragrantjewels/gravity-brands.components.hero-gallery'
import CategoryShopCard from '@fragrantjewels/gravity-brands.components.category-shop-card'
import PromiseBar from '@fragrantjewels/gravity-brands.components.promise-bar'
import InlineSignupForm from '@fragrantjewels/gravity-brands.components.inline-signup-form'
import ReviewsSection from '@fragrantjewels/gravity-brands.components.reviews-section'
import ShopByProductsOverview from '@fragrantjewels/gravity-brands.components.shop-by-products-overview'
import InnerCircleExclusive from '@fragrantjewels/gravity-brands.components.inner-circle-exclusive'
import ProductsCarousel from '@fragrantjewels/gravity-brands.components.products-carousel'
import homePageProps from './resolvers/homePageProps'
import signup from '@fragrantjewels/gravity-brands.modules.signup'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FollowUs from '@fragrantjewels/gravity-brands.components.follow-us'
import MostFunOverview from '@fragrantjewels/gravity-brands.components.most-fun-overview'
import { Product } from '@fragrantjewels/gravity-brands.modules.load-product'


type HomePageProps = {
  trendingProducts: Array<Product> | null
  innerCircleProduct: Product | null
  context: unknown
}

const HomePage = ({ trendingProducts, innerCircleProduct }: HomePageProps): React.ReactElement => (
  <MainPageLayout>
    <HeroGallery
      slides={[
        {
          topText: 'MINISUBLINER',
          centerFirstText: 'SAVOR the',
          centerSecondText: 'MOMENTS',
          bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
          buttonText: 'SHOP COLLECTION',
          buttonLink: 'http://k8s-default-front-94daf2c14f-0f359d69d3e419c3.elb.us-west-1.amazonaws.com/collection?id=160593838170',
          backgroundImg: '',
        },
      ]}
    />
    {trendingProducts?.length && (
      <ProductsCarousel
        title="What’s trending"
        subTitle="Shop our newest and best selling collections."
        products={trendingProducts}
        onSelectProduct={(productId) =>
          (location.href = `/product?id=${productId}&${
            location.search.match(/(?:\?|&)(base_url=[^&]+)(?:&|$)/)?.[1] || ''
          }`)
        }
      />
    )}
    {innerCircleProduct && (
      <InnerCircleExclusive
        product={innerCircleProduct}
        slideImages={[
          'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img-jewelry.jpg',
          'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img.jpg',
        ]}
        buttonLink={''}
        title={'Get addicted to me-time'}
        subTitle={'Join the Inner Circle for exciting new collections every month, available exclusively to members'}
        topButtonText={'GET STARTED'}
        onReserve={(variant) => alert(`We will ship you the product with size ${variant.title}`)}
      />
    )}
    <MostFunOverview />

    <div className="app-h-section app-h-collections-section">
      <div className="app-h-container">
        <div className="app-h-container__content">
          <CategoryShopCard
            image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-1.jpg"
            title="Valentine’s Shop"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'"
          />
          <CategoryShopCard
            image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-2.jpg"
            title="Mythical Shop"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="'https://www.fragrantjewels.com/pages/inner-circle#how-it-works'"
          />
        </div>
      </div>
    </div>

    <ReviewsSection
      images={[
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeed.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitan.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allure.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beauty-insider.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/popsugar.png',
      ]}
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      author="Samanta H."
    />
    <ShopByProductsOverview
      products={[
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'CANDLES',
        },
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'BODY SCRUBS',
        },
        {
          image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg',
          buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
          title: 'BUNDLES',
        },
      ]}
    />
    <PromiseBar />
    <section className="app-h-section app-h-form-section">
      <div className="app-h-container">
        <InlineSignupForm onSignup={signup} />
      </div>
    </section>
    <section className="app-h-section app-h-follow-section">
      <div className="app-h-container">
        <FollowUs />
      </div>
    </section>
  </MainPageLayout>
)

export const getServerSideProps = homePageProps<HomePageProps>()

export default HomePage
