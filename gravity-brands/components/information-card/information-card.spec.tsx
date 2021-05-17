import React from 'react'
import { render } from '@testing-library/react'
import { BasicInformationCard } from './information-card.composition'

describe('InformationCard', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicInformationCard />)
    const rendered = getByText('InformationCard content')
    expect(rendered).toBeTruthy()
  })
})
