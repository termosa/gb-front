import React from 'react'
import { render } from '@testing-library/react'
import InformationOverview from '.'

describe('<InformationOverview>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<InformationOverview>Component content</InformationOverview>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
