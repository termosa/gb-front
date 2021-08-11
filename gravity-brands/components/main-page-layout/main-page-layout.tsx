import React from 'react'
import Footer from '@fragrantjewels/gravity-brands.components.footer'
import styled from 'styled-components'
import Header from '@fragrantjewels/gravity-brands.components.header'
import loadProductsChunk from '@fragrantjewels/gravity-brands.modules.load-products-chunk'
import useDefer from 'use-defer'
import FloatingCta from '@fragrantjewels/gravity-brands.components.floating-cta'

export type MainPageLayoutProps = {
  children: React.ReactNode | any
  userName?: string
}

const MainPageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity linear 0.5s;
  padding-top: 146px;
`

export const MainPageLayout = ({ children, userName }: MainPageLayoutProps): React.ReactElement => {
  const searchRequest = useDefer(loadProductsChunk)

  return (
    <MainPageLayoutWrapper>
      <Header onSearch={(value) => console.log(value)} userName={userName} searchedProducts={searchRequest.value} />
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
