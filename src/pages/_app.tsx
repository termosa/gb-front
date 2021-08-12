import React, { FC } from 'react'
import { AppProps } from 'next/app'
import baseSiteUrl from 'gravity-brands/modules/base-site-url'
import baseApiUrl from 'gravity-brands/modules/base-api-url'
import { ThemeProvider } from 'gravity-brands/helpers/theme-provider'
import '../_require-env'
import './styles/product.scss'
import './styles/styles.scss'

baseSiteUrl(process.env.SITE_URL || 'https://www.fragrantjewels.com')
baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
