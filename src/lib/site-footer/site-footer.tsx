import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useMediaPredicate } from 'react-media-hook'
import SocialLinks from '../../components/social-links'
import AcceptedPayments from '../../components/accepted-payments'
import LinksColumnGroup from '../../components/links-column-group'
import createLink from '../create-link'

const FooterContainer = styled.div`
  font: 12px/1.3 'Montserrat', sans-serif;
  color: #fff;
  padding: 45px 0 50px;
  background: black;

  @media (min-width: 992px) {
    padding: 28px 0 15px;
  }
`

const FooterOuter = styled.div`
  max-width: 1010px;
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
  letter-spacing: 0.05em;
  color: white;
  text-align: center;

  @media (min-width: 992px) {
    border-top: 1px solid #949494;
    margin: 0 10px;
    padding: 34px 0;
  }
`

const PreFooterPromoMessage = styled.div`
  max-width: 990px;
  margin: -15px auto 30px;
  padding: 0 15px 0;
  text-align: center;
  line-height: 1.5;

  @media (min-width: 992px) {
    margin: 0 auto 30px;
    padding: 15px 25px 0;
  }
`

export type SiteFooterProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SiteFooter({ className, style }: SiteFooterProps): React.ReactElement {
  const isMobileScreen = useMediaPredicate('(max-width: 991px)')
  const isPreFooterPromoMessage = false

  return (
    <div>
      <FooterContainer className={cn(className)} style={style}>
        {isPreFooterPromoMessage && <PreFooterPromoMessage />}
        <FooterOuter>
          <FooterInner>
            <FooterAccordion>
              {isMobileScreen && <SocialLinks />}
              <LinksColumnGroup
                title="QUICK LINKS"
                links={[
                  { name: 'Halloween', href: createLink.forCollection('spooky') },
                  { name: 'Bath Bombs', href: createLink.forCollection('bath-bombs') },
                  { name: 'Candles', href: createLink.forCollection('jewel-candles') },
                  { name: 'Body Scrubs', href: createLink.forCollection('body-scrubs') },
                  { name: 'All', href: createLink.forCollection('all-products') },
                  { name: 'Subscription', href: createLink.forPage('inner-circle') },
                  { name: 'Rewards', href: createLink.forPage('rewards-boutique') },
                  { name: 'Vault', href: createLink.forPage('vault-appraise') },
                ]}
                mobile={isMobileScreen}
              />
              <LinksColumnGroup
                title="CUSTOMER CARE"
                links={[
                  { name: 'Help Center', href: 'https://helpcenter.fragrantjewels.com/hc/en-us' },
                  { name: 'Order Status', href: createLink.forPage('order-status-check') },
                ]}
                mobile={isMobileScreen}
              />
              <LinksColumnGroup
                title="ABOUT"
                links={[
                  { name: 'Terms and Conditions', href: createLink.forPage('terms-and-conditions') },
                  {
                    name: 'Enter the Vault 2021-2022 Sweepstakes',
                    href: createLink.forPage('enter-the-vault-2021-2022-giveaway'),
                  },
                  { name: 'Tell us your ideas!', href: 'https://www.surveygizmo.com/s3/5354856/Product-inspiration' },
                  { name: 'Privacy Policy', href: createLink.forPage('privacy') },
                ]}
                mobile={isMobileScreen}
              />
              <div>
                {!isMobileScreen && <SocialLinks />}
                <AcceptedPayments />
              </div>
            </FooterAccordion>
          </FooterInner>
          <FooterCopyright>?? 2021 Fragrant Jewels LLC. All Rights Reserved.</FooterCopyright>
        </FooterOuter>
      </FooterContainer>
    </div>
  )
}
