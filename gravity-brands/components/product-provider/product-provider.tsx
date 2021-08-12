import React from 'react'
import useDefer from 'use-defer'
import loadProduct from 'gravity-brands/modules/load-product'
import ProductContext from 'gravity-brands/modules/product-context'

export type ProductProviderProps = {
  children?: React.ReactNode
  productId?: number
}

export const ProductProvider = ({ productId, children }: ProductProviderProps): React.ReactElement => {
  const productRequest = useDefer(
    () => (productId ? loadProduct(productId) : Promise.resolve(undefined)),
    [productId],
    []
  )
  return <ProductContext.Provider value={productRequest.value}>{children}</ProductContext.Provider>
}
