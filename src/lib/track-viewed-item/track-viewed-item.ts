import klaviyo from '../klaviyo'
import formatPrice from '../../modules/format-price'
import { Product } from '../../modules/normalize-product'

export function trackViewedItem(product: Product): void {
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
