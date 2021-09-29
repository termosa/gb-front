import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import baseApiUrl from '../modules/base-api-url'
import ga from '../lib/google-analytics'
import facebookPixel from '../lib/facebook-pixel'
import pinterestPixel from '../lib/pinterest-pixel'
import Head from 'next/head'
import '../_require-env'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const Application = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    const handleRouteChange = () => {
      ga('pageview')
      facebookPixel('PageView')
      pinterestPixel('page')
    }
    handleRouteChange()
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  })
  return (
    <>
      <Head>
        <title>Fragrant Jewels</title>
        <link rel="shortcut icon" href="https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
