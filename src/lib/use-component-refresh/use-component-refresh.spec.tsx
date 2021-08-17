import { renderHook } from '@testing-library/react-hooks'
import useComponentRefresh from '.'

describe('useComponentRefresh()', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useComponentRefresh())
    expect(result.current).toBeInstanceOf(Function)
  })

  it('should re render component', () => {
    const { result } = renderHook(() => useComponentRefresh())
    expect(result.current()).toBe('undefined')
    // TODO: Check component update
  })
})
