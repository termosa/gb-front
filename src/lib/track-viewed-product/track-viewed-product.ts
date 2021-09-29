import klaviyo from '../klaviyo'
import alooma from '../alooma'
import formatPrice from '../../modules/format-price'
import { Product } from '../../modules/normalize-product'
import createLink from '../create-link'

export function trackViewedProduct(product: Product): void {
  const variant = product.variants[0]

  const price = variant && formatPrice(variant.actual_price)
  const compareAtPrice = variant?.compare_at_price && formatPrice(variant.compare_at_price)

  klaviyo('track', 'Viewed Product', {
    Name: product.title,
    ProductID: product.product_id,
    Brand: product.vendor,
    URL: createLink.forProduct(product.handle),
    ...(product.image && { ImageURL: product.image.src }),
    ...(price && { Price: price }),
    ...(compareAtPrice && { CompareAtPrice: compareAtPrice }),
    siteVersion: 'V3',
  })

  klaviyo('trackViewedItem', {
    Title: product.title,
    ItemId: product.product_id,
    Url: createLink.forProduct(product.handle),
    Metadata: {
      Brand: product.vendor,
      ...(price && { Price: price }),
      ...(compareAtPrice && { CompareAtPrice: compareAtPrice }),
    },
    ...(product.image && { ImageUrl: product.image.src }),
    siteVersion: 'V3',
  })

  alooma('viewed product', {
    product_id: product.product_id,
    product_name: product.title,
    cost: price,
  })
}
