import klaviyo from '../klaviyo'
import { Product } from '../../modules/normalize-product'
import formatPrice from '../../modules/format-price'

export function trackViewedItem(product: Product): void {
  klaviyo('track', 'Viewed Product', {
    Name: product.title,
    ProductID: product.product_id,
    ...(product.image && { ImageURL: product.image.src }),
    ...(product.variants[0] && { Price: formatPrice(product.variants[0].actual_price) }),
    ...(product.variants[0]?.compare_at_price && { CompareAtPrice: formatPrice(product.variants[0].compare_at_price) }),
  })
  klaviyo('trackViewedItem', {
    Title: product.title,
    ItemId: product.product_id,
    ...(product.image && { ImageUrl: product.image.src }),
    Url: `${window?.location.origin || ''}/products/${product.handle}`,
    Metadata: {
      ...(product.variants[0] && { Price: formatPrice(product.variants[0].actual_price) }),
      ...(product.variants[0]?.compare_at_price && {
        CompareAtPrice: formatPrice(product.variants[0].compare_at_price),
      }),
      Brand: product.vendor,
    },
  })
}
