import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '../../gravity-brands/helpers/theme-provider'
import './styles/styles.scss'
import '@common/styles.css'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
