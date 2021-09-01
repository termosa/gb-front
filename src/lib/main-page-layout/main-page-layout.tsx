import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useDefer from 'use-defer'
import SiteFooter from '../site-footer'
import SiteHeader from '../site-header'
import FloatingCta from '../../components/floating-cta'
import { PromotionSite } from '../promotion-site'
import loadProductsChunk from '../../modules/load-products-chunk'
import loadCustomer from '../../modules/load-customer'

const MainPageLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: opacity linear 0.5s;
  padding-top: 155px;

  @media (min-width: 768px) {
    padding-top: 156px;
  }

  @media (min-width: 1200px) {
    padding-top: 165px;
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

export function MainPageLayout({ children, className, style }: MainPageLayoutProps): React.ReactElement {
  const searchRequest = useDefer(loadProductsChunk)
  const { value: customer } = useDefer(() => loadCustomer().catch(() => null), [], [])
  return (
    <MainPageLayoutWrapper className={cn(className)} style={style}>
      <Header
        userName={customer?.fullName}
        onSearch={(value) => console.log(value)}
        searchedProducts={searchRequest.value}
        userEmail={customer?.email}
      />
      <PromotionSite />
      <div className="app-re-wrapper" id="app-wrapper">
        <div className="app-re-content" id="app-content">
          <main className="app-h-main">{children}</main>
        </div>
      </div>
      <FloatingCta />
      <SiteFooter className="Footer-Colored" />
    </MainPageLayoutWrapper>
  )
}
