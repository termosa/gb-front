import React from 'react'
import { SearchField } from './search-field'

export const BasicRingSize = (): React.ReactElement => <SearchField onSubmit={(value) => console.log('Value: ', value)} />
