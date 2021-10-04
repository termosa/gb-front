import React, { useContext, useMemo } from 'react'
import DiamondIcon from '../../lib/diamond-icon'
import styled from 'styled-components'
import Link from 'next/link'
import CustomerOrdersDetailsContext, { CustomerLevel } from '../../modules/customer-orders-details-context'
import usePoints from '../../lib/use-points'
import createLink from '../../lib/create-link'
import CustomerContext from '../../modules/customer-context'

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
  const customer = useContext(CustomerContext)
  const customerOrdersDetails = useContext(CustomerOrdersDetailsContext)
  const availablePoints = usePoints()
  const level = useMemo(() => {
    if (customer) return customerOrdersDetails.level

    if (availablePoints > 200) return CustomerLevel.PLATINUM
    if (availablePoints > 0) return CustomerLevel.GOLD
    return CustomerLevel.NOIR
  }, [availablePoints, customer, customerOrdersDetails])
  return (
    <SWrapper>
      <Link passHref href={createLink.forPage('rewards-boutique')}>
        <SLinkWrapper>
          <DiamondIcon customerLevel={level} />
          <SValueWrapper>
            <SValue>{Math.ceil(availablePoints)}</SValue>
            Points
          </SValueWrapper>
        </SLinkWrapper>
      </Link>
    </SWrapper>
  )
}
