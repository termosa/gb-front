import React from 'react'
import CollectionContext from '@fragrantjewels/gravity-brands.modules.collection-context'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import useDefer from 'use-defer'
import useQuery from '@fragrantjewels/gravity-brands.hooks.use-query'

export const CollectionPageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const { collectionId } = useQuery()
  const collectionRequest = useDefer(
    () => (collectionId ? loadCollection(+collectionId) : Promise.resolve(undefined)),
    [collectionId],
    []
  )

  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
