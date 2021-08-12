import React from 'react'
import styled from 'styled-components'
import Footer from 'gravity-brands/components/footer'
import Header from 'gravity-brands/components/header'
import loadProductsChunk from 'gravity-brands/modules/load-products-chunk'
import useDefer from 'use-defer'
import FloatingCta from 'gravity-brands/components/floating-cta'
import loadCustomer from 'gravity-brands/modules/load-customer'

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
