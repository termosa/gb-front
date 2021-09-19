import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useMediaPredicate } from 'react-media-hook'
import SocialLinks from '../../components/social-links'
import AcceptedPayments from '../../components/accepted-payments'
import LinksColumnGroup from '../../components/links-column-group'

const FooterContainer = styled.div`
  font: 12px/1.3 'Montserrat', sans-serif;
  color: #fff;
  padding: 37px 0 50px;
  margin-top: 10px;
  background: black;

  @media (min-width: 992px) {
    padding: 28px 0;
  }
`

const FooterOuter = styled.div`
  max-width: 990px;
  padding: 0 15px;
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
  letter-spacing: 0.7px;
  color: white;
  text-align: center;

  @media (min-width: 992px) {
    border-top: 1px solid #949494;
    margin: 0 10px;
    padding: 34px 0;
  }
`

export type SiteFooterProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SiteFooter({ className, style }: SiteFooterProps): React.ReactElement {
  const isMobileScreen = useMediaPredicate('(max-width: 991px)')

  return (
    <FooterContainer className={cn(className)} style={style}>
      <FooterOuter>
        <FooterInner>
          <FooterAccordion>
            {isMobileScreen && <SocialLinks />}
            <LinksColumnGroup
              title="Shop"
              links={[
                { name: 'Halloween', href: '/collections/spooky' },
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
              {!isMobileScreen && <SocialLinks />}
              <AcceptedPayments />
            </div>
          </FooterAccordion>
        </FooterInner>
        <FooterCopyright>© 2021 Fragrant Jewels LLC. All Rights Reserved.</FooterCopyright>
      </FooterOuter>
    </FooterContainer>
  )
}
