import React from 'react'
import useDefer from 'use-defer'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import CollectionContext from '@fragrantjewels/gravity-brands.modules.collection-context'

export type CollectionProviderProps = {
  children?: React.ReactNode
  collectionId: number
}

export function CollectionProvider({ collectionId, children }: CollectionProviderProps): React.ReactElement {
  const collectionRequest = useDefer(() => loadCollection(collectionId), [collectionId], [])
  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
