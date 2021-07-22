import React, { FC } from 'react'
import { AppProps } from 'next/app'
import baseApiUrl from '@fragrantjewels/gravity-brands.modules.base-api-url'
import { ThemeProvider } from '@fragrantjewels/gravity-brands.helpers.theme-provider'
import './styles/product.scss'
import './styles/styles.scss'

const apiUrl = typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL

if (!baseApiUrl(apiUrl)) {
  throw new Error(`${typeof window === 'undefined' ? 'BASE' : 'CLIENT'}_API_URL env variable is not set`)
}

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
