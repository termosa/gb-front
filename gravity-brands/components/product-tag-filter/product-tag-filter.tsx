import React, { useContext } from 'react'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'

export type ProductTagFilterProps = {
  children?: React.ReactElement
  tag?: string
}

export const ProductTagFilter = ({ tag, children }: ProductTagFilterProps): React.ReactElement | null => {
  const product = useContext(ProductContext)
  if (children && product && (!tag || product?.tags?.includes(tag))) return children
  return null
}
