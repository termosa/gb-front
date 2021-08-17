import React from 'react'
import { Product } from '../normalize-product'

export const ProductContext = React.createContext<undefined | Product>(undefined)
