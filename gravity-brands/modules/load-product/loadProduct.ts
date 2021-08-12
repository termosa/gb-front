import api from 'gravity-brands/modules/api'
import normalizeProduct, { ServerProduct, Product } from 'gravity-brands/modules/normalize-product'

export type { Product }

export const loadProduct = (productId: number): Promise<Product> =>
  api<ServerProduct>({ path: `/inventory/products/${productId}` }).then(normalizeProduct)
