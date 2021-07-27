import React, { useContext } from 'react'
import { CollectionContext } from '../../../src/providers/CollectionProvider'

export type CollectionTagFilterProps = {
  tag: string
}

export const CollectionTagFilter = ({ tag }: CollectionTagFilterProps): React.ReactElement | null => {
  const collection = useContext(CollectionContext)
  if (typeof tag === 'string' && !collection?.tags?.includes(tag)) return null

  return (
    <div style={{ padding: '3em', textAlign: 'center', background: '#98bd3c' }}>
      Collection Preview: {collection?.title || 'Unknown'}
    </div>
  )
}
