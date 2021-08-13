import normalizeProduct, { ServerProduct, Product } from '../normalize-product'

export type ServerProductsChunk = {
  links: {
    next: null | string
    previous: null | string
  }
  total_count: number
  total_count_per_page: number
  results: Array<ServerProduct>
}

export type ProductsChunk = {
  totalAmount: number
  amountPerPage: number
  products: Array<Product>
}

export const normalizeProductsChunk = (productsChunk: ServerProductsChunk): ProductsChunk => ({
  totalAmount: productsChunk.total_count,
  amountPerPage: productsChunk.total_count_per_page,
  products: productsChunk.results.map(normalizeProduct),
})
