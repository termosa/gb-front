import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type PromiseBarProps = {
  className?: ClassName
}

const SWrapper = styled.div`
  padding: 30px 0 20px;
  background-color: #fdfbf9;

  @media (min-width: 768px) {
    padding: 30px 0 25px;
  }
`

const SContentWrapper = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 30px;
    max-width: 1020px;
  }
`

const STitle = styled.div`
  font: 700 30px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 10px;
  @media (min-width: 375px) {
    font-size: 32px;
  }
`

const SPicsWrapper = styled.div`
  padding-top: 10px;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`

const SRow24 = styled.div`
  margin: 0 -4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 0 -2.5%;
  }
`

const SPromiseItem = styled.div`
  margin: 0 4% 15px;
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
    margin: 0 2.5% 10px;
  }
`

const SPromiseItemImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto 10px;
  max-width: 110px;
  border-style: none;
`

const SPromiseItemLabel = styled.span`
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

const PROMISE_ITEMS = [
  { title: 'Cruelty free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cruelty-free-icon.svg' },
  { title: 'Handmade in USA', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/made-in-usa-icon.svg' },
  { title: 'Paraben free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/paraben-free-icon.svg' },
  { title: 'Phthalate free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/phthalate-free-icon.svg' },
]

export function PromiseBar({ className }: PromiseBarProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('PromiseBar', className)}>
      <SContentWrapper>
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
      </SContentWrapper>
    </SWrapper>
  )
}
