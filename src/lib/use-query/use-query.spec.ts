import { renderHook } from '@testing-library/react-hooks'
import useQuery from '.'
import window from '../window'
jest.mock('../window', () => ({}))

describe('useQuery()', () => {
  beforeEach(() => {
    Object.keys(window).forEach((key) => delete window[key])
  })

  it('should parse empty parameter', () => {
    Object.assign(window, { location: { search: '' } })
    const { result } = renderHook(() => useQuery())
    expect(result.current).toEqual({})
  })

  it('should parse single parameter', () => {
    Object.assign(window, { location: { search: '?size=6' } })
    const { result } = renderHook(() => useQuery())
    expect(result.current).toEqual({ size: '6' })
  })

  it('should parse multiply parameters', () => {
    Object.assign(window, { location: { search: '?size=6&sortF=price-low-to-high' } })
    const { result } = renderHook(() => useQuery())
    expect(result.current).toEqual({ size: '6', sortF: 'price-low-to-high' })
  })
})
