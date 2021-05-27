import React from 'react'
import { render } from '@testing-library/react'
import { BasicInnerCircleExclusive } from './inner-circle-exclusive.composition'

describe('InnerCircleExclusive', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicInnerCircleExclusive />)
    const rendered = getByText('InnerCircleExclusive content')
    expect(rendered).toBeTruthy()
  })
})
