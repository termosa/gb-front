import api from '../../modules/api'
import { Product } from '../../modules/normalize-product'
import createLink from '../create-link'
import oldApiBase from '../old-api-base'

export type ContactInformation = {
  name: string
  email: string
}

export function submitHint(
  sender: ContactInformation,
  receiver: ContactInformation,
  product: Product,
  size: string
): Promise<void> {
  return api({
    base: oldApiBase,
    path: '/checkout/hint_product/',
    method: 'POST',
    body: {
      name: sender.name,
      email: sender.email,
      r_name: receiver.name,
      r_email: receiver.email,
      site_version: 'V3',
      items: {
        ProductID: product.product_id,
        // SKU: variant.sku,
        Size: size,
        ProductName: product.title,
        ProductType: product.type,
        // ProductTag: product.tags,
        // Quantity: 1,
        // ItemPrice: variant.actual_price,
        // RowTotal: variant.actual_price,
        ProductURL: createLink.forProduct(product.handle),
        ImageURL: (product.image || (product.images && product.images[0]))?.src,
        // Categories: ...
      },
    },
  })
}
