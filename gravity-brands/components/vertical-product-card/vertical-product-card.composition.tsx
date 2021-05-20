import React from 'react'
import { VerticalProductCard } from './vertical-product-card'
import PresentationCanvas from '@fragrantjewels/gravity-brands.helpers.presentation-canvas'

export const BasicVerticalProductCard = (): React.ReactElement => (
  <PresentationCanvas>
    <div style={{ width: 350 }}>
      <VerticalProductCard
        className="Component-Content"
        productImg={`https://i.ibb.co/QFSL0Xd/Background.jpg`}
        productName={'Test Name'}
        productAverageScore={3.5}
        productCountScore={2}
        materialType={'925 STERLING SILVER'}
        price={'35.35'}
        isNew={false}
      />
    </div>
  </PresentationCanvas>
)

export const VerticalNewProductCard = (): React.ReactElement => (
  <PresentationCanvas>
    <div style={{ width: 350 }}>
      <VerticalProductCard
        className="Component-Content"
        productImg={`https://i.ibb.co/QFSL0Xd/Background.jpg`}
        productName={'Test Name'}
        productAverageScore={4.5}
        productCountScore={2}
        materialType={'925 STERLING SILVER'}
        price={'35.35'}
        isNew={true}
      />
    </div>
  </PresentationCanvas>
)

export const VerticalDiscountedProductCard = (): React.ReactElement => (
  <PresentationCanvas>
    <div style={{ width: 350 }}>
      <VerticalProductCard
        className="Component-Content"
        productImg={`https://i.ibb.co/QFSL0Xd/Background.jpg`}
        productName={'Test Name'}
        productAverageScore={4.5}
        productCountScore={2}
        materialType={'925 STERLING SILVER'}
        price={'35.35'}
        discountPrice={'30.30'}
      />
    </div>
  </PresentationCanvas>
)

export const VerticalMembersOnlyProductCard = (): React.ReactElement => (
  <PresentationCanvas>
    <div style={{ width: 350 }}>
      <VerticalProductCard
        className="Component-Content"
        productImg={`https://i.ibb.co/QFSL0Xd/Background.jpg`}
        productName={'Test Name'}
        productAverageScore={4.5}
        productCountScore={2}
        materialType={'925 STERLING SILVER'}
        price={'35.35'}
        membersOnly={true}
      />
    </div>
  </PresentationCanvas>
)
