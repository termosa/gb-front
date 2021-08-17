import React from 'react'
import { Collection } from '../../lib/load-collection'

export const CollectionContext = React.createContext<undefined | Collection>(undefined)
