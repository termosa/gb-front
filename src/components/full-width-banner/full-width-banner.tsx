import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { useMediaPredicate } from 'react-media-hook'
import SiteSection from '../site-section'

export type FullWidthBannerProps = {
  className?: ClassName
  title: string
  text: string
  imageUrl: string
  position?: string
  textColor?: string
}

const FullWidthBannerInfo = styled.div<{ textColor: string; position: string }>`
  padding: 48px 25px;
  width: 340px;
  text-align: center;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.familyMain};

  @media (min-width: 901px) {
    color: ${({ textColor }) => textColor};
    text-align: ${({ position }) => position};
    margin: ${({ position }) => {
      switch (position) {
        case 'right':
          return '0 0 0 auto'
        case 'center':
          return '0 auto'
        default:
          return '0'
      }
    }};
  }
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
  imageUrl,
  textColor = '#000',
  position = 'left',
}: FullWidthBannerProps): React.ReactElement => {
  const isMobileScreen = useMediaPredicate('(max-width: 900px)')

  return (
    <SiteSection
      style={{
        backgroundImage: isMobileScreen ? 'none' : `url(${imageUrl})`,
        backgroundSize: '100%',
      }}
    >
      <FullWidthBannerInfo textColor={textColor} position={position} className={cn(name, className)}>
        <FullWidthBannerTitle>{title}</FullWidthBannerTitle>
        <FullWidthBannerText>{text}</FullWidthBannerText>
      </FullWidthBannerInfo>
    </SiteSection>
  )
}
