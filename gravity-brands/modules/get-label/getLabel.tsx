import { Product } from '@fragrantjewels/gravity-brands.components.inner-circle-exclusive'

export type Label = {
  members: boolean
  silver: boolean
  gold: boolean
  copper: boolean
  zinc: boolean
}

export const getLabel = (product: Product): Label => {
  return {
    members: product.tags ? product.tags.includes('IC Members Only') : false,
    silver: product.material ? product.material.includes('925 Sterling Silver') : false,
    gold: product.material ? product.material.includes('Gold') : false,
    copper: product.material ? product.material.includes('Copper') : false,
    zinc: product.material ? product.material.includes('Zinc') : false,
  }
}
