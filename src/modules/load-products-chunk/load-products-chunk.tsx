import api from '../api'
import normalizeProductsChunk, {
  ServerProductsChunk,
  ProductsChunk,
} from '../normalize-products-chunk'

export type { Product } from '../normalize-product'

export const loadProductsChunk = (query: { search?: string; page?: number }): Promise<ProductsChunk> =>
  api<ServerProductsChunk>({ path: `/inventory/products/`, query }).then(normalizeProductsChunk)
