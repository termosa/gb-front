import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '../../gravity-brands/helpers/theme-provider'
import './styles/product.scss'
import './styles/styles.scss'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
