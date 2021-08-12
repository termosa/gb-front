import api from 'gravity-brands/modules/api'
import normalizeProductsChunk, {
  ServerProductsChunk,
  ProductsChunk,
} from 'gravity-brands/modules/normalize-products-chunk'

export type { Product } from 'gravity-brands/modules/normalize-product'

export const loadProductsChunk = (query: { search?: string; page?: number }): Promise<ProductsChunk> =>
  api<ServerProductsChunk>({ path: `/inventory/products/`, query }).then(normalizeProductsChunk)
