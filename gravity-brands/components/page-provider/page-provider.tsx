import React from 'react'
import CollectionContext from '@fragrantjewels/gravity-brands.modules.collection-context'
import loadCollection from '@fragrantjewels/gravity-brands.modules.load-collection'
import useDefer from 'use-defer'

export const getCollectionId = (): string | undefined => {
  if (typeof window !== 'undefined') return window.location.search.slice(4)
}

export const PageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const collectionId = getCollectionId() || 0
  const collectionRequest = useDefer(() => loadCollection(+collectionId), [collectionId], [])

  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
