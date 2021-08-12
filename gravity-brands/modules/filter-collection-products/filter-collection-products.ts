import { Product } from 'gravity-brands/modules/normalize-collection'

export type CollectionProductsFilter = {
  sizes?: Array<string>
  fragrances?: Array<string>
  materials?: Array<string>
  colors?: Array<string>
}

export const filterCollectionProducts = (products: Array<Product>, filter: CollectionProductsFilter): Array<Product> =>
  products.filter((product) => {
    if (filter.sizes?.length)
      if (!product.variants.some((variant) => variant.available && filter.sizes?.includes(variant.title))) return false

    if (filter.fragrances?.length && (!product.fragrance || !filter.fragrances.includes(product.fragrance)))
      return false

    if (filter.materials?.length && (!product.material || !filter.materials.includes(product.material))) return false

    if (filter.colors?.length && (!product.color || !filter.colors.includes(product.color))) return false

    return true
  })
