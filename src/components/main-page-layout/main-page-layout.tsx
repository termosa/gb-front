import React from 'react'
import styled from 'styled-components'
import useDefer from 'use-defer'
import Footer from '../footer'
import Header from '../header'
import FloatingCta from '../floating-cta'
import loadProductsChunk from '../../modules/load-products-chunk'
import loadCustomer from '../../modules/load-customer'

export type MainPageLayoutProps = {
  children: React.ReactNode
  userName?: string
}

const MainPageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity linear 0.5s;
  padding-top: 146px;
`

export const MainPageLayout = ({ children }: MainPageLayoutProps): React.ReactElement => {
  const searchRequest = useDefer(loadProductsChunk)
  const customerRequest = useDefer(() => loadCustomer().catch(() => null), [], [])

  return (
    <MainPageLayoutWrapper>
      <Header
        userName={customerRequest.value?.fullName}
        onSearch={(value) => console.log(value)}
        searchedProducts={searchRequest.value}
      />
      <div className="app-re-wrapper" id="app-wrapper">
        <div className="app-re-content" id="app-content">
          <main className="app-h-main">{children}</main>
        </div>
      </div>
      <FloatingCta />
      <Footer className="Footer-Colored" />
    </MainPageLayoutWrapper>
  )
}
