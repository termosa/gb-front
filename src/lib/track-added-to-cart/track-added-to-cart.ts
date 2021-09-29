import klaviyo from '../klaviyo'
import alooma from '../alooma'
import formatPrice from '../../modules/format-price'
import { Product } from '../../modules/normalize-product'
import createLink from '../create-link'

export function trackAddedToCart(product: Product): void {
  const variant = product.variants[0]

  const price = variant && formatPrice(variant.actual_price)
  const compareAtPrice = variant?.compare_at_price && formatPrice(variant.compare_at_price)

  klaviyo('track', 'Added to Cart', {
    Name: product.title,
    ProductID: product.product_id,
    Brand: product.vendor,
    URL: createLink.forProduct(product.handle),
    ...(product.image && { ImageURL: product.image.src }),
    ...(price && { Price: price }),
    ...(compareAtPrice && { CompareAtPrice: compareAtPrice }),
    siteVersion: 'V3',
  })

  alooma('add to cart', {
    product_id: product.product_id,
    product_name: product.title,
    cost: price,
  })
}
