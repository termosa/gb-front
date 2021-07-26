import React from 'react'
import useDefer from 'use-defer'
import loadCollection, { Collection } from '@fragrantjewels/gravity-brands.modules.load-collection'

export const CollectionContext = React.createContext<undefined | Collection>(undefined)

export type CollectionProviderProps = {
  children?: React.ReactNode
  collectionId: number
}

export default function CollectionProvider({ collectionId, children }: CollectionProviderProps): React.ReactElement {
  const collectionRequest = useDefer(() => loadCollection(collectionId), [collectionId], [])
  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
