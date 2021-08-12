import React from 'react'
import ProductContext from 'gravity-brands/modules/product-context'
import loadProduct from 'gravity-brands/modules/load-product'
import useDefer from 'use-defer'
import useQuery from 'gravity-brands/hooks/use-query'

export const ProductPageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const { productId } = useQuery()
  const productRequest = useDefer(
    () => (productId ? loadProduct(+productId) : Promise.resolve(undefined)),
    [productId],
    []
  )

  return <ProductContext.Provider value={productRequest.value}>{children}</ProductContext.Provider>
}
