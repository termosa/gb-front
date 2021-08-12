import React from 'react'
import LinksColumnGroup from 'gravity-brands/components/links-column-group'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Social } from 'gravity-brands/components/social-links'
import { AcceptedPayments } from 'gravity-brands/components/accepted-payments'
import { useMediaPredicate } from 'react-media-hook'

export type FooterProps = {
  className?: ClassName
}

const FooterContainer = styled.div`
  font: 12px/1.3 'Montserrat', sans-serif;
  color: #fff;
  padding: 28px 0;
  background: black;
`

const FooterOuter = styled.div`
  max-width: 990px;
  padding: 0 16px;
  margin: 0 auto;
`

const FooterInner = styled.div`
  margin: 0 auto;

  @media (min-width: 992px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 100%;
    padding: 20px 0;
  }
`

const FooterAccordion = styled.div`
  @media (min-width: 992px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`

const FooterCopyright = styled.div`
  font: 400 12px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  color: white;
  text-align: center;

  @media (min-width: 992px) {
    border-top: 1px solid #949494;
    margin: 0 10px;
    padding: 34px 0;
  }
`

export function Footer({ className }: FooterProps): React.ReactElement {
  const isMobileScreen = useMediaPredicate('(max-width: 992px)')

  return (
    <FooterContainer className={cn('Footer', className)}>
      <FooterOuter>
        <FooterInner>
          <FooterAccordion>
            {isMobileScreen && <Social />}
            <LinksColumnGroup
              title="Shop"
              links={[
                { name: 'Mystery Bundles', href: '/collections/mystery-bundles' },
                { name: 'Bath Bombs', href: '/collections/bath-bombs' },
                { name: 'Candles', href: '/collections/jewel-candles' },
                { name: 'Body Scrubs', href: '/collections/body-scrubs' },
                { name: 'All', href: '/collections/all-products' },
                { name: 'Subscription', href: '/pages/inner-circle' },
                { name: 'Rewards', href: '/pages/rewards-boutique' },
                { name: 'Vault', href: '/pages/vault-appraise' },
              ]}
              mobile={isMobileScreen}
            />
            <LinksColumnGroup
              title="Customer Support"
              links={[
                { name: 'Help Center', href: 'https://helpcenter.fragrantjewels.com/hc/en-us' },
                { name: 'Order Status', href: '/pages/order-status-check' },
              ]}
              mobile={isMobileScreen}
            />
            <LinksColumnGroup
              title="FAQ"
              links={[{ name: 'Terms and Conditions', href: '/pages/terms-and-conditions' }]}
              mobile={isMobileScreen}
            />
            <div>
              {!isMobileScreen && <Social />}
              <AcceptedPayments />
            </div>
          </FooterAccordion>
        </FooterInner>
        <FooterCopyright>© 2021 Fragrant Jewels LLC. All Rights Reserved.</FooterCopyright>
      </FooterOuter>
    </FooterContainer>
  )
}
