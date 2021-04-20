import React, { FC } from 'react'
import { AppProps } from 'next/app'
import '@common/css/layout.scss'
import '@common/css/styles.css'
import './styles/home.scss'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default CustomApp
