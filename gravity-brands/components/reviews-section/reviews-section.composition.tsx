import React from 'react'
import { ReviewsSection } from './reviews-section'
import PresentationCanvas from 'gravity-brands/helpers/presentation-canvas'

export const BasicReviewsSection = () => (
  <PresentationCanvas>
    <ReviewsSection
      images={[
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeed.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitan.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allure.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beauty-insider.png',
        'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/popsugar.png',
      ]}
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
              placerat arcu. Ipsum est felis varius faucibus praesent.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit."
      author="Samanta H."
    />
  </PresentationCanvas>
)
