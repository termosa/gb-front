import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import InformationCard from '../../components/information-card'
import useScreenSize from '../use-screen-size'
import Slider from '../slider'

export type { InformationCard }

const SWrapper = styled.section`
  text-align: center;
  background: linear-gradient(0deg, #fdfbf9 0%, #fdfbf9 50%, white 50%, white 100%);
  margin: 0 auto;
  padding: 50px 0 56px;

  @media (min-width: 768px) {
    padding: 46px 0 0;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    padding: 76px 0 0;
  }
`

const SInformationOverviewContainer = styled.div`
  max-width: 990px;
  padding: 0 15px;
  margin: 0 auto;
`

const STitleContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
`

const STitle = styled.h2`
  font: 700 40px/1.1 'Cormorant Garamond', serif;
  letter-spacing: -0.02em;
  margin: 0 auto 15px;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 auto 24px;
    padding: 0;
  }
`

const STitleUnderline = styled.span`
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    width: 100%;
    height: 10px;
    background: rgba(77, 190, 186, 0.3);
    position: absolute;
    bottom: 6px;
    left: 0;
    z-index: -1;
  }
`

const SCardsWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 36px;
    gap: 20px;
  }

  @media (min-width: 992px) {
    gap: 27px;
    padding-bottom: 36px;
  }
`

const SliderHolder = styled.div`
  position: relative;
  padding: 0;
  max-width: 414px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  .react-multi-carousel-list {
    padding-bottom: 23px;
  }
`

const SArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 45px;
  font-size: 0;
  line-height: 1;
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 94px;

  @media (min-width: 375px) {
    top: 121px;
  }

  @media (min-width: 414px) {
    top: 141px;
  }

  @media (min-width: 450px) {
    top: 155px;
  }
`

const SPrevArrow = styled(SArrow)`
  left: -15px;
  padding-left: 5px;

  @media (min-width: 375px) {
    left: -22px;
  }

  button {
    transform: translateX(10px) rotate(45deg);
  }
`

const SNextArrow = styled(SArrow)`
  right: -15px;
  padding-right: 5px;

  @media (min-width: 375px) {
    right: -22px;
  }

  button {
    transform: translateX(-10px) rotate(-135deg);
  }
`

const SArrowButton = styled.button`
  display: block;
  width: 17px;
  height: 17px;
  border: none;
  border-bottom: 1px solid #9059c8;
  border-left: 1px solid #9059c8;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

const SCustomDot = styled.div<{
  isActive: boolean
}>`
  background: #4dbeba;
  opacity: ${(props) => (props.isActive ? 0.95 : 0.6)};
  width: 10px;
  height: 10px;
  margin: 0 7px;
  border-radius: 50%;
`

const SCustomDotWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export type InformationOverviewProps = {
  className?: ClassName
  style?: React.CSSProperties
  title: string
  titleUnderline: string
  cards: InformationCard[]
}

export function InformationOverview({
  className,
  style,
  title,
  titleUnderline,
  cards,
}: InformationOverviewProps): React.ReactElement {
  const screenSize = useScreenSize()
  const [selectedItem, setSelectedItem] = useState(0)
  const titleArr = title.split(titleUnderline)

  return (
    <SWrapper className={cn(className)} style={style}>
      <SInformationOverviewContainer>
        <STitleContainer>
          <STitle>
            <span>{titleArr[0]}</span>
            <span>
              <STitleUnderline>{titleUnderline}</STitleUnderline>
            </span>
            <span>{titleArr[1]}</span>
          </STitle>
        </STitleContainer>
        <SCardsWrapper>
          {screenSize.greaterThanMedium ? (
            cards.map((card) => <InformationCard key={card.image + card.title} card={card} />)
          ) : (
            <>
              <SliderHolder>
                <SPrevArrow onClick={() => setSelectedItem(selectedItem - 1)}>
                  <SArrowButton />
                </SPrevArrow>
                <SNextArrow onClick={() => setSelectedItem(selectedItem + 1)}>
                  <SArrowButton />
                </SNextArrow>
                <Slider
                  infinite
                  arrows={false}
                  selectedItem={selectedItem}
                  onChange={(i) => {
                    selectedItem !== i && setSelectedItem(i)
                  }}
                >
                  {cards.map((card) => (
                    <InformationCard key={card.image + card.title} card={card} />
                  ))}
                </Slider>
              </SliderHolder>
              <SCustomDotWrapper>
                {cards.map((_, i) => (
                  <SCustomDot isActive={selectedItem === i} />
                ))}
              </SCustomDotWrapper>
            </>
          )}
        </SCardsWrapper>
      </SInformationOverviewContainer>
    </SWrapper>
  )
}
