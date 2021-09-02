import React from 'react'
import ProductContext from '../../modules/product-context'
import loadProduct from '../../lib/load-product'
import useDefer from 'use-defer'
import useQuery from '../../lib/use-query'

export const ProductPageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const { productId } = useQuery()
  const productRequest = useDefer(
    () => (productId ? loadProduct(+productId) : Promise.resolve(undefined)),
    [productId],
    []
  )

  return <ProductContext.Provider value={productRequest.value}>{children}</ProductContext.Provider>
}
