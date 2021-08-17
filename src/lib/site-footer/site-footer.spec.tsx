import React from 'react'
import { render } from '@testing-library/react'
import SiteFooter from '.'

describe('<SiteFooter>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<SiteFooter />)
    const rendered = getByText('Customer Support')
    expect(rendered).toBeTruthy()
  })
})
