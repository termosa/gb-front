import React from 'react'
import styled from 'styled-components'
import SiteSection from '../site-section'
import useScreenSize from '../../lib/use-screen-size'

const SFjWildSectionTitle = styled.div<{
  isMobile: boolean
}>`
  font: ${(props) => (props.isMobile ? `600 16px/1.5 'Montserrat', serif` : `700 40px/1 'Cormorant Garamond', serif`)};
  text-transform: ${(props) => (props.isMobile ? `uppercase` : `initial`)};
  text-align: center;
  margin: 0 0 12px 0;

  @media (min-width: 768px) {
    margin: 0 0 12px 0;
  }

  & > span {
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: ${(props) => (props.isMobile ? `9px` : `10px`)};
      background: rgba(77, 190, 186, 0.3);
      position: absolute;
      bottom: ${(props) => (props.isMobile ? `0` : `6px`)};
      left: 0;
    }
  }
`

const SFjWildTitle = styled.h2`
  text-transform: none;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 16px;

  @media (min-width: 768px) {
    margin: 0 auto 20px;
  }
`

const SFjWildText = styled.div`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  padding-bottom: 5px;
  margin: 0 0 10px;
  display: flex;
  flex-direction: column;
`

export type JFWildProps = {
  title: string
  textFirstPart: string
  textSecondPart: string
}

export const FjWild = ({ title, textFirstPart, textSecondPart }: JFWildProps): React.ReactElement => {
  const screenSize = useScreenSize()

  return (
    <SiteSection>
      <SFjWildTitle>
        {screenSize.greaterThanMedium ? (
          <SFjWildSectionTitle isMobile={false}>
            <span>{title}</span>
          </SFjWildSectionTitle>
        ) : (
          <SFjWildSectionTitle isMobile={true}>
            <span>{title}</span>
          </SFjWildSectionTitle>
        )}
      </SFjWildTitle>
      <SFjWildText>
        <span>{textFirstPart}</span>
        <span>{textSecondPart}</span>
      </SFjWildText>
    </SiteSection>
  )
}
