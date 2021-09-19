import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Normalize } from 'styled-normalize'
import baseApiUrl from '../modules/base-api-url'
import { ThemeProvider } from '../helpers/theme-provider'
import '../_require-env'
import './fonts.css'
import initiateKlaviyo from 'src/lib/initiate-klaviyo'
import initiateAlooma from 'src/lib/initiate-alooma'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const Application = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    initiateKlaviyo()
    initiateAlooma()
  })
  return (
    <ThemeProvider>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
      </Head>
      <Normalize />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application
