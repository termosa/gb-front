import React from 'react'
import { Header } from './header'

export const BasicHeader = (): React.ReactElement => <Header onSearch={(val) => console.log(val)} />

export const HeaderWithUser = (): React.ReactElement => (
  <Header onSearch={(val) => console.log(val)} user={{ name: 'Kelya' }} />
)
