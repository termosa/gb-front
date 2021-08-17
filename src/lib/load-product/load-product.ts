import api from '../../modules/api'
import normalizeProduct, { ServerProduct, Product } from '../../modules/normalize-product'

export type { Product } from '../../modules/normalize-product'

export function loadProduct(productIdOrHandle: number | string): Promise<Product> {
  return api<ServerProduct>({ path: `/inventory/products/${productIdOrHandle}` }).then(normalizeProduct)
}
