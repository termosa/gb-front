import React from 'react'
import HeroGallery from '@fragrantjewels/gravity-brands.components.hero-gallery'
import CategoryShopCard from '@fragrantjewels/gravity-brands.components.category-shop-card'
import PromiseBar from '@fragrantjewels/gravity-brands.components.promise-bar'
import InlineSignupForm from '@fragrantjewels/gravity-brands.components.inline-signup-form'
import ReviewsSection from '@fragrantjewels/gravity-brands.components.reviews-section'
import ShopByProductsOverview from '@fragrantjewels/gravity-brands.components.shop-by-products-overview'
import InnerCircleExclusive, { Product } from '../../gravity-brands/components/inner-circle-exclusive'
import ProductsCarousel, {
  Product as TrendingProduct,
} from '@fragrantjewels/gravity-brands.components.products-carousel'
import homePageProps from './resolvers/homePageProps'
import signup from '@fragrantjewels/gravity-brands.modules.signup'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FollowUs from '@fragrantjewels/gravity-brands.components.follow-us'
import MostFunOverview from '@fragrantjewels/gravity-brands.components.most-fun-overview'

type HomePageProps = {
  trendingProducts: Array<TrendingProduct> | null
  innerCircleProduct: Product | null
  context: unknown
}

const HomePage = ({ trendingProducts, innerCircleProduct }: HomePageProps): React.ReactElement => (
  <MainPageLayout>
    <div className="app-re-wrapper" id="app-wrapper">
      <div className="app-re-content" id="app-content">
        <main className="app-h-main">
          <HeroGallery
            slides={[
              {
                topText: 'MINISUBLINER',
                centerFirstText: 'SAVOR the',
                centerSecondText: 'MOMENTS',
                bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
                buttonText: 'SHOP NOW',
                buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
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
              frontImage={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img.jpg'}
              sideImage={'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img-jewelry.jpg'}
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
        </main>
      </div>
    </div>
  </MainPageLayout>
)

export const getServerSideProps = homePageProps<HomePageProps>()

export default HomePage
