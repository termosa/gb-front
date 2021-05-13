import React from 'react'
import { VerticalProductCard } from './vertical-product-card'

export const BasicVerticalProductCard = (): React.ReactElement => (
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
)

export const VerticalNewProductCard = (): React.ReactElement => (
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
)

export const VerticalDiscountedProductCard = (): React.ReactElement => (
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
)

export const VerticalMembersOnlyProductCard = (): React.ReactElement => (
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
)
