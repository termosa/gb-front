import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import baseApiUrl from '../modules/base-api-url'
import gtm from '../lib/gtm'
import '../_require-env'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const Application = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    const handleRouteChange = (url: string) => gtm('pageview', { url })
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  })
  return <Component {...pageProps} />
}

export default Application
