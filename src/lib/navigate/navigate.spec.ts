import navigate from '.'
import window from '../window'
jest.mock('../window', () => ({}))

describe('navigate()', () => {
  beforeEach(() => {
    Object.keys(window).forEach((key) => delete window[key])
    Object.assign(window, { location: { href: '/initial-page' } })
  })

  it('should navigate to the given page', () => {
    navigate('/cart')
    expect(window.location.href).toBe('/cart')
  })
})
