import api from '@fragrantjewels/gravity-brands.modules.api'
import normalizeProduct, { ServerProduct, Product } from '@fragrantjewels/gravity-brands.modules.normalize-product'

export type { Product } from '@fragrantjewels/gravity-brands.modules.normalize-product'

export const loadProduct = (productId: number): Promise<Product> =>
  api<ServerProduct>({ path: `/inventory/products/${productId}` }).then(normalizeProduct)
