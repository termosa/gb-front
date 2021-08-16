import React from 'react'
import { render } from '@testing-library/react'
import SiteHeader from '.'

describe('<SiteHeader>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<SiteHeader />)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
