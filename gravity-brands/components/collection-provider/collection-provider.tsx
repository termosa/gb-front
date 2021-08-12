import React from 'react'
import useDefer from 'use-defer'
import loadCollection from 'gravity-brands/modules/load-collection'
import CollectionContext from 'gravity-brands/modules/collection-context'

export type CollectionProviderProps = {
  children?: React.ReactNode
  collectionId?: number
}

export const CollectionProvider = ({ collectionId, children }: CollectionProviderProps): React.ReactElement => {
  const collectionRequest = useDefer(
    () => (collectionId ? loadCollection(collectionId) : Promise.resolve(undefined)),
    [collectionId],
    []
  )
  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
