import React from 'react'
import styled from 'styled-components'

const SFollowTitle = styled.strong`
  display: block;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 12px;
`

const SInstTitle = styled.h2`
  font: 700 40px/1 'Cormorant Garamond', serif;
  text-align: center;
  margin: 0 auto 10px;
  & > span {
    position: relative;
  }
  & > span:after {
    content: '';
    width: 100%;
    height: 8px;
    background: rgba(77, 190, 186, 0.3);
    position: absolute;
    bottom: 6px;
    left: 0;
  }
`

const SSInstTitlePart = styled.span`
  position: relative;
  z-index: 1;
`

export function FollowUs(): React.ReactElement {
  return (
    <>
      <SFollowTitle>Follow us</SFollowTitle>
      <SInstTitle>
        <span>
          <SSInstTitlePart>@Fragrant_Jewels</SSInstTitlePart>
        </span>
      </SInstTitle>
    </>
  )
}
