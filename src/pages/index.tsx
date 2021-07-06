import React from 'react'
import HeroGallery from '@fragrantjewels/gravity-brands.components.hero-gallery'
import CategoryShopCard from '@fragrantjewels/gravity-brands.components.category-shop-card'
import PromiseBar from '@fragrantjewels/gravity-brands.components.promise-bar'
import InlineSignupForm from '@fragrantjewels/gravity-brands.components.inline-signup-form'
import ReviewsSection from '@fragrantjewels/gravity-brands.components.reviews-section'
import ShopByProductsOverview from '@fragrantjewels/gravity-brands.components.shop-by-products-overview'
import InnerCircleExclusive, { Product } from '@fragrantjewels/gravity-brands.components.inner-circle-exclusive'
import ProductsCarousel, {
  Product as TrendingProduct,
} from '@fragrantjewels/gravity-brands.components.products-carousel'
import homePageProps from './resolvers/homePageProps'
import signup from '@fragrantjewels/gravity-brands.modules.signup'
import MainPageLayout from '@fragrantjewels/gravity-brands.components.main-page-layout'
import FollowUs from '@fragrantjewels/gravity-brands.components.follow-us'

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
          <div className="HeroGallery-Container">
            <HeroGallery />
          </div>
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
              onReserve={(variant) => alert(`We will ship you the product with size ${variant.title}`)}
            />
          )}
          <section className="app-h-section app-h-section_colored app-h-section_mf">
            <div className="app-h-container">
              <h2 className="app-h-section__title">
                The{' '}
                <span>
                  <span className="app-h-section__title_part">most fun</span>
                </span>{' '}
                you’ve <br />
                ever had relaxing
              </h2>
              <div className="app-h-mf-slider-wrapper">
                <div className="app-h-mf-slider" id="app-h-mf-slider">
                  <div className="app-h-mf-slider_slide app-h-mf-card">
                    <img
                      className="app-h-mf-card__img"
                      src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-1.jpg"
                      alt=""
                    />
                    <h4 className="app-h-mf-card__title"> Ingredients</h4>
                    <div className="app-h-mf-card__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
                      </p>
                    </div>
                  </div>

                  <div className="app-h-mf-slider_slide app-h-mf-card">
                    <img
                      className="app-h-mf-card__img"
                      src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-2.jpg"
                      alt=""
                    />
                    <h4 className="app-h-mf-card__title">Win $10,000 Ring</h4>
                    <div className="app-h-mf-card__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
                      </p>
                    </div>
                  </div>

                  <div className="app-h-mf-slider_slide app-h-mf-card">
                    <img
                      className="app-h-mf-card__img"
                      src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-3.jpg"
                      alt=""
                    />
                    <h4 className="app-h-mf-card__title">Collectible Jewelry</h4>
                    <div className="app-h-mf-card__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="app-h-section app-h-collections-section">
            <div className="app-h-container">
              <div className="app-h-row-1-2">
                <CategoryShopCard
                  image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-1.jpg"
                  title="Valentine’s Shop"
                  subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <CategoryShopCard
                  image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-2.jpg"
                  title="Mythical Shop"
                  subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
                product_id: 1,
                image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg',
                title: 'CANDLES',
              },
              {
                product_id: 2,
                image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg',
                title: 'BODY SCRUBS',
              },
              {
                product_id: 3,
                image: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg',
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
