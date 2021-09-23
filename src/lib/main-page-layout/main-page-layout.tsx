import React, { useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import useDefer from 'use-defer'
import Head from 'next/head'
import ThemeProvider from '../../helpers/theme-provider'
import SiteFooter from '../site-footer'
import SiteHeader from '../site-header'
import FloatingCta from '../../components/floating-cta'
import SitePromotion from '../site-promotion'
import loadProductsChunk from '../../modules/load-products-chunk'
import loadCustomer from '../../modules/load-customer'
import initiateKlaviyo from '../initiate-klaviyo'
import initiateAlooma from '../initiate-alooma'
import initiateGtm from '../initiate-gtm'

const MainPageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity linear 0.5s;
  padding-top: 141px;

  @media (min-width: 768px) {
    padding-top: 152px;
  }

  @media (min-width: 1200px) {
    padding-top: 142px;
  }
`

const Header = styled(SiteHeader)`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
`

export type MainPageLayoutProps = {
  children: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
}

export function MainPageLayout({ children, className, style }: MainPageLayoutProps): React.ReactElement | null {
  useEffect(() => {
    initiateKlaviyo()
    initiateAlooma()
    initiateGtm()
  })

  const searchRequest = useDefer(loadProductsChunk)
  const { value: customer } = useDefer(() => loadCustomer({ skipCache: true }).catch(() => null), [], [])

  return (
    <ThemeProvider>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Normalize />
      <MainPageLayoutWrapper className={cn(className)} style={style}>
        <Header
          userName={customer?.firstName}
          onSearch={(search) => (search ? searchRequest.execute({ search_in: search }) : searchRequest.reset())}
          searchedProducts={searchRequest.value}
          userEmail={customer?.email}
        />
        <div className="app-promotion-wrapper">
          <SitePromotion />
        </div>
        <div className="app-re-wrapper" id="app-wrapper">
          <div className="app-re-content" id="app-content">
            <main className="app-h-main">{children}</main>
          </div>
        </div>
        <FloatingCta />
        <SiteFooter className="Footer-Colored" />
      </MainPageLayoutWrapper>
    </ThemeProvider>
  )
}
