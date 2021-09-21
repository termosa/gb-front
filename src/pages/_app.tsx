import React from 'react'
import { AppProps } from 'next/app'
import baseApiUrl from '../modules/base-api-url'
import '../_require-env'

baseApiUrl(typeof window === 'undefined' ? process.env.BASE_API_URL : process.env.CLIENT_API_URL)

const Application = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />
}

export default Application
