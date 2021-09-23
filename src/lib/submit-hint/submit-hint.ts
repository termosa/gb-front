import api from '../../modules/api'
import { Product } from '../../modules/normalize-product'

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
    base: 'https://fjrecurly.herokuapp.com',
    path: '/checkout/hint_product/',
    method: 'POST',
    body: {
      name: sender.name,
      email: sender.email,
      r_name: receiver.name,
      r_email: receiver.email,
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
        ProductURL: `https://www.fragrantjewels.com/products/${product.handle}`,
        ImageURL: (product.image || (product.images && product.images[0]))?.src,
        // Categories: ...
      },
    },
  })
}
