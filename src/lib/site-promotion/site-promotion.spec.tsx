import React from 'react'
import { render, waitFor } from '@testing-library/react'
import SitePromotion from '.'
import setCookie from '../set-cookie'
import window from '../window'
jest.mock('../window', () => ({}))

describe('<SitePromotion />', () => {
  beforeEach(() => {
    Object.keys(window).forEach((key) => delete window[key])
    Object.assign(window, { location: { hostname: 'localhost', search: '?promo=blackcat' }, document: { cookie: '' } })
  })

  it('should render component', () => {
    const expires = Date.now() + 3600 * 1000
    setCookie('promo-expiration', expires, 1)
    setCookie('c_promo', 'blackcat', 1)

    const { container } = render(<SitePromotion />)
    waitFor(() => expect(container.querySelector('div')).toBeTruthy())
  })
})
