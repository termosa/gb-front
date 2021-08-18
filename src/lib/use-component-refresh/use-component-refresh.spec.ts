import { renderHook, act } from '@testing-library/react-hooks'
import useComponentRefresh from '.'

describe('useComponentRefresh()', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useComponentRefresh())
    expect(result.current).toBeInstanceOf(Function)
  })

  it('should rerender component', () => {
    let counter = 0

    const { result } = renderHook(() => {
      counter++
      return useComponentRefresh()
    })

    expect(counter).toBe(1)
    act(() => result.current())
    expect(counter).toBe(2)
    act(() => result.current())
    expect(counter).toBe(3)
  })
})
