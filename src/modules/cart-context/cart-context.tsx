import React from 'react'
import { Cart } from '../normalize-cart'

export const CartContext = React.createContext<undefined | Cart>(undefined)
