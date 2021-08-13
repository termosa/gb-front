import React from 'react'
import homePageProps from '../../resolvers/homePageProps'
import HeroGallery from '../../components/hero-gallery'
import CategoryShopCard from '../../components/category-shop-card'
import PromiseBar from '../../components/promise-bar'
import InlineSignupForm from '../../components/inline-signup-form'
import ReviewsSection from '../../components/reviews-section'
import ShopByProductsOverview from '../../components/shop-by-products-overview'
import InnerCircleExclusive, { Product } from '../../components/inner-circle-exclusive'
import ProductsCarousel from '../../components/products-carousel'
import MainPageLayout from '../../components/main-page-layout'
import FollowUs from '../../components/follow-us'
import MostFunOverview from '../../components/most-fun-overview'
import signup from '../../modules/signup'
import { Customer } from '../../modules/load-active-customer'

type HomePageProps = {
  trendingProducts: null | Array<Product>
  innerCircleProduct: null | Product
  activeCustomer: null | Customer
  context: unknown
}

const HomePage = ({ trendingProducts, innerCircleProduct, activeCustomer }: HomePageProps): React.ReactElement => (
  <MainPageLayout userName={activeCustomer?.firstName}>
    <HeroGallery
      slides={[
        {
          topText: 'MINISUBLINER',
          centerFirstText: 'SAVOR the',
          centerSecondText: 'MOMENTS',
          bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
          buttonText: 'SHOP COLLECTION',
          buttonLink:
            'http://k8s-default-front-94daf2c14f-0f359d69d3e419c3.elb.us-west-1.amazonaws.com/collections/160593838170',
          backgroundImg: '',
        },
      ]}
    />
    {trendingProducts?.length && (
      <ProductsCarousel
        title="What’s trending"
        subTitle="Shop our newest and best selling collections."
        products={trendingProducts}
        onSelectProduct={(productId) => (location.href = `/products/${productId}`)}
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
