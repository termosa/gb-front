import React, { FC } from 'react'
import { AppProps } from 'next/app'
import baseApiUrl from '@fragrantjewels/gravity-brands.modules.base-api-url'
import { ThemeProvider } from '@fragrantjewels/gravity-brands.helpers.theme-provider'
import './styles/product.scss'
import './styles/styles.scss'

const API_URL_PROPERTY_NAME = typeof window === 'undefined' ? 'BASE_API_URL' : 'CLIENT_API_URL'

if (!baseApiUrl(process.env[API_URL_PROPERTY_NAME])) {
  throw new Error(`${API_URL_PROPERTY_NAME} env variable is not set`)
}

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
