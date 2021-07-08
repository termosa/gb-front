import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type FullWidthBannerProps = {
  className?: ClassName
  title: string
  text: string
  background: string
  position?: 'left' | 'right'
  textColor?: 'dark' | 'light'
}

const FullWidthBannerWrapper = styled.div<{ background: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.familyMain};
  background-image: url(${({ background }) => background});
  background-size: 100%;
  height: 315px;

  @media (max-width: 900px) {
    background-image: none;
    height: 157px;
  }
`

const FullWidthBannerContainer = styled.div<{ position: 'left' | 'right' }>`
  padding: 0 25px;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ position }) => (position === 'left' ? 'row' : 'row-reverse')};
  text-align: ${({ position }) => position};

  @media (max-width: 900px) {
    justify-content: center;
    text-align: center;
  }
`

const FullWidthBannerInfo = styled.div<{ textColor: 'dark' | 'light' }>`
  width: 340px;
  color: ${({ textColor }) => (textColor === 'dark' ? '#000' : '#fff')};
`

const FullWidthBannerTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.familySecondary};
  font-weight: 700;
  font-size: 40px;
`

const FullWidthBannerText = styled.p`
  line-height: 1.5em;
`

const name = 'FullWidthBanner'

export const FullWidthBanner = ({
  className,
  text,
  title,
  background,
  textColor = 'dark',
  position = 'left',
}: FullWidthBannerProps): React.ReactElement => (
  <FullWidthBannerWrapper className={cn(name, className)} background={background}>
    <FullWidthBannerContainer position={position}>
      <FullWidthBannerInfo textColor={textColor}>
        <FullWidthBannerTitle>{title}</FullWidthBannerTitle>
        <FullWidthBannerText>{text}</FullWidthBannerText>
      </FullWidthBannerInfo>
    </FullWidthBannerContainer>
  </FullWidthBannerWrapper>
)
