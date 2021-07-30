import React, { useContext } from 'react'
import CollectionContext from '@fragrantjewels/gravity-brands.modules.collection-context'

export type CollectionTagFilterProps = {
  children?: React.ReactElement
  tag?: string
}

export const CollectionTagFilter = ({ tag, children }: CollectionTagFilterProps): React.ReactElement | null => {
  const collection = useContext(CollectionContext)
  if (children && collection && !tag) return children // TODO: compare collection tags
  return null
}
