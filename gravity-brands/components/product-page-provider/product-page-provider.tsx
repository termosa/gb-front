import React from 'react'
import ProductContext from '@fragrantjewels/gravity-brands.modules.product-context'
import loadProduct from '@fragrantjewels/gravity-brands.modules.load-product'
import useDefer from 'use-defer'

export const getProductId = (): string | undefined => {
  if (typeof window !== 'undefined') return window.location.search.slice(4, -1)
}

export const ProductPageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const productId = getProductId() || 0
  const productRequest = useDefer(() => loadProduct(+productId), [productId], [])

  return <ProductContext.Provider value={productRequest.value}>{children}</ProductContext.Provider>
}
