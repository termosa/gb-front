import React from 'react'
import { render, waitFor } from '@testing-library/react'
import SiteHeader from '.'

describe('<SiteHeader>', () => {
  it('should render with the correct user name', () => {
    const { getByText } = render(<SiteHeader onSearch={(result) => console.log(result)} userName="Kelya" />)
    waitFor(() => expect(getByText('Hi, Kelya')).toBeTruthy())
  })
})
