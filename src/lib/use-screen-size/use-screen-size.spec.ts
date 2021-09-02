import { renderHook } from '@testing-library/react-hooks'
import useScreenSize from '../use-screen-size'

describe('useScreenSize()', () => {
  it('should return a object', () => {
    const { result } = renderHook(() => useScreenSize())
    expect(result.current).toBeInstanceOf(Object)
  })

  it('check return value width', () => {
    const { result } = renderHook(() => useScreenSize())
    window = Object.assign(window, { innerWidth: 500 })
    expect(result.current.width)
  })

  it('check return value lessThenSmall', () => {
    const { result } = renderHook(() => useScreenSize())
    window = Object.assign(window, { innerWidth: 500 })
    expect(result.current.lessThenSmall)
  })
})
