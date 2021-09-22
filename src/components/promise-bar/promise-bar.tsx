import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import Image from '../../lib/image'

export type PromiseBarProps = {
  className?: ClassName
}

const SPromiseSection = styled.section`
  background-color: #fdfbf9;
  padding: 22px 0;
`

const SPromiseContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const SWrapper = styled.div`
  padding: 22px 0 24px;
  background-color: #fdfbf9;

  @media (min-width: 768px) {
    padding: 22px 0;
  }
`

const STitle = styled.div`
  font: 700 32px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 10px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const SPicsWrapper = styled.div`
  padding-top: 14px;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 100%;
    padding-top: 16px;
  }
`

const SRow24 = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 350px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
  }
`

const SPromiseItem = styled.div`
  margin: 0 4% 16px;
  width: 42%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0 2% 10px;
    width: 46%;
  }
  @media (min-width: 992px) {
    margin: 0 1% 10px;
    width: 23%;
  }
`

const SPromiseItemImg = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 110px;
  border-style: none;
`

const SPromiseItemLabel = styled.span`
  font: 400 11px/1.25 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;

  @media (min-width: 375px) {
    font-size: 13px;
  }

  @media (min-width: 768px) {
    font: 400 16px/1.25 'Montserrat', sans-serif;
  }
`

const PROMISE_ITEMS = [
  {
    title: 'Cruelty free',
    img: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/cruelty-free-icon.png',
  },
  {
    title: 'Handmade in USA',
    img: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/made-in-usa-icon.png',
  },
  {
    title: 'Paraben free',
    img: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/paraben-free-icon.png',
  },
  {
    title: 'Phthalate free',
    img: 'https://new-fragrantjewels.s3.us-west-2.amazonaws.com/app/img/phthalate-free-icon.png',
  },
]

export function PromiseBar({ className }: PromiseBarProps): React.ReactElement | null {
  return (
    <SPromiseSection className="app-h-section app-h-char-section app-h-char-section_colored">
      <SPromiseContainer>
        <SWrapper className={cn('PromiseBar', className)}>
          <STitle>Our promise to you</STitle>
          <SPicsWrapper>
            <SRow24>
              {PROMISE_ITEMS.map((promise) => (
                <SPromiseItem key={promise.title}>
                  <SPromiseItemImg src={promise.img} />
                  <SPromiseItemLabel>{promise.title}</SPromiseItemLabel>
                </SPromiseItem>
              ))}
            </SRow24>
          </SPicsWrapper>
        </SWrapper>
      </SPromiseContainer>
    </SPromiseSection>
  )
}
