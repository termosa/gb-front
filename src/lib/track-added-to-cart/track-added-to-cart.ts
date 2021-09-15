import window from '../window'
import klaviyo from '../klaviyo'
import formatPrice from '../../modules/format-price'
import { Product } from '../../modules/normalize-product'

export function trackAddedToCart(product: Product): void {
  const variant = product.variants[0]

  klaviyo('track', 'Added to Cart', {
    Name: product.title,
    ProductID: product.product_id,
    Brand: product.vendor,
    URL: `${window?.location.origin || ''}/products/${product.handle}`,
    ...(product.image && { ImageURL: product.image.src }),
    ...(variant && { Price: formatPrice(variant.actual_price) }),
    ...(variant?.compare_at_price && { CompareAtPrice: formatPrice(variant.compare_at_price) }),
  })
}
