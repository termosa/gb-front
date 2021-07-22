import React from 'react'
import { Header } from './header'

export const BasicHeader = (): React.ReactElement => <Header onSearch={(val) => console.log(val)} />
