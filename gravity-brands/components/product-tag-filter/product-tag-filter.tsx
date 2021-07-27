import React, { useContext } from 'react'
import { ProductContext } from '@fragrantjewels/gravity-brands.modules.product-context'

export type ProductTagFilterProps = {
  tag: string
}

export const ProductTagFilter = ({ tag }: ProductTagFilterProps): React.ReactElement | null => {
  const product = useContext(ProductContext)

  if (typeof tag === 'string' && !product?.tags?.includes(tag)) return null

  return (
    <div style={{ padding: '3em', textAlign: 'center', background: '#b10dc9' }}>
      Product Preview: {product?.title || 'Unknown'}
    </div>
  )
}
