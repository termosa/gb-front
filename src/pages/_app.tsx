import React, { FC } from 'react'
import { AppProps } from 'next/app'
import '@common/css/layout.scss'
import './styles/home.scss'
import '@common/css/styles.css'
import { ThemeProvider } from '../../gravity-brands/helpers/theme-provider'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
