import React from 'react'
import { Cart } from '../../lib/normalize-cart'

export const CartContext = React.createContext<undefined | Cart>(undefined)
