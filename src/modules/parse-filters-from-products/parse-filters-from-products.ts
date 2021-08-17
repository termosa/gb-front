import { Product } from '../normalize-product'

export type Filter = {
  name: string
  amount: number
}

export type CollectedFilters = {
  fragrances: Array<Filter>
  colors: Array<Filter>
  materials: Array<Filter>
  sizes: Array<Filter>
}

const collectSizes = (products: Array<Product>) => {
  const sizeFilters: Array<Filter> = []

  products.forEach((product) =>
    product.variants.forEach((variant) => {
      if (!variant.available) return

      const sizeIndex = sizeFilters.findIndex((size) => size.name === variant.title)
      if (sizeIndex === -1) {
        sizeFilters.push({ name: variant.title, amount: 1 })
      } else {
        sizeFilters[sizeIndex].amount += 1
      }
    })
  )

  return sizeFilters
}

export const parseFiltersFromProducts = (products: Array<Product> | undefined): CollectedFilters => {
  const filters: CollectedFilters = {
    sizes: products ? collectSizes(products) : [],
    fragrances: [],
    materials: [],
    colors: [],
  }

  products?.forEach((product) => {
    if (product.fragrance) {
      const index = filters.fragrances.findIndex((fragranceFilter) => fragranceFilter.name === product.fragrance)
      if (index === -1) {
        filters.fragrances.push({ name: product.fragrance, amount: 1 })
      } else {
        filters.fragrances[index].amount += 1
      }
    }

    if (product.material) {
      const index = filters.materials.findIndex((materialFilter) => materialFilter.name === product.material)
      if (index === -1) {
        filters.materials.push({ name: product.material, amount: 1 })
      } else {
        filters.materials[index].amount += 1
      }
    }

    if (product.color) {
      const index = filters.colors.findIndex((colorFilter) => colorFilter.name === product.color)
      if (index === -1) {
        filters.colors.push({ name: product.color, amount: 1 })
      } else {
        filters.colors[index].amount += 1
      }
    }
  })

  return filters
}
