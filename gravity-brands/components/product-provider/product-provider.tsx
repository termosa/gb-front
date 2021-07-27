import React from 'react'
import useDefer from 'use-defer'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'

export type ProductProviderProps = {
  children?: React.ReactNode
  productId: number
}

export const ProductProvider = ({ productId, children }: ProductProviderProps): React.ReactElement => {
  const productRequest = useDefer(() => loadProduct(productId), [productId], [])
  return <ProductContext.Provider value={productRequest.value}>{children}</ProductContext.Provider>
}
