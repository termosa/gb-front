import React, { FC } from 'react'
import { AppProps } from 'next/app'
import baseApiUrl from '@fragrantjewels/gravity-brands.modules.base-api-url'
import { ThemeProvider } from '@fragrantjewels/gravity-brands.helpers.theme-provider'
import './styles/product.scss'
import './styles/styles.scss'

if (!baseApiUrl(process.env.BASE_API_URL)) {
  throw new Error('BASE_API_URL env variable is not set')
}

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
