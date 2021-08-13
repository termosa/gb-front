import React from 'react'
import { Customer } from '../normalize-customer'

export const CustomerContext = React.createContext<undefined | Customer>(undefined)
