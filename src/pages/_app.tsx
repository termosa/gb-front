import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import baseApiUrl from '../modules/base-api-url'
import { ThemeProvider } from '../helpers/theme-provider'
import '../_require-env'
import './fonts.css'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Normalize />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
