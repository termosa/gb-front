import api from '../api'
import normalizeProduct, { ServerProduct, Product } from '../normalize-product'

export type { Product }

export const loadProduct = (productId: number): Promise<Product> =>
  api<ServerProduct>({ path: `/inventory/products/${productId}` }).then(normalizeProduct)
