import React from 'react'
import { render } from '@testing-library/react'
import DiamondIcon from '.'
import { CustomerLevel } from '../normalize-customer-orders-details'

describe('<DiamondIcon>', () => {
  it('should render with correct icon color', () => {
    const { container } = render(<DiamondIcon customerLevel={CustomerLevel.PLATINUM} />)
    expect(container.querySelector('stop')).toHaveAttribute('stop-color', '#A8AEB6') // Platinum color
  })

  it('should render an svg icon', () => {
    const { container } = render(<DiamondIcon customerLevel={CustomerLevel.PLATINUM} />)
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
