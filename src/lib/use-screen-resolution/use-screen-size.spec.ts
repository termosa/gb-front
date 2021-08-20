import { renderHook, act } from '@testing-library/react-hooks'
import useScreenSize from '.'

describe('useScreenSize()', () => {
  it('should have initial value', () => {
    const { result } = renderHook(() => useScreenSize())
    expect(result.current.count).toBe(0)
  })

  it('should have set initial value with given number', () => {
    const { result } = renderHook(() => useScreenSize(-10))
    expect(result.current.count).toBe(-10)
  })

  it('should have set initial value from given function', () => {
    const { result } = renderHook(() => useScreenSize(() => -10))
    expect(result.current.count).toBe(-10)
  })

  it('should change initial value by 1', () => {
    const { result } = renderHook(() => useScreenSize())
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  it('should change initial value incrementally', () => {
    const { result } = renderHook(() => useScreenSize())
    act(() => result.current.increment())
    act(() => result.current.increment())
    expect(result.current.count).toBe(2)
  })
})
