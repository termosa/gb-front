import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
`

export const SiteSection = (props: React.HTMLProps<HTMLDivElement>): React.ReactElement => (
  <div {...props}>
    <Content>{props.children}</Content>
  </div>
)
