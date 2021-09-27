import React, { useContext } from 'react'
import DiamondIcon from '../../lib/diamond-icon'
import styled from 'styled-components'
import CustomerOrdersDetailsContext from '../../modules/customer-orders-details-context'
import usePoints from '../../lib/use-points'

const SWrapper = styled.div``

const SLinkWrapper = styled.a`
  position: relative;
  color: #000;
  background-size: 100% 100%;
  display: block;
  text-decoration: none;
`

const SValueWrapper = styled.div`
  font-weight: 600;
  position: absolute;
  top: 44%;
  left: calc(50% + 19px);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 9px;
  text-transform: uppercase;
  line-height: 1;

  @media (min-width: 1200px) {
    line-height: 1.25;
  }
`

const SValue = styled.div`
  font-weight: 700;
  font-size: 14px;
`

export function PointsWidget(): React.ReactElement {
  const customerOrdersDetails = useContext(CustomerOrdersDetailsContext)
  const availablePoints = usePoints()
  return (
    <SWrapper>
      <SLinkWrapper href="/pages/rewards-boutique">
        <DiamondIcon customerLevel={customerOrdersDetails.level} />
        <SValueWrapper>
          <SValue>{availablePoints}</SValue>
          Points
        </SValueWrapper>
      </SLinkWrapper>
    </SWrapper>
  )
}
