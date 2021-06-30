import React from 'react'
import Footer from '@fragrantjewels/gravity-brands.components.footer'
import styled from 'styled-components'

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
`

export const MainPageLayout = ({ children }: MainPageLayoutProps): React.ReactElement => (
  <MainPageLayoutWrapper>
    {children}
    <Footer className="Footer-Colored" />
  </MainPageLayoutWrapper>
)
