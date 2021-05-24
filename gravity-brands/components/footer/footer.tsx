import React from 'react'
import LinksColumnGroup from '@fragrantjewels/gravity-brands.components.links-column-group'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { Social } from '@fragrantjewels/gravity-brands.components.social-links'
import { AcceptedPayments } from '@fragrantjewels/gravity-brands.components.accepted-payments'
import { useMediaPredicate } from 'react-media-hook'

export type FooterProps = {
  className?: ClassName
}

const FooterContainer = styled.div`
  font: 12px/1.3 'Montserrat', sans-serif;
  color: #fff;
  padding: 28px 0;
`

const FooterOuter = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
`

const FooterInner = styled.div`
  max-width: 500px;
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
  color: white;
  font-size: 10px;
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
                { name: 'Bath Bombs', href: '/collections/bath-bombs' },
                { name: 'Candles', href: '/collections/jewel-candles' },
                { name: 'Jewelry', href: '/collections/the-jewelry-store' },
                { name: 'Gift Sets', href: '/collections/gift-sets' },
                { name: 'All', href: '/collections/all-products' },
                { name: 'Subscription', href: '/pages/inner-circle' },
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
