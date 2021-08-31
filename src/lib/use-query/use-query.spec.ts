import { renderHook } from '@testing-library/react-hooks'
import useQuery from '.'
import window from '../window'
jest.mock('../window', () => ({}))

describe('useQuery()', () => {
  beforeEach(() => {
    Object.keys(window).forEach((key) => delete window[key])
  })

  it('should parse multiply parameter empty', () => {
    Object.assign(window, { location: { search: '' } })
    const { result } = renderHook(() => useQuery())
    const res = {}
    expect(result.current).toEqual(res)
  })

  it('should parse single parameter "size=6"', () => {
    Object.assign(window, { location: { search: '?size=6' } })
    const { result } = renderHook(() => useQuery())
    const res = { size: '6' }
    expect(result.current).toEqual(res)
  })

  it('should parse multiply parameters "size=6&sortF=price-low-to-high"', () => {
    Object.assign(window, { location: { search: '?size=6&sortF=price-low-to-high' } })
    const { result } = renderHook(() => useQuery())
    const res = { size: '6', sortF: 'price-low-to-high' }
    expect(result.current).toEqual(res)
  })
})
