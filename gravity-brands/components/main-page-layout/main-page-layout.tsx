import React from 'react'
import Footer from '@fragrantjewels/gravity-brands.components.footer'
import styled from 'styled-components'
import Header from '@fragrantjewels/gravity-brands.components.header'

export type MainPageLayoutProps = {
  children: React.ReactNode
}

const MainPageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity linear 0.5s;
  padding-top: 146px;
`

export const MainPageLayout = ({ children }: MainPageLayoutProps): React.ReactElement => (
  <MainPageLayoutWrapper>
    <Header onSearch={(value) => console.log(value)} />
    <div className="app-re-wrapper" id="app-wrapper">
      <div className="app-re-content" id="app-content">
        <main className="app-h-main">{children}</main>
      </div>
    </div>
    <Footer className="Footer-Colored" />
  </MainPageLayoutWrapper>
)
