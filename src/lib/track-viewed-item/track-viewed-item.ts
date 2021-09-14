import klaviyo from '../klaviyo'
import formatPrice from '../../modules/format-price'
import { Product } from '../../modules/normalize-product'

export function trackViewedItem(product: Product): void {
  klaviyo('track', 'Viewed Product', {
    Name: product.title,
    ProductID: product.product_id,
    ...(product.image && { ImageURL: product.image.src }),
    ...(product.variants[0] && { Price: formatPrice(product.variants[0].actual_price) }),
  })
}
