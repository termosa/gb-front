import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import baseApiUrl from '../modules/base-api-url'
import { ThemeProvider } from '../helpers/theme-provider'
import '../_require-env'
import './fonts.css'
import Head from 'next/head'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
    </Head>
    <Normalize />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
