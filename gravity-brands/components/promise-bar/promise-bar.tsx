import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type PromiseBarProps = {
  className?: ClassName
}

const SWrapper = styled.div`
  padding: 30px 0 20px;
  background-color: #fdfbf9;
`

const SContentWrapper = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0 -1%;
  }
  @media (min-width: 992px) {
    margin: 0 -2%;
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
  margin: 0 -2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 10px;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`

const SPromiseItem = styled.div`
  width: 25.33%;
  margin: 0 4% 25px;
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
    width: 14.66%;
    margin: 0 1% 15px;
  }
  @media (min-width: 992px) {
    width: 12.66%;
    margin: 0 2% 15px;
  }
`

const SPromiseItemImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto 10px;
  max-width: 94px;
`

const SPromiseItemLabel = styled.span`
  font-size: 8px;
  text-align: center;
`

const PROMISE_ITEMS = [
  { title: '100% vegan', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/vegan-icon.png' },
  { title: 'Cruelty free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cruelty-free-icon.png' },
  { title: 'Phthalate free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/phthalate-free-icon.png' },
  { title: 'Paraben free', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/paraben-free-icon.png' },
  { title: 'Handmade', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/hand-crafted-icon.png' },
  { title: 'Made in LA', img: 'https://fragrantjewels.s3.amazonaws.com/app/app-home/img/made-in-la-icon.png' },
]

export function PromiseBar({ className }: PromiseBarProps): React.ReactElement | null {
  return (
    <SWrapper className={cn('PromiseBar', className)}>
      <SContentWrapper>
        <STitle>Our promise to you</STitle>
        <SPicsWrapper>
          {PROMISE_ITEMS.map((promise) => (
            <SPromiseItem>
              <SPromiseItemImg src={promise.img} />
              <SPromiseItemLabel>{promise.title}</SPromiseItemLabel>
            </SPromiseItem>
          ))}
        </SPicsWrapper>
      </SContentWrapper>
    </SWrapper>
  )
}
