import React from 'react'
import { render } from '@testing-library/react'
import { LinksColumnGroup } from './links-column-group'

describe('LinksColumnGroup', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<LinksColumnGroup title="Customer Support" links={[]} />)
    const rendered = getByText('LinksColumnGroup content')
    expect(rendered).toBeTruthy()
  })
})
