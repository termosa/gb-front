import api from '@fragrantjewels/gravity-brands.modules.api'
import normalizeProductsChunk, {
  ServerProductsChunk,
  ProductsChunk,
} from '@fragrantjewels/gravity-brands.modules.normalize-products-chunk'

export type { Product } from '@fragrantjewels/gravity-brands.modules.normalize-product'

export const loadProductsChunk = (query: { search?: string; page?: number }): Promise<ProductsChunk> =>
  api<ServerProductsChunk>({ path: `/inventory/products/`, query }).then(normalizeProductsChunk)
