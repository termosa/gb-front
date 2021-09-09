import React from 'react'
import { render, waitFor } from '@testing-library/react'
import SitePromotion from '.'

describe('<SitePromotion />', () => {
  it('should render component', () => {
    const { container } = render(<SitePromotion />)
    waitFor(() => expect(container.querySelector('div').getAttribute('styled')).toBeTruthy())
  })
})
