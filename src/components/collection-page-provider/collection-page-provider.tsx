import React from 'react'
import CollectionContext from '../../modules/collection-context'
import loadCollection from '../../lib/load-collection'
import useDefer from 'use-defer'
import useQuery from '../../hooks/use-query'

export const CollectionPageProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const { collectionId } = useQuery()
  const collectionRequest = useDefer(
    () => (collectionId ? loadCollection(+collectionId) : Promise.resolve(undefined)),
    [collectionId],
    []
  )

  return <CollectionContext.Provider value={collectionRequest.value}>{children}</CollectionContext.Provider>
}
