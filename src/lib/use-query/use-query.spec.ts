import { renderHook } from '@testing-library/react-hooks'
import useQuery from '.'
import window from '../window'
jest.mock('../window', () => ({}))

describe('navigate()', () => {
  beforeEach(() => {
    Object.keys(window).forEach((key) => delete window[key])
    Object.assign(window, { location: { href: '/initial-page' } })
  })

  it('should add query "collections/jewel-candles#size=6&sortF=price-low-to-high"', () => {
    window.location.search = '/size=6&sortF=price-low-to-high'
    const { result } = renderHook(() => useQuery())
    const res = { size: '6', sortF: 'price-low-to-high' }
    expect(result.current).toEqual(res)
  })
})
