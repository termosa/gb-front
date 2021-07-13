export type Product = {
  tags: string
  variants: Array<{
    available: boolean
    title: string
  }>
}

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

export enum FilterPrefix {
  FRAGRANCE = 'Fragrance',
  MATERIAL = 'Material',
  COLOR = 'Metal Color',
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

export const parseFiltersFromProducts = (products: Array<Product> | null): CollectedFilters => {
  const filters: CollectedFilters = {
    sizes: products ? collectSizes(products) : [],
    fragrances: [],
    materials: [],
    colors: [],
  }

  products?.forEach((product) => {
    product.tags.split(',').forEach((tag) => {
      const [prefix, value] = tag.split(':').map((value) => value.trim())

      if (prefix === FilterPrefix.FRAGRANCE) {
        const index = filters.fragrances.findIndex((fragrance) => fragrance.name === value)
        if (index === -1) {
          filters.fragrances.push({ name: value, amount: 1 })
        } else {
          filters.fragrances[index].amount += 1
        }
      } else if (prefix === FilterPrefix.MATERIAL) {
        const index = filters.materials.findIndex((material) => material.name === value)
        if (index === -1) {
          filters.materials.push({ name: value, amount: 1 })
        } else {
          filters.materials[index].amount += 1
        }
      } else if (prefix === FilterPrefix.COLOR) {
        const index = filters.colors.findIndex((color) => color.name === value)
        if (index === -1) {
          filters.colors.push({ name: value, amount: 1 })
        } else {
          filters.colors[index].amount += 1
        }
      }
    })
  })

  return filters
}
