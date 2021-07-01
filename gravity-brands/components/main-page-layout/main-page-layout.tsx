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
  overflow: hidden;
  -ms-transition: opacity linear 0.5s;
  -webkit-transition: opacity linear 0.5s;
  transition: opacity linear 0.5s;
  padding-top: 138px;

  @media (max-width: 1200px) {
    padding-top: 146px;
  }
`

export const MainPageLayout = ({ children }: MainPageLayoutProps): React.ReactElement => (
  <MainPageLayoutWrapper>
    <Header onSearch={(value) => console.log(value)} />
    {children}
    <Footer className="Footer-Colored" />
  </MainPageLayoutWrapper>
)
