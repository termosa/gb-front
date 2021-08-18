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

  it('should add "/ws30" to the url', () => {
    navigate('/')
    expect(window.location.href).toBe('/ws30')
    navigate('/collections/123456789')
    expect(window.location.href).toBe('/ws30/collections/123456789')
    navigate('/products/987654321')
    expect(window.location.href).toBe('/ws30/products/987654321')
  })
})
