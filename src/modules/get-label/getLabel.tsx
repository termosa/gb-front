import { Product } from '../../components/inner-circle-exclusive'

export type Label = {
  members: boolean
  silver: boolean
}

export const getLabel = (product: Product): Label => {
  return {
    members: product.tags ? product.tags.includes('IC Members Only') : false,
    silver: product.material ? product.material.includes('925 Sterling Silver') : false,
  }
}
